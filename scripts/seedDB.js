const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/incDatabase"
  );

  const consumableSeed = [
      {
          name: "Sword Upgrade",
          description: "Raises attack power by 1",
          tier: 1,
          type: "Attack",
          effect: 1
      },
      {
        name: "Strength Upgrade",
        description: "Raises attack power by 1",
        tier: 1,
        type: "Attack",
        effect: 1 
      },
      {
        name: "Training Session",
        description: "Raises attack power by 1",
        tier: 1,
        type: "Attack",
        effect: 1 
      },
      {
        name: "Sword Upgrade II",
        description: "Raises attack power by 2",
        tier: 2,
        type: "Attack",
        effect: 2 
      },
      {
        name: "Strength Upgrade II",
        description: "Raises attack power by 2",
        tier: 2,
        type: "Attack",
        effect: 2 
      },
      {
        name: "Training Session II",
        description: "Raises attack power by 2",
        tier: 2,
        type: "Attack",
        effect: 2 
      },
      {
        name: "Sword Upgrade III",
        description: "Raises attack power by 3",
        tier: 3,
        type: "Attack",
        effect: 3 
      },
      {
        name: "Strength Upgrade III",
        description: "Raises attack power by 3",
        tier: 3,
        type: "Attack",
        effect: 3 
      },
      {
        name: "Training Session III",
        description: "Raises attack power by 3",
        tier: 3,
        type: "Attack",
        effect: 3 
      },
      {
        name: "Sword Upgrade VI",
        description: "Raises attack power by 4",
        tier: 4,
        type: "Attack",
        effect: 4 
      },
      {
        name: "Strength Upgrade VI",
        description: "Raises attack power by 4",
        tier: 4,
        type: "Attack",
        effect: 4 
      },
      {
        name: "Training Session VI",
        description: "Raises attack power by 4",
        tier: 4,
        type: "Attack",
        effect: 4 
      }
  ];

  db.Consumable
  .remove({})
  .then(() => db.Consumable.insertMany(consumableSeed))
  .then(data => {
      console.log("--All consumable data inserted!--");
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });