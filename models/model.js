const { Schema, model } = require('mongoose'); // ✅ Capital "S" for Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Item = model('Item', itemSchema); // ✅ Correctly creating the model

module.exports = Item; // ✅ Exporting the model
