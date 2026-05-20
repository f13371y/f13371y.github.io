---
layout: default
title: Challenge Writeup
custom_js:
  - /assets/js/decrypt-core.js
---

# 🏁 System Exploitation Walkthrough

We successfully escalated our privileges by abusing the misconfigured cron job configuration. 

## 0x01. Capturing the Flag
Below is the encrypted layer containing the final proof-of-concept string. You will need to enter the password to view the flag.

<!-- Just leave the target div here -->
<div id="encrypted-flag-box"></div>

<!-- Force script injection support -->
<script src="https://cloudflare.com"></script>
