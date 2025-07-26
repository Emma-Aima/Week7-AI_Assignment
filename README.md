# Assignment Week 7: Ethical AI Analysis & Implementation Guide
This repository contains a comprehensive exploration of ethical AI principles, case studies, practical audits, and policy recommendations. Below is a structured summary of all sections, including code, reports, and guidelines.

## Project Lead:
Emmanuella Aimalohi Ileogben - emmanuellaileogben@gmail.com

## Table of Contents

- Part 1: Theoretical Understanding
- Part 2: Case Study Analysis
- Part 3: Practical Audit
- Part 4: Ethical Reflection
- Bonus: Policy Proposal
- Usage & Requirements
- Contributing

### Part 1: Theoretical Understanding
**Key Topics Covered**

- Algorithmic Bias: Definition and examples (e.g., hiring algorithms, facial recognition).
- Transparency vs. Explainability: Why both are critical for trust and compliance (GDPR).
- GDPR Impact: How EU regulations shape AI development (data minimization, right to explanation).
- Ethical Principles Matching: Justice, non-maleficence, autonomy, and sustainability.

**Deliverables**
- Short answers to theoretical questions.
- Matched ethical principles to definitions.

### Part 2: Case Study Analysis
Case 1: Amazon’s Biased Hiring Tool
Source of Bias: Skewed training data, gendered feature weighting.

**Proposed Fixes:**
- Debiased datasets.
- Fairness-aware algorithms (e.g., adversarial debiasing).
- Human-in-the-loop validation.

Fairness Metrics: Disparate impact ratio, predictive parity.

Case 2: Facial Recognition in Policing
Ethical Risks: Wrongful arrests, privacy violations, systemic bias.

**Policy Recommendations:**
- Legislative bans in high-risk contexts.
- Mandatory third-party audits.
- Community engagement in deployment.

**Deliverables**
- Detailed case study reports with actionable solutions.

### Part 3: Practical Audit
COMPAS Recidivism Dataset Analysis
Goal: Audit racial bias in risk scores using Python and AIF360.

**Key Steps:**
- Data preprocessing (pandas).
- Bias metric calculation (false positive rates, disparate impact).
- Visualization (matplotlib, seaborn).

Findings: Higher false positives for Black defendants.
Remediation: Reweighing, adversarial debiasing.

**Deliverables**
- Jupyter Notebook with full code.
- 300-word audit report.

### Part 4: Ethical Reflection
Personal Project: AI Resume Screener

Ethical Safeguards:
- Fairness: Debiasing training data (AIF360).
- Transparency: SHAP explanations for rejections.
- Privacy: Anonymization and data minimization.

Quote: "Ethics is a design constraint—like gravity in engineering."

**Deliverables**
300-word reflection.

### Bonus: Policy Proposal
Ethical AI in Healthcare Guidelines

- Patient Consent: Opt-in protocols, right to opt-out.
- Bias Mitigation: Diverse datasets, quarterly audits.
- Transparency: Plain-language explanations, algorithm disclosure.
- Accountability: Human oversight, error reporting.

**Deliverables**
1-page PDF policy draft.

### Usage & Requirements
Dependencies

- Python 3.8+
- Libraries: pandas, matplotlib, seaborn, aif360
- Dataset: COMPAS

**Run This Audit:**

``sh
git clone [repo_url]
cd ethical-ai-audit
pip install -r requirements.txt
jupyter notebook COMPAS_Analysis.ipynb
``

### Contributing

- Issues: Report bugs or suggest enhancements.
- Pull Requests: Submit fixes/additions with clear documentation.
- License: MIT

**References:**

- ProPublica’s COMPAS investigation.
- IBM’s AIF360 toolkit.
- GDPR/WHO guidelines.
- Author: Ileogben Emmanuella Aimalohi | Date: 25/07/2025

## Project (Fairscore Comapass Dashboard) info
**URL**: https://lovable.dev/projects/4831259a-95a2-4b81-8f7e-70627a7dc49c 
**Use Lovable**

- Simply visit the [Lovable Project](https://lovable.dev/projects/4831259a-95a2-4b81-8f7e-70627a7dc49c) and start prompting.
- Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

- If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.
- The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4831259a-95a2-4b81-8f7e-70627a7dc49c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!
To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.
Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)


**✨Ethical AI isn't the future, it's the foundation!**
