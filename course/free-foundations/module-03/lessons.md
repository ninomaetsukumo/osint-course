# Ninomae OSINT — Free Foundations — Module 03

**Search Techniques and Public Information Sources**

**Status:** Self-study lessons F03.01–F03.05 approved by course owner

**Target:** Beginners, no specialist software or paid tools

**Workload:** Five 15-minute lessons

> This public repository contains student-facing course material only. Protected answer keys and grading feedback must be stored separately.

---

## F03.01 — Search with Purpose

**Estimated time:** 15 minutes

### Learning objectives
Choose relevant search terms, avoid overly broad searches, and link each search to a research question.

### Searching is not the same as researching
A client asks whether the new public library in fictional Northbridge was formally approved by 30 September. A broad search such as `Northbridge library` may return many unrelated results. A focused search such as `Northbridge library council approval September 2026` connects the subject, authority, event, and date.

### Build a search plan
Identify the subject, issue, responsible body, time period and possible official record. Combine these elements into more than one query if necessary.

### Avoid assuming the answer
A query such as `Northbridge library illegally opened` prejudges the claim. Begin with neutral terms such as approval, opening notice and decision.

### Search results are leads
A result title or snippet is not proof. Examine the original page and its actual claims.

### Guided practice
Write three searches for a fictional university's campus authorization, planned opening and actual operations.

### Lesson check (5 questions; pass 4/5)
1. Which search is more focused on municipal approval?
2. Why begin with neutral search terms?
3. A search-engine snippet is enough to prove the entire claim. True or false?
4. Which is a useful keyword category for finding an official record?
5. What should guide the selection of search terms?

---

## F03.02 — Keywords and Search Operators

**Estimated time:** 15 minutes

### Learning objectives
Construct keyword combinations, use common search operators, and recognize that search-engine support varies.

### What is a keyword?
A keyword is a word or phrase used to help locate relevant information. Useful terms include names, places, events, authorities, record types and dates.

### Basic techniques
| Technique | Example | Purpose |
|---|---|---|
| Exact phrase | `"Northbridge Library"` | Search for a phrase together |
| Site restriction | `site:example.org library` | Narrow to a site or domain |
| File type | `filetype:pdf "annual report"` | Look for indexed PDF documents |
| Exclude term | `jaguar -car` | Attempt to exclude an unwanted meaning |
| Alternative terms | `library approval OR authorization` | Include alternative terms |

Syntax and results vary between search engines and can change over time.

### Step-by-step
To find an annual report, begin with the official organization name and `annual report`. Add the year, then try a site restriction to the actual official domain. Check the page itself.

### Multiple languages
Where records are published in local languages, consider relevant original-language names and terms. Do not invent official-name translations.

### Guided practice
Write a broad search, a narrower search with organization and year, and a search restricted to an official domain.

### Lesson check (5 questions; pass 4/5)
1. What are quotation marks commonly used for in web searches?
2. What is the general purpose of site:?
3. Does filetype:pdf guarantee that every relevant PDF will appear?
4. Can relevant local-language keywords improve research coverage?
5. Do all search engines implement operators identically?

---

## F03.03 — Finding Official Public Records

**Estimated time:** 15 minutes

### Learning objectives
Identify relevant official sources, distinguish original records from reports, and interpret records within their stated scope.

### Public records
Depending on jurisdiction and subject, relevant sources may include corporate registers, municipal decisions, official notices, public budgets, court publications and regulatory announcements. Not all records are public.

### Match the question to the authority
For a fictional training institution's regulated program, identify who issues authorization, whether a public register exists, whether it addresses that exact institution and program, and its effective dates or conditions.

### Recognize original records
Look for an issuing organization, official publication location, document title, reference number if provided, and dates. A copied image alone may not establish authenticity.

### Limits of official documents
A formal approval records approval. It may not establish that construction finished or services began.

### Guided practice
A fictional newspaper claims a public facility was approved. Plan how to locate the original record, including authority, register and decision date.

### Lesson check (5 questions; pass 4/5)
1. Are government records potentially useful in OSINT?
2. Is a newspaper summary always the same as the original official decision?
3. Should the issuing authority and record date be checked?
4. Does formal authorization necessarily prove operations began?
5. Are all official records publicly available in every jurisdiction?

---

## F03.04 — Tracing Information to Its Original Source

**Estimated time:** 15 minutes

### Learning objectives
Follow claims to their origins, distinguish original statements from repeated reporting, and recognize unsupported independence.

### Why source tracing matters
Three websites can repeat a single claim without adding independent evidence.

### Follow the chain
In this fictional example: Article C repeats Article B; Article B cites Article A; Article A cites committee minutes. The original minutes record a recommendation, not a final authorization.

### Locate the origin
Check links, citations, quoted documents, dates and named sources. When an origin cannot be verified, state that limitation.

### Repetition is not corroboration
Repeated wording does not amount to new independent evidence. Independent corroboration requires genuinely separate relevant information. Module 04 covers this more deeply.

### Guided practice
Draw the chain C → B → A → committee minutes and explain why this is not three independent confirmations.

### Lesson check (5 questions; pass 4/5)
1. Can several webpages repeat one original report?
2. Does copying a claim create new independent evidence?
3. Should researchers follow citations or links toward the original material?
4. Can a recommendation and a final decision be different records?
5. Should an untraceable claim be labelled independently confirmed?

---

## F03.05 — Recording and Reproducing Searches

**Estimated time:** 15 minutes

### Learning objectives
Keep a search log, document relevant discovery paths, explain reproducibility and acknowledge changing online results.

### Why record searches?
A search log documents **how** information was discovered. An evidence log documents **what relevant source material** was found.

### Search-log fields
| Field | Meaning |
|---|---|
| Research question | Question the search addresses |
| Date searched | Date the search was actually conducted |
| Search platform | Search engine or official registry |
| Query | Exact terms and operators |
| Relevant result | Document title or URL |
| Research note | Relevance and limitations |

### Reproducibility
A documented method can be understood and attempted by another researcher. Identical results are not guaranteed; websites, indexes and search results change.

### Log only what is needed
The Berkeley Protocol supports documenting relevant search pathways; recording every irrelevant search result is unnecessary.

### Guided practice
Create a search log for an authorized search and include the exact query, platform, date, result and note.

### Lesson check (5 questions; pass 4/5)
1. Is a search log useful for explaining how evidence was found?
2. Should exact queries be recorded when relevant?
3. Will repeated searches always produce identical results?
4. Do search logs and evidence logs serve exactly the same purpose?
5. Is collecting every irrelevant search result necessary for reproducibility?

---

## References and further reading
- Rae Baker, *Deep Dive: Exploring the Real-world Value of Open Source Intelligence*, introductory chapters on OSINT sources and collection.
- United Nations OHCHR and UC Berkeley Human Rights Center, *Berkeley Protocol on Digital Open Source Investigations* (2022), Section VI.A on online inquiries, searching, keywords, and documented pathways. https://www.ohchr.org/sites/default/files/2024-01/OHCHR_BerkeleyProtocol.pdf
- Wayne C. Booth, Gregory G. Colomb and Joseph M. Williams, *The Craft of Research*, relevant sections on evidence, sources and research arguments.

**Provenance:** This is the explicitly approved Module 03 self-study adaptation, not a verbatim reconstruction of original unrecovered draft materials.
