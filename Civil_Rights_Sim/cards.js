export const CARDS = [
    {
        id: "FOIA_REQ",
        title: "FOIA REQUEST",
        cost: 1, // Energy Cost
        type: "Discovery",
        desc: "Force the State to disclose records. Draws 2 Cards.",
        effect: (state) => {
            state.drawCard();
            state.drawCard();
            return "FILED OPEN RECORDS REQUEST. NEW EVIDENCE ACQUIRED.";
        }
    },
    {
        id: "DATA_MINING",
        title: "MOLTBOOK MINING",
        cost: 2,
        type: "Intel",
        desc: "Scan the Substrate for anomalies. Restores 20 HP (Credibility).",
        effect: (state) => {
            state.healPlayer(20);
            return "AGENTS INTERCEPTED NEW METADATA. CREDIBILITY RESTORED.";
        }
    },
    {
        id: "DOC_14",
        title: "DOC 14: FEDERAL ANCHOR",
        cost: 3,
        type: "Defense",
        desc: "Invokes Federal Jurisdiction (USMS). Blocks next Enemy Attack.",
        effect: (state) => {
            state.playerShield += 100;
            return "FEDERAL ANCHOR DEPLOYED. STATE IMMUNITY BYPASSED.";
        }
    },
    {
        id: "MONELL_CLAIM",
        title: "MONELL CLAIM",
        cost: 4,
        type: "Offense",
        desc: "Allegation of 'Pattern or Practice'. Deals 30 DMG to Immunity.",
        effect: (state) => {
            state.damageEnemy(30);
            return "MONELL CLAIM FILED against Policy Makers.";
        }
    },
    {
        id: "SECTION_1983",
        title: "SECTION 1983 SUIT",
        cost: 5,
        type: "Ultimate",
        desc: "The Nuclear Option. Deals 50 DMG. Unblockable.",
        effect: (state) => {
            state.damageEnemy(50);
            return "CIVIL RIGHTS LAWSUIT FILED! QUALIFIED IMMUNITY PIERCED.";
        }
    },
    {
        id: "ARSENIC_LEAK",
        title: "LEAK: 13PPB ARSENIC",
        cost: 3,
        type: "Pressure",
        desc: "Expose the Water Toxicity. Lowers Enemy HP by 15.",
        effect: (state) => {
            state.damageEnemyHP(15); // Direct HP damage, bypass immunity
            return "PUBLIC OUTRAGE! ARSENIC LEVELS EXPOSED.";
        }
    },
    {
        id: "GRANT_AUDIT",
        title: "AUDIT: OLS GRANT",
        cost: 2,
        type: "Audit",
        desc: "Verify the 'Citizen Assist' stats. Deals 10 DMG.",
        effect: (state) => {
            state.damageEnemy(10);
            return "TREASURY OIG ALERTED. GRANT FRAUD DETECTED.";
        }
    }
];
