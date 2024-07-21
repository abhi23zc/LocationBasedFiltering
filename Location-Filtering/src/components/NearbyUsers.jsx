import React, { useState, useEffect } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const NearbyUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const response = await fetch(`http://localhost:3000/users/nearby?latitude=${latitude}&longitude=${longitude}`);
                const users = await response.json();
                setUsers(users);
       
            },
            (error) => {
                console.error('Error fetching location', error);
            },
            { enableHighAccuracy: true }
        );
    }, []);

    return (
        <Box p={4}>
            <Text width="max-content"  fontSize="30px" fontWeight={"bold"} margin="auto">Nearby Users</Text>
            <VStack marginTop="25px" spacing={4}>
                {users.map((user) => (
                    <Box key={user._id} p={4} borderWidth="1px" borderRadius="md">
                        <Text>Name: {user.name}</Text>
                        <Text>Email: {user.email}</Text>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default NearbyUsers;
