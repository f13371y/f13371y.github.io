---
layout: default
title: Challenge Writeup
---

# 🏁 System Exploitation Walkthrough

We successfully escalated our privileges by abusing the misconfigured cron job configuration. 

## 0x01. Capturing the Flag
Below is the encrypted layer containing the final proof-of-concept string. You will need to enter the password to view the flag.

<!-- This is where the magic decryption engine will load -->
<div id="encrypted-flag-box"></div>

<!-- We load the cryptographic scripts right here natively -->
<script src="https://cloudflare.com"></script>
<script src="/assets/js/decrypt-core.js"></script>
