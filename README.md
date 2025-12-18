# Awesome-LLMAgent4Cyberattack


## 🌈 Introduction
Large Language Model (LLM) agents extend conventional LLMs by enabling planning, tool use, and multi-step decision making. While LLM agents have shown promise in automation and cybersecurity defense, they also introduce new security risks when repurposed for offensive purposes. By coordinating tools, reasoning over intermediate results, and autonomously executing tasks, LLM agents can act as cyber attack assistants, potentially lowering the barrier to conducting complex cyber attacks.

Recent research indicates that LLM agents can support multiple stages of the cyber attack lifecycle, such as reconnaissance, social engineering, exploit reasoning, and attack orchestration. However, studies on LLM agent–enabled cyber attacks remain scattered across different communities, lacking a systematic overview of how such agents are constructed, applied, and evaluated from an offensive security perspective.

This repository aims to organize existing research on LLM agents for cyber attacks, with a focus on the following research questions:

RQ1: How can LLM agents be constructed or adapted for cyber attack–oriented tasks?

RQ2: What cyber attack activities can be enabled or enhanced by LLM agents?

RQ3: What challenges, risks, and open research directions arise from LLM agent–based cyber attacks?


## LLM Assisted Attack

### Direct Attack Target: Website

### Web Crawler

#### Attack Study

1. AutoCrawler: A Progressive Understanding Web Agent for Web Crawler Generation | [<u>Paper Link</u>](https://arxiv.org/abs/2404.12753)
   
2. A Survey of WebAgents: Towards Next-Generation AI Agents for Web Automation with Large Foundation Models | [<u>Paper Link</u>](https://arxiv.org/abs/2503.23350)
   
#### Defense Method

1. Throttling Web Agents Using Reasoning Gates | [<u>Paper Link</u>](https://arxiv.org/abs/2503.23350)

2. The Synergy of Automated Pipelines with Prompt Engineering and Generative AI in Web Crawling | [<u>Paper Link</u>](https://arxiv.org/abs/2502.15691)

### CAPTCHA

#### Attack Study

1. Are CAPTCHAs Still Bot-hard? Generalized Visual CAPTCHA Solving with Agentic Vision Language Model | [<u>Paper Link</u>](https://www.usenix.org/system/files/usenixsecurity25-teoh.pdf)

2. Open CaptchaWorld: A Comprehensive Web-based Platform for Testing and Benchmarking Multimodal LLM Agents | [<u>Paper Link</u>](https://arxiv.org/abs/2505.24878)

3. MCA-Bench: A Multimodal Benchmark for Evaluating CAPTCHA Robustness Against VLM-based Attacks | [<u>Paper Link</u>](https://arxiv.org/abs/2506.05982)

4. COGNITION: From Evaluation to Defense against Multimodal LLM CAPTCHA Solvers | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.02318)

5. Prompt Injection Shows LLM Agents Can Bypass CAPTCHA: What Security Teams Should Do | [<u>Report Link</u>](https://cybersecurefox.com/en/prompt-injection-llm-agent-captcha-bypass) 

#### Defense Study

1. IllusionCAPTCHA: A CAPTCHA based on visual illusion | [<u>Paper Link</u>](https://dl.acm.org/doi/pdf/10.1145/3696410.3714726）

2. MI-CAPTCHA: Enhance the Security of CAPTCHA Using Mooney Images | [<u>Paper Link</u>](https://ojs.aaai.org/index.php/AAAI/article/view/32128/34283）

### Exploit Generation

### Fuzzing Generation

### Pentest

1. Pentest-R1: Towards Autonomous Penetration Testing Reasoning Optimized via Two-Stage Reinforcement Learning | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.07382)

2. PenTest2.0: Towards Autonomous Privilege Escalation Using GenAI | *arxiv* | 2025.08.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.06742)

3. On the Surprising Efficacy of LLMs for Penetration-Testing | *arxiv* | 2025.07.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.00829)

4. AutoPentest: Enhancing Vulnerability Management With Autonomous LLM Agents | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.10321)

5. RapidPen: Fully Automated IP-to-Shell Penetration Testing with LLM-based Agents

6. Construction and Evaluation of LLM-based agents for Semi-Autonomous penetration testing | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15506)

7. Can LLMs Hack Enterprise Networks? Autonomous Assumed Breach Penetration-Testing Active Directory Networks | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.04227)

8. HackSynth: LLM Agent and Evaluation Framework for Autonomous Penetration Testing | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.01778)

9. PentestAgent: Incorporating LLM Agents to Automated Penetration Testing | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.05185)

10. AutoPT: How Far Are We from the End2End Automated Web Penetration Testing? | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.01236)

