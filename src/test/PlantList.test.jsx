import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { NurseryContext } from '../context/NurseryContext';
import PlantList from '../components/PlantList';
import '@testing-library/jest-dom';


const mockPlants = [
    {
        id: 1,
        name: 'Rose',
        care: 'Sunlight, pruning',
        nextWatering: Date.now() - 1000,
        image: 'https://cdn.example.com/images/rose.jpg',
        description: 'Beautiful red rose.',
        category: 'Flower',
    },
];

const mockMarkWatered = jest.fn();

describe('PlantList Component', () => {
    test('renders plant data correctly', () => {
        render(
            <NurseryContext.Provider value={{ plants: mockPlants, markWatered: mockMarkWatered }}>
                <PlantList />
            </NurseryContext.Provider>
        );
        expect(screen.getByText('All plants at a glance')).toBeInTheDocument();
        expect(screen.getByText('Rose')).toBeInTheDocument();
        expect(screen.getByText(/Care:/i)).toBeInTheDocument();
        expect(screen.getByText(/Sunlight, pruning/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /mark as watered/i })).toBeInTheDocument();
    });

    test('calls markWatered when button is clicked', () => {
        render(
            <NurseryContext.Provider value={{ plants: mockPlants, markWatered: mockMarkWatered }}>
                <PlantList />
            </NurseryContext.Provider>
        );

        const button = screen.getByRole('button', { name: /mark as watered/i });
        fireEvent.click(button);

        expect(mockMarkWatered).toHaveBeenCalledWith(1);
        waitFor(() => {
            expect(button).not.toBeInTheDocument();
            const badge = screen.getByText(/Already Watered/i);
            expect(badge).toBeInTheDocument();
        });
    });
});
