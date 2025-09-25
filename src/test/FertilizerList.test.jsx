import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { NurseryContext } from '../context/NurseryContext';
import '@testing-library/jest-dom';
import FertilizerList from "../components/FertilizerList";

const mockFertilizers = [
    {
        id: 1,
        name: 'Organic Compost',
        care: 'Once a month',
        nextFertilizing: Date.now() - 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlv-GW-mRv26cuZTaDkImR9JO2uX6ibQEjRg9Sz_trgyfD8bM19RpGb8E&s',
        description: 'Rich in nutrients, improves soil structure and fertility.',
        category: 'Organic',

    },
];
const mockMarkFertilized = jest.fn();
describe('FertilizerList Component', () => {
    test('renders fertilizer data correctly', () => {
        render(
            <NurseryContext.Provider value={{ fertilizers: mockFertilizers, markFertilized: mockMarkFertilized }}>
                <FertilizerList />
            </NurseryContext.Provider>
        );

        expect(screen.getByText('List of Fertilizers')).toBeInTheDocument();
        expect(screen.getByText('Organic Compost')).toBeInTheDocument();
        expect(screen.getByText(/Care:/i)).toBeInTheDocument();
        expect(screen.getByText(/Once a month/i)).toBeInTheDocument();
        expect(screen.getByText(/Next Fertilizing/i)).toBeInTheDocument();
        const button = screen.getByRole('button', { name: /mark as fertilized/i })
        expect(button).toBeInTheDocument();
    });

    test('calls markFertilized when button is clicked', () => {
        render(
            <NurseryContext.Provider value={{ fertilizers: mockFertilizers, markFertilized: mockMarkFertilized }}>
                <FertilizerList />
            </NurseryContext.Provider>
        );
        const button = screen.getByRole('button', { name: /mark as fertilized/i });
        fireEvent.click(button);
        expect(mockMarkFertilized).toHaveBeenCalledWith(1);
        waitFor(() => {
            expect(button).not.toBeInTheDocument();
            const badge = screen.getByText(/Already Fertilized/i);
            expect(badge).toBeInTheDocument();
        });

    });
});
