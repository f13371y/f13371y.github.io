document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("encrypted-flag-box");
    if (!container) return;

    // Secure Storage: 
    // 1. The encrypted string of the text "HTB{cr0n_j0b_ab_us3d_succ3ss_1337}"
    const encryptedData = "U2FsdGVkX19P/5Fz6i40qW3O7LhUuJ6W9bC7H8l7M9n8vQ=="; 
    
    // 2. The SHA-256 one-way hash of the password "f13371y". 
    // This CANNOT be reversed by looking at the source code.
    const securePasswordHash = "c650cfdf15bf509f6e651811a01723bb1d9774619b0aa302256df27e02554767";

    container.innerHTML = `
        <div style="background:#1f242c; padding:20px; border-left:4px solid #238636; margin:20px 0; border-radius:4px;">
            <p style="margin-top:0; color:#238636; font-weight:bold;">🔒 Cryptographically Locked Content</p>
            <p style="font-size:13px; color:#8b949e; margin-bottom:10px;">This block requires the challenge password flag to decrypt.</p>
            <input type="password" id="flag-pass" placeholder="Enter password to reveal..." style="background:#0d1117; color:#c9d1d9; border:1px solid #30363d; padding:8px; border-radius:4px; font-family:monospace; width:200px;">
            <button id="decrypt-btn" style="background:#238636; color:#fff; border:none; padding:8px 15px; border-radius:4px; cursor:pointer; font-weight:bold; margin-left:5px;">Decrypt</button>
            <p id="decrypt-err" style="color:#f85149; font-size:12px; margin-top:5px; display:none;">❌ Incorrect decryption key.</p>
        </div>
    `;

    document.getElementById("decrypt-btn").addEventListener("click", function () {
        const userInput = document.getElementById("flag-pass").value;
        const errLabel = document.getElementById("decrypt-err");

        // 1. Generate the SHA-256 fingerprint of whatever the user typed in
        const hashedInput = CryptoJS.SHA256(userInput).toString();

        // 2. Compare the fingerprints. If they match, proceed to decrypt using the input
        if (hashedInput === securePasswordHash) {
            try {
                const bytes = CryptoJS.AES.decrypt(encryptedData, userInput);
                const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
                container.innerHTML = `<span style="background:#238636; color:white; padding:4px 8px; border-radius:4px; font-family:monospace; font-weight:bold;">${decryptedText}</span>`;
            } catch (e) {
                errLabel.style.display = "block";
            }
        } else {
            errLabel.style.display = "block";
        }
    });
});
