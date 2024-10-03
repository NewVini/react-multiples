import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../api/api';
import {
  PageContainer,
  BackButton,
  MovieTitle,
  MoviePoster,
  MovieDetailsContainer,
  MovieOverview,
  MovieInfo,
  MovieGenres,
} from './MoviePage.styles';

interface MovieDetails {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres: { id: number; name: string }[];
  runtime: number;
}

const MoviePage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(Number(movieId));
        setMovieDetails(response);
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!movieDetails) {
    return <p>Filme não encontrado.</p>;
  }

  return (
    <PageContainer>
      <BackButton onClick={() => navigate(-1)}>&larr; Voltar</BackButton>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <MovieDetailsContainer>
        <MovieTitle>{movieDetails.title}</MovieTitle>
        <MovieOverview>{movieDetails.overview}</MovieOverview>
        <MovieInfo>
          <strong>Data de lançamento:</strong> {movieDetails.release_date}
        </MovieInfo>
        <MovieInfo>
          <strong>Avaliação:</strong> {movieDetails.vote_average}/10
        </MovieInfo>
        <MovieInfo>
          <strong>Duração:</strong> {movieDetails.runtime} minutos
        </MovieInfo>
        <MovieGenres>
          <strong>Gêneros:</strong> {movieDetails.genres.map((genre) => genre.name).join(', ')}
        </MovieGenres>
      </MovieDetailsContainer>
    </PageContainer>
  );
};

export default MoviePage;
