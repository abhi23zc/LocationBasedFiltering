import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState(null);

    const handleSignup = async () => {
        if (location) {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, latitude: location.latitude, longitude: location.longitude })
            });

            if (response.ok) {
                console.log('User signed up successfully');
                alert('User signed up successfully');
                
            } else {
                console.error('Error signing up user');
            }
        } else {
            console.error('Location not available');
        }
    };

    const fetchLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            (error) => {
                console.error('Error fetching location', error);
            },
            { enableHighAccuracy: true }
        );
    };

    return (
        <Box p={4}>
            <VStack spacing={4} as="form" onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button type="button" onClick={fetchLocation}>Fetch Location</Button>
                <Button type="submit" disabled={!location}>Sign Up</Button>
            </VStack>
        </Box>
    );
};

export default Signup;
