
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTg1NzU0MmVkYjY1ZWRmMTc0Y2MzNWU1NWI2NjVlNSIsIm5iZiI6MTcyNzg5OTU0Ny4yNjY4NjgsInN1YiI6IjY2ZmRhMDQxMTU5MmVmMWJhOTg0YjU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EGYTGPQW8U-toliqHCRhSZytCkINOkxK6pVDDHtvG-g`,
  },
});

export const getMovieDetails = async (movieId: number) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};
