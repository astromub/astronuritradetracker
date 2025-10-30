// ASTRONuRi License Vault
// This file contains all valid license codes for the trading tracker

const licenseVault = {
    // PRO Codes: Unlocks 50 Trades/90 minutes per session for 3 sessions.
    "ASTRO-PRO-001": "Pro",
    "PRO-TRADER-BETA": "Pro",
    "90MIN-UPGRADE-50T": "Pro",
    
    // UNLIMITED Codes: Disables trade and time limits for the single session day.
    "ULT-MAX-ALPHA": "Unlimited",
    "ASTRO-UNL-999": "Unlimited",
    "NO-LIMIT-ACCESS": "Unlimited"
};

console.log("License vault loaded with", Object.keys(licenseVault).length, "codes");