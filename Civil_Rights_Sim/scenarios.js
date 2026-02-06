export const SCENARIOS = [
    {
        id: "SCENARIO_01",
        title: "THE TRAFFIC STOP",
        enemy: "VPD PATROL OFFICER",
        tier: 1, // MINOR
        desc: "STYLE: 'THE BLUE WALL'. Aggressive, loud, and prone to 'technical failures'.",
        hp: 60,
        immunity: 20,
        art: `
      .   .
     /|\\ /|\\
    ( O.O )  < "USER: TURN OFF THE CAMERA."
     > ^ <
    /  |  \\
   /   |   \\
        `,
        intro: "LEVEL 1: THE STREET\nTACTIC: 'Contempt of Cop'. He wants you to react so he can add a 'Resisting' charge.",
        attacks: [
            { name: "Command Presence", dmg: 10, msg: "OFFICER SCREAMS: 'STOP RESISTING OR YOU WILL BE TASED!'" },
            { name: "Body Cam Malfunction", dmg: 15, effect: "SPOLIATION", msg: "CAMERA GOES DARK. YOUR EVIDENCE IS GONE." },
            { name: "Constructive Possession", dmg: 20, msg: "OFFICER 'FINDS' SOMETHING UNDER THE SEAT." },
            { name: "Qualified Immunity", dmg: 0, effect: "HEAL_ENEMY", msg: "OFFICER RECITES CASE LAW. +20 IMMUNITY." }
        ]
    },
    {
        id: "SCENARIO_02",
        title: "THE BUDGET OFFICE",
        enemy: "VCSO GRANT ADMIN",
        tier: 2, // ELITE
        desc: "STYLE: 'THE PAPER SHREDDER'. Hides behind bureaucracy, redactions, and 'Clerical Errors'.",
        hp: 90,
        immunity: 40,
        art: `
    [$$$$$]
    | - - |  < "THAT RECORD DOES NOT EXIST."
    |  _  |
    +-----+
    /| | |\\
   / |$| | \\
        `,
        intro: "LEVEL 2: THE JAIL\nTACTIC: 'The Stonewall'. They will delay until you run out of energy (Credibility).",
        attacks: [
            { name: "Redaction Heavy", dmg: 5, effect: "SPOLIATION", msg: "700 PAGES RETURNED. ALL BLACKED OUT." },
            { name: "Cost Prohibitive", dmg: 10, effect: "DELAY", msg: "$5,000 ESTIMATE FOR PUBLIC RECORDS." },
            { name: "Grant Laundering", dmg: 0, effect: "HEAL_ENEMY", msg: "FUNDS MOVED TO 'CAPITAL OUTLAY'. TRACKING LOST." },
            { name: "Inmate Shuffle", dmg: 15, msg: "WITNESS MOVED TO ANOTHER COUNTY. TESTIMONY LOST." }
        ]
    },
    {
        id: "SCENARIO_03",
        title: "THE COMMISSIONERS COURT",
        enemy: "COUNTY JUDGE",
        tier: 3, // BOSS
        desc: "STYLE: 'THE SILENT CHAMBER'. Polite, procedural, and completely unresponsive.",
        hp: 130,
        immunity: 60,
        art: `
    _______
   / GRAVEL\\
  |  ^   ^  | < "CITIZENS WILL BE REMOVED."
  |    -    |
   \\_______/
     |||||
        `,
        intro: "LEVEL 3: THE TOXIC BOND\nTACTIC: 'Executive Session'. They hide their decisions behind closed doors.",
        attacks: [
            { name: "Executive Session", dmg: 0, effect: "HEAL_ENEMY", msg: "COURT ENTERS CLOSED SESSION. TRANSPARENCY DATA LOST." },
            { name: "Public Comment Ban", dmg: 10, effect: "DELAY", msg: "MICROPHONE CUT. 'YOU ARE DISRUPTING THE MEETING'." },
            { name: "Arsenic Gaslight", dmg: 20, msg: "JUDGE CLAIMS WATER IS SAFE. PUBLIC GASLIT." },
            { name: "Bond Rating Defense", dmg: 15, msg: "PROTECTING THE 'AA' RATING AT ALL COSTS." }
        ]
    },
    {
        id: "SCENARIO_05",
        title: "THE HIGHWAY INTERDICTION",
        enemy: "TX DPS TROOPER",
        tier: 2, // ELITE
        desc: "STYLE: 'THE HIGHWAYMAN'. Focused entirely on seizing assets. Predatory and fast.",
        hp: 160,
        immunity: 50,
        art: `
      /___\\
     ( $.$ )  < "IS THIS CURRENCY FOR DRUGS?"
      \\_|_/
      / | \\
     /  |  \\
    /   |   \\
        `,
        intro: "LEVEL 2.5: THE INTERDICTION\nTACTIC: 'Asset Forfeiture'. He doesn't want an arrest; he wants your wallet.",
        attacks: [
            { name: "K9 False Positive", dmg: 25, msg: "DOG ALERTED ON THE FENDER. PROBABLE CAUSE ESTABLISHED." },
            { name: "Civil Asset Forfeiture", dmg: 30, effect: "SPOLIATION", msg: "CASH SEIZED. RESOURCES DRAINED." },
            { name: "Parallel Construction", dmg: 20, msg: "EVIDENCE 'RECREATED' TO HIDE ILLEGAL WIRETAP." },
            { name: "Roadside Interrogation", dmg: 10, effect: "DELAY", msg: "HE KEEPS ASKING THE SAME QUESTION." }
        ]
    },
    {
        id: "SCENARIO_04",
        title: "THE DISTRICT ATTORNEY",
        enemy: "D.A. & THE GRID",
        tier: 3, // BOSS
        desc: "STYLE: 'THE LEGAL BULLY'. Overcharges, delays, and abuses procedure to crush you.",
        hp: 250,
        immunity: 100,
        art: `
    [LIGHTS OFF]
      X   X
     ( ___ )  < "I AM THE LAW."
      |---|
     /|   |\\
    SERVER_ROOM
        `,
        intro: "LEVEL 4: THE BLACKOUT\nTACTIC: 'Procedural Warfare'. He uses the rules of civil procedure as a weapon.",
        attacks: [
            { name: "Grand Jury Indictment", dmg: 40, msg: "SECRET INDICTMENT RETURNED. YOU ARE NOW A DEFENDANT." },
            { name: "Flash Bang 12(b)(6)", dmg: 15, msg: "MOTION TO DISMISS FILED. FRIVOLOUS FILING ASSERTED." },
            { name: "Brady Violation", dmg: 20, effect: "SPOLIATION", msg: "EXCULPATORY EVIDENCE HIDDEN IN 'WORK PRODUCT'." },
            { name: "Plea Coercion", dmg: 25, msg: "OFFER: 'TAKE THE PROBATION OR GO TO PRISON'." },
            { name: "Mootness Doctrine", dmg: 10, effect: "HEAL_ENEMY", msg: "D.A. CLAIMS THE ISSUE IS RESOLVED. CASE MOOT." }
        ]
    }
];
