import { FC } from "react";

import {
  BoxDescription,
  City,
  Description,
  WeatherCardWrapper,
} from "./styles";

interface IProps {
  temperature: number;
  humidity: number;
  wind_speed: number;
  pressure: number;
  visibility: number;
  localtime: string;
  query: string;
  icons: string[];
}

const WeatherCard: FC<IProps> = (props): JSX.Element => {
  const {
    humidity,
    temperature,
    pressure,
    visibility,
    localtime,
    wind_speed,
    query,
  } = props;

  return (
    <WeatherCardWrapper>
      <City>Погода в {query} </City>
      {/* <WeatherIcon src={icons[0]} alt="Weather icon" /> */}
      <BoxDescription>
        <Description>Температура: {temperature}°C</Description>
        <Description>Влажность: {humidity}%</Description>
        <Description>Скорость ветра: {wind_speed}км/ч</Description>
        <Description>Давление: {pressure} мбар</Description>
        <Description>Видимость: {visibility} км</Description>
        <Description>Дата: {localtime}</Description>
      </BoxDescription>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
