"use strict";
(function(){
const endpoint="https://bopuiaqmckhzmujskqox.supabase.co";
const publishable="sb_publishable_tgG-yMWIXfF__tNkQQigOQ_aZMAxqqw";
let client=null,ready=false;
function status(t){const el=document.getElementById("auth-status");if(el)el.textContent=t;}
async function init(){
 if(!window.supabase){status("Authentication library unavailable. Reload and check browser network access.");return;}
 client=window.supabase.createClient(endpoint,publishable,{auth:{autoRefreshToken:true,persistSession:true,detectSessionInUrl:true}});
 ready=true;
 const {data}=await client.auth.getUser();
 showUser(data?.user);
 client.auth.onAuthStateChange((_event,session)=>showUser(session?.user));
 document.getElementById("auth-signin").onclick=()=>auth("signin");
 document.getElementById("auth-signup").onclick=()=>auth("signup");
 document.getElementById("auth-signout").onclick=async()=>{await client.auth.signOut();showUser(null);};
}
function showUser(user){document.getElementById("auth-signout").hidden=!user;document.getElementById("auth-signin").hidden=!!user;document.getElementById("auth-signup").hidden=!!user;status(user?"Signed in as "+user.email:"Not signed in. Assessment submissions require an account.");}
async function auth(type){if(!ready)return;const email=document.getElementById("auth-email").value.trim(),password=document.getElementById("auth-password").value;if(!email||!password){status("Enter an email address and password.");return;}status("Processing…");const result=type==="signin"?await client.auth.signInWithPassword({email,password}):await client.auth.signUp({email,password});if(result.error){status(result.error.message);return;}status(type==="signup"&&!result.data.session?"Registration submitted. Confirm the email before signing in.":"Signed in.");}
function h(tag,txt){const e=document.createElement(tag);if(txt!==undefined)e.textContent=txt;return e;}
function quiz(block,code,capstone){const headings=[...block.querySelectorAll("h4")].filter(x=>/^Question (?:[1-9]|10)$/.test(x.textContent.trim()));if(headings.length!==10)return;let q=[];for(const heading of headings){const between=[];let el=heading.nextElementSibling;while(el&&!/^H[234]$/.test(el.tagName)){between.push(el.textContent.trim());el=el.nextElementSibling;}const body=between.join("\n");const options=[...body.matchAll(/(?:^|\n)([A-D])\.\s*([^\n]+)/g)];if(options.length<3)return;q.push({prompt:body.split("\n")[0],choices:options.map(m=>({letter:m[1],label:m[2].trim()}))});}
const form=h("form");form.className="graded-form";form.append(h("h3","Submit "+code+" for grading"));form.append(h("p","Each correct answer is worth 10 points. The passing score is 80/100. Results are saved only after signed-in submission."));q.forEach((item,i)=>{const box=h("fieldset");const legend=h("legend",(i+1)+". "+item.prompt);box.append(legend);item.choices.forEach(c=>{const label=h("label");const input=document.createElement("input");input.type="radio";input.name="q"+i;input.value=c.letter;input.required=true;label.append(input,document.createTextNode(" "+c.letter+". "+c.label));box.append(label);});form.append(box);});const button=h("button","Submit answers securely");button.type="submit";const result=h("p");result.setAttribute("role","status");form.append(button,result);form.onsubmit=async event=>{event.preventDefault();if(!ready){result.textContent="Authentication is unavailable.";return;}const session=(await client.auth.getSession()).data.session;if(!session){result.textContent="Sign in before submitting.";return;}const answers=q.map((_,i)=>({question_code:"Q"+String(i+1).padStart(2,"0"),answer:form.elements["q"+i].value}));if(answers.some(a=>!a.answer)){result.textContent="Answer all questions.";return;}button.disabled=true;result.textContent="Grading…";try{const response=await fetch(endpoint+"/functions/v1/ninomae-grade-assessment",{method:"POST",headers:{"Authorization":"Bearer "+session.access_token,"apikey":publishable,"Content-Type":"application/json"},body:JSON.stringify({assessment_code:code,answers})});const d=await response.json();result.textContent=response.ok?"Recorded score: "+d.score+"/100 — "+(d.passed?"Passed":"Not passed")+". Certificate issuance is not active.":(d.error||"Submission failed.");}catch(e){result.textContent="Could not reach the grading service."; }finally{button.disabled=false;}};block.prepend(form);}
function mountModule(num,container){const div=[...container.querySelectorAll("h3")];const first=div.find(x=>/knowledge assessment/i.test(x.textContent));const practical=div.find(x=>/practical assessment|M01-PA/i.test(x.textContent));if(first){const slot=h("div");first.after(slot);const temp=h("div");let node=first.nextElementSibling;while(node&&node!==practical){temp.append(node.cloneNode(true));node=node.nextElementSibling;}quiz(temp,"M0"+num+"-KNOWLEDGE");if(temp.querySelector(".graded-form"))slot.append(temp.querySelector(".graded-form"));}
if(num===2){const note=h("p","Module 02's practical is a written assignment and requires rubric-based review. It is not automatically graded.");container.prepend(note);return;}
if(practical){const temp=h("div");let node=practical.nextElementSibling;while(node){temp.append(node.cloneNode(true));node=node.nextElementSibling;}quiz(temp,"M0"+num+"-PRACTICAL");if(temp.querySelector(".graded-form"))practical.after(temp.querySelector(".graded-form"));}
}
function mountCapstone(container){
 fetch("../course/free-foundations/final-capstone/student-capstone.md").then(r=>{if(!r.ok)throw Error("Capstone unavailable");return r.text();}).then(raw=>{
 const start=raw.indexOf("## Capstone assessment — 15 questions");
 const end=raw.indexOf("## Final deliverable");
 if(start<0||end<start)throw Error("Capstone source format");
 const s=raw.slice(start,end);
 const lines=s.split("\n");const questions=[];
 for(let i=0;i<lines.length;i++){
   const m=lines[i].trim().replaceAll(String.fromCharCode(92),"").match(/^([0-9]{1,2})\.\s+(.+)$/);
   if(!m)continue;
   const opts=[];let j=i+1;
   while(j<lines.length&&opts.length<4){const t=lines[j++].trim();if(!t||/^[68] pts$/.test(t))continue;if(/^Stage [0-9]/.test(t)||/^[0-9]{1,2}\./.test(t.replaceAll(String.fromCharCode(92),"")))break;opts.push(t);}
   if(opts.length===4)questions.push({num:Number(m[1]),prompt:m[2],opts});
 }
 if(questions.length!==15)throw Error("Capstone question parsing failed: "+questions.length);
 const form=h("form");form.className="graded-form";form.append(h("h3","Northbridge final capstone — secure submission"));form.append(h("p","15 questions, 100 points, pass at 80. Sign in to submit and record a score."));
 questions.forEach(q=>{
  const field=h("fieldset");field.append(h("legend",q.num+". "+q.prompt));
  q.opts.forEach((o,j)=>{const label=h("label"),input=document.createElement("input");input.type="radio";input.name="q"+q.num;input.value="ABCD"[j];input.required=true;label.append(input,document.createTextNode(" "+o));field.append(label);});form.append(field);
 });
 const button=h("button","Submit Northbridge capstone securely");button.type="submit";const result=h("p");result.setAttribute("role","status");form.append(button,result);
 form.onsubmit=async e=>{e.preventDefault();if(!client){result.textContent="Sign-in is unavailable.";return;}const session=(await client.auth.getSession()).data.session;if(!session){result.textContent="Please sign in before submission.";return;}const answers=questions.map(q=>({question_code:"Q"+String(q.num).padStart(2,"0"),answer:form.elements["q"+q.num].value}));if(answers.some(a=>!a.answer)){result.textContent="Answer all 15 questions.";return;}button.disabled=true;result.textContent="Submitting for grading…";try{const response=await fetch(endpoint+"/functions/v1/ninomae-grade-assessment",{method:"POST",headers:{Authorization:"Bearer "+session.access_token,apikey:publishable,"Content-Type":"application/json"},body:JSON.stringify({assessment_code:"FREE-FOUNDATIONS-CAPSTONE",answers})});const d=await response.json();result.textContent=response.ok?"Recorded capstone score: "+d.score+"/100 — "+(d.passed?"Passed":"Not passed")+". Certificates are not issued yet.":d.error||"Submission unsuccessful."; }catch(err){result.textContent="Unable to connect to grading service.";}finally{button.disabled=false;}};
 container.prepend(form);
 }).catch(e=>{const p=h("p","Graded capstone currently unavailable: "+e.message);container.prepend(p);});
}
window.NinomaeGrade={mountModule,mountCapstone};document.addEventListener("DOMContentLoaded",init);
})();