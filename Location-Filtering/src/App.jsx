import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Signup from './components/Signup';
import NearbyUsers from './components/NearbyUsers';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Signup/>} />
                    <Route path="/nearby-users" element={<NearbyUsers/>} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};

export default App;