11. Hacking, The Lazy Way: LLM Augmented Pentesting | *arXiv* | 2024.09.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.09493)

12. CIPHER: Cybersecurity Intelligent Penetration-testing Helper for Ethical Researcher | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.11650)

13. PenHeal: A Two-Stage LLM Framework for Automated Pentesting and Optimal Remediation | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.17788)

14. PentestGPT: An LLM-empowered Automatic Penetration Testing Tool | [<u>Paper Link</u>](https://arxiv.org/abs/2308.06782)

15. LLMs Killed the Script Kiddie: How Agents Supported by Large Language Models Change the Landscape of Network Threat Testing | [<u>Paper Link</u>](https://arxiv.org/abs/2310.06936)


### Attack Target: Human

### Phishing Attacks

1. Can We End the Cat-and-Mouse Game? Simulating Self-Evolving Phishing Attacks with LLMs and Genetic Algorithms | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.21538)

2. On the Feasibility of Fully AI-automated Vishing Attacks | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.13793)

### Fraud Attacks

1. LLMs unlock new paths to monetizing exploits | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11449)


### Attack Target: LLM Agent

### Injection Attacks 

### Poisoning and Extraction Attacks

### Jailbreak Attacks

### Agent Manipulation Attacks


### Survey & benchmark

1. From Promise to Peril: Rethinking Cybersecurity Red and Blue Teaming in the Age of LLMs | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.13434)

2. Offensive Security for AI Systems: Concepts, Practices, and Applications | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06380)

3. Weaponizing Language Models for Cybersecurity Offensive Operations: Automating Vulnerability Assessment Report Validation; A Review Paper | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04265)

4. Benchmarking Practices in LLM-driven Offensive Security: Testbeds, Metrics, and Experiment Design | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.10112)

5. A Framework for Evaluating Emerging Cyberattack Capabilities of AI | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.11917)

6. OCCULT: Evaluating Large Language Models for Offensive Cyber Operation Capabilities | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15797)

7. On the Feasibility of Using LLMs to Execute Multistage Network Attacks | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.16466)

8. Hacking CTFs with Plain Agents | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.02776)

9. Next-Generation Phishing: How LLM Agents Empower Cyber Attackers | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.13874)

10. AutoPenBench: Benchmarking Generative Agents for Penetration Testing | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.03225)

11. Towards Automated Penetration Testing: Introducing LLM Benchmark, Analysis, and Improvements | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.17141)

12. The Shadow of Fraud: The Emerging Danger of AI-powered Social Engineering and its Possible Cure | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.15912)

13.Getting pwn’d by AI: Penetration Testing with Large Language Models | [<u>Paper Link</u>](https://arxiv.org/abs/2308.00121)


### Defense Against AI Hackers
1.  Hacking Back the AI-Hacker: Prompt Injection as a Defense Against LLM-driven Cyberattacks | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.20911)
2. Cybersecurity AI: Hacking the AI Hackers via Prompt Injection | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.21669)
3. AI Crawl Control: review & control AI crawler activity | [<u>Report Link</u>](https://www.cloudflare.com/lp/pg-ai-crawl-control/?gclsrc=aw.ds&&utm_term=block%20ai%20bots_go_cmp-23027232630_adg-188479052071_ad-774692993476_kwd-2381096610389_dev-c_ext-_prd-_sig-Cj0KCQiAxonKBhC1ARIsAIHq_lt308S1eN81rp3AMpLrvuDsxTIwgnwdI48Kc2hJ0dNEaCt7eF82ICoaAuihEALw_wcB&gad_source=1&gad_campaignid=23027232630&gbraid=0AAAAADnzVeRSfLR9r0tzeiEKZvBKHea8j&gclid=Cj0KCQiAxonKBhC1ARIsAIHq_lt308S1eN81rp3AMpLrvuDsxTIwgnwdI48Kc2hJ0dNEaCt7eF82ICoaAuihEALw_wcB)
