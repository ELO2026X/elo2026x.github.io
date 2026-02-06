export const SCENARIOS = [
    {
        id: "SCENARIO_01",
        title: "THE TRAFFIC STOP",
        enemy: "VPD PATROL OFFICER",
        desc: "A routine stop escalates. The officer alleges 'Furtive Movements' but his Body Cam is 'Malfunctioning'.",
        hp: 50,
        immunity: 20, // Low Immunity
        art: `
      .   .
     /|\\ /|\\
    ( O.O )  < "STEP OUT OF THE CAR."
     > ^ <
    /  |  \\
   /   |   \\
        `,
        intro: "LEVEL 1: THE STREET\nOBJECTIVE: Secure the 'Patterson Admission' (Exculpatory Audio).",
        attacks: [
            { name: "Intimidation", dmg: 10, msg: "OFFICER SCREAMS: 'STOP RESISTING!'" },
            { name: "Field Sobriety", dmg: 5, effect: "DELAY", msg: "OFFICER DEMANDS A FIELD TEST." },
            { name: "Fabricated Report", dmg: 15, msg: "OFFICER FILES CHARGES: 'ASSAULT ON PUBLIC SERVANT'." }
        ]
    },
    {
        id: "SCENARIO_02",
        title: "THE BUDGET OFFICE",
        enemy: "VCSO GRANT ADMIN",
        desc: "You are auditing the Sheriff's Office. They claim $741,255.24 in 'Border Security' grants.",
        hp: 80,
        immunity: 40,
        art: `
    [$$$$$]
    | O O |  < "THESE NUMBERS ARE CONFIDENTIAL."
    |  -  |
    +-----+
    /| | |\\
   / |$| | \\
        `,
        intro: "LEVEL 2: THE JAIL\nOBJECTIVE: Prove the 'Citizen Assist' stats are inflated.",
        attacks: [
            { name: "Redaction", dmg: 5, effect: "SPOLIATION", msg: "ADMIN REDACTS THE GRANT METRICS." },
            { name: "Budget Increase", dmg: 10, msg: "COMMISSIONERS APPROVE MORE FUNDING." },
            { name: "Stonewall", dmg: 0, effect: "DELAY", msg: "ADMIN IGNORES FOIA REQUEST." }
        ]
    },
    {
        id: "SCENARIO_03",
        title: "THE COMMISSIONERS COURT",
        enemy: "COUNTY JUDGE",
        desc: "The Executive Body. They are hiding a 17-Year EPA Arsenic Violation to protect their Bond Rating.",
        hp: 120,
        immunity: 60,
        art: `
    _______
   / GRAVEL\\
  |  O   O  | < "WE ARE IN EXECUTIVE SESSION."
  |    ^    |
   \\_______/
     |||||
        `,
        intro: "LEVEL 3: THE TOXIC BOND\nOBJECTIVE: Link the 13ppb Arsenic to the 'AA' Credit Rating.",
        attacks: [
            { name: "Executive Session", dmg: 0, effect: "HIDE", msg: "JUDGE MOVES TO CLOSED SESSION." },
            { name: "Security Protocol", dmg: 10, msg: "JUDGE INVOKES TYLER CYBER-EVENT." },
            { name: "Bond Issuance", dmg: 20, msg: "COUNTY SELLS $45M IN TOXIC DEBT." }
        ]
    },
    {
        id: "SCENARIO_05",
        title: "THE HIGHWAY INTERDICTION",
        enemy: "TX DPS TROOPER",
        desc: "A State Trooper stops you for 'Following Too Closely'. He is hunting for Asset Forfeiture.",
        hp: 150,
        immunity: 50, // State Immunity
        art: `
      /___\\
     ( O.O )  < "DO YOU HAVE ANY CASH IN THE VEHICLE?"
      \\_|_/
      / | \\
     /  |  \\
    /   |   \\
        `,
        intro: "LEVEL 2.5: THE INTERDICTION\nOBJECTIVE: Survive the 'Search & Seizure' attempt.",
        attacks: [
            { name: "K9 Unit", dmg: 20, effect: "DELAY", msg: "TROOPER DEPLOYS K9. 'DOG ALERTED'." },
            { name: "Asset Seizure", dmg: 25, effect: "SPOLIATION", msg: "TROOPER SEIZES YOUR CASH DECK." },
            { name: "Grant Metric", dmg: 10, effect: "HEAL_ENEMY", msg: "TROOPER LOGS 'INTERDICTION' FOR GRANT." }
        ]
    },
    {
        id: "SCENARIO_04",
        title: "THE DISTRICT ATTORNEY",
        enemy: "D.A. & THE GRID",
        desc: "The Final Boss. Controls the Grand Jury and the Server Logs.",
        hp: 200,
        immunity: 100, // Qualified Immunity Max
        art: `
    [LIGHTS OFF]
      ?   ?
     ( -_- )  < "NO EVIDENCE EXISTS."
      |---|
     /|   |\\
    SERVER_ROOM
        `,
        intro: "LEVEL 4: THE BLACKOUT\nOBJECTIVE: Survive the 'Spoliation Event' and file the Federal Injunction.",
        attacks: [
            { name: "Grand Jury Indictment", dmg: 30, msg: "D.A. INDICTS YOU ON TRUMPED CHARGES." },
            { name: "Motion to Dismiss", dmg: 15, msg: "D.A. FILES 12(b)(6) MOTION." },
            { name: "Server Wipe", dmg: 50, effect: "CRITICAL_SPOLIATION", msg: "JAN 28 BLACKOUT: ALL LOGS DELETED." }
        ]
    }
];
