import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import { GameDto } from '../types';

const useFetchGames = () => {
    const [games, setGames] = useState<GameDto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axiosInstance.get('/games');
                setGames(response.data);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchGames();
    }, []);
    return { games, loading, error}; 
}

export default useFetchGames;