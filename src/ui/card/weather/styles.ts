import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  padding: 20px;
  margin: 0 auto;
`;

export const BoxDescription = styled.div`
  margin-top: 20px;
`;

export const WeatherIcon = styled.img`
  display: block;
  height: 100px;
  margin: 0 auto;
`;

export const Temperature = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

export const City = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  font-family: sans-serif;
`;
