const express = require('express');
const mongoose = require('mongoose');
const User = require('./src/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/zrf', { useNewUrlParser: true, useUnifiedTopology: true });
app.post('/signup', async (req, res) => {
    const { name, email, password, latitude, longitude } = req.body;

    const user = new User({
        name,
        email,
        password,
        location: {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    });

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/users/nearby', async (req, res) => {
    const { latitude, longitude } = req.query;

    try {
        const users = await User.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 5000 // in meters
                }
            }
        });
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
