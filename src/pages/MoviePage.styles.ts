import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
  min-height: 100vh;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: #aaa;
  }
`;

export const MoviePoster = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.8);
`;

export const MovieDetailsContainer = styled.div`
  max-width: 800px;
  text-align: center;
`;

export const MovieTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const MovieOverview = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 20px;
`;

export const MovieInfo = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const MovieGenres = styled.div`
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: bold;
`;
