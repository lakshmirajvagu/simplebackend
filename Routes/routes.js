const express = require('express');
const router = express.Router();
const { getItems, createItem,deleteItem,updateItem } = require('../controllers/controller'); // Import controllers

// Define routes
router.get('/getitems', getItems); // Fetch all items
router.post('/postitems', createItem); // Add a new item
router.delete('/delete/:id', deleteItem); // Delete an item
router.put('/update/:id', updateItem); // Update an item
module.exports = router;
