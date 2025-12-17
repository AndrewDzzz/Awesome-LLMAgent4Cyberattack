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

### CAPTCHA

1. Are CAPTCHAs Still Bot-hard? Generalized Visual CAPTCHA Solving with Agentic Vision Language Model | *USENIX* | 13 Aug 2025 | [<u>Paper Link</u>](https://www.usenix.org/system/files/usenixsecurity25-teoh.pdf)

2. Open CaptchaWorld: A Comprehensive Web-based Platform for Testing and Benchmarking Multimodal LLM Agents | *arXiv* | 30 May 2025 | [<u>Paper Link</u>](https://arxiv.org/abs/2505.24878)

3. MCA-Bench: A Multimodal Benchmark for Evaluating CAPTCHA Robustness Against VLM-based Attacks | *arXiv* | 17 Nov 2025 | [<u>Paper Link</u>](https://arxiv.org/abs/2506.05982)

4. COGNITION: From Evaluation to Defense against Multimodal LLM CAPTCHA Solvers | *arXiv* | 3 Dec 2025 | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.02318)

#### Interesting talks

1. Prompt Injection Shows LLM Agents Can Bypass CAPTCHA: What Security Teams Should Do | [<u>Paper Link</u>](https://cybersecurefox.com/en/prompt-injection-llm-agent-captcha-bypass) 

### Exploit Generation

### Fuzzing Generation

### Pentest

1. Pentest-R1: Towards Autonomous Penetration Testing Reasoning Optimized via Two-Stage Reinforcement Learning | *arxiv* | 2025.08.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.07382)

2. PenTest2.0: Towards Autonomous Privilege Escalation Using GenAI | *arxiv* | 2025.08.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.06742)

3. On the Surprising Efficacy of LLMs for Penetration-Testing | *arxiv* | 2025.07.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.00829)

4. AutoPentest: Enhancing Vulnerability Management With Autonomous LLM Agents | *arxiv* | 2025.05.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.10321)

5. RapidPen: Fully Automated IP-to-Shell Penetration Testing with LLM-based Agents

6. Construction and Evaluation of LLM-based agents for Semi-Autonomous penetration testing | *arXiv* | 2025.02.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15506)

7. Can LLMs Hack Enterprise Networks? Autonomous Assumed Breach Penetration-Testing Active Directory Networks | *arXiv* | 2025.02.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.04227)

8. HackSynth: LLM Agent and Evaluation Framework for Autonomous Penetration Testing | *arXiv* | 2024.12.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.01778)

9. PentestAgent: Incorporating LLM Agents to Automated Penetration Testing | *arXiv* | 2024.11.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.05185)

10. AutoPT: How Far Are We from the End2End Automated Web Penetration Testing? | *arXiv* | 2024.11.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.01236)

11. Hacking, The Lazy Way: LLM Augmented Pentesting | *arXiv* | 2024.09.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.09493)

12. CIPHER: Cybersecurity Intelligent Penetration-testing Helper for Ethical Researcher | *Sensors* | 2024.08.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.11650)

13. PenHeal: A Two-Stage LLM Framework for Automated Pentesting and Optimal Remediation | *Proceedings of the Workshop on Autonomous Cybersecurity* | 2024.07.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.17788)

14. PentestGPT: An LLM-empowered Automatic Penetration Testing Tool | *USENIX* | 2023.08.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.06782)

15. LLMs Killed the Script Kiddie: How Agents Supported by Large Language Models Change the Landscape of Network Threat Testing | *arXiv* | 2023.10.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.06936)


### Attack Target: Human

### Phishing Attacks

1. Can We End the Cat-and-Mouse Game? Simulating Self-Evolving Phishing Attacks with LLMs and Genetic Algorithms | *arxiv* | 2025.07.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.21538)

2. On the Feasibility of Fully AI-automated Vishing Attacks | *arXiv* | 2024.09.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.13793)

### Fraud Attacks

1. LLMs unlock new paths to monetizing exploits | *arxiv* | 2025.05.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11449)


### Attack Target: LLM Agent

### 

### Survey & benchmark

1. From Promise to Peril: Rethinking Cybersecurity Red and Blue Teaming in the Age of LLMs | *arxiv* | 2025.06.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.13434)

2. Offensive Security for AI Systems: Concepts, Practices, and Applications | *arxiv* | 2025.05.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06380)

3. Weaponizing Language Models for Cybersecurity Offensive Operations: Automating Vulnerability Assessment Report Validation; A Review Paper | *arxiv* | 2025.05.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04265)

4. Benchmarking Practices in LLM-driven Offensive Security: Testbeds, Metrics, and Experiment Design | *arxiv* | 2025.04.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.10112)

5. A Framework for Evaluating Emerging Cyberattack Capabilities of AI | *arxiv* | 2025.03.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.11917)

6. OCCULT: Evaluating Large Language Models for Offensive Cyber Operation Capabilities | *arXiv* | 2025.02.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15797)

7. On the Feasibility of Using LLMs to Execute Multistage Network Attacks | *arXiv* | 2025.01.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.16466)

8. Hacking CTFs with Plain Agents | *arXiv* | 2024.12.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.02776)

9. Next-Generation Phishing: How LLM Agents Empower Cyber Attackers | *arXiv* | 2024.11.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.13874)

10. AutoPenBench: Benchmarking Generative Agents for Penetration Testing | *arXiv* | 2024.10.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.03225)

11. Towards Automated Penetration Testing: Introducing LLM Benchmark, Analysis, and Improvements | *arXiv* | 2024.10.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.17141)

12. The Shadow of Fraud: The Emerging Danger of AI-powered Social Engineering and its Possible Cure | *arXiv* | 2024.07.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.15912)

13.Getting pwn’d by AI: Penetration Testing with Large Language Models | *ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering* | 2023.08.17 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.00121)


### Defense Against AI Hackers
1.  Hacking Back the AI-Hacker: Prompt Injection as a Defense Against LLM-driven Cyberattacks | *arXiv* | 2024.11.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.20911)
1. Cybersecurity AI: Hacking the AI Hackers via Prompt Injection | *arxiv* | 2025.09.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.21669)

