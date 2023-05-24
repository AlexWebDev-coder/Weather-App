import { ChangeEvent, FC, useState } from "react";

import { useGetCurrentWeatherQuery } from "../../hooks/query/getWeather";
import FormTextField from "../../ui/form/textfield";
import useDebounce from "../../hooks/debounce";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import WeatherCard from "../../ui/card/weather";

const Weather: FC = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const debounceValue = useDebounce(value, 500);

  const { data, isLoading, error } = useGetCurrentWeatherQuery(debounceValue);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <FormTextField
        value={value}
        onChange={handleChange}
        label="Enter Your Location"
        iconEnd={<SearchIcon />}
        iconStart={<LocationOnIcon />}
        variant="outlined"
      />

      {data?.current && (
        <WeatherCard
          icons={data.current.weather_icons}
          query={data.request.query}
          humidity={data.current.humidity}
          localtime={data.location.localtime}
          pressure={data.current.pressure}
          temperature={data.current.temperature}
          visibility={data.current.visibility}
          wind_speed={data.current.weather_code}
        />
      )}
    </div>
  );
};

export default Weather;
