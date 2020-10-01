# COVID-19_TRACKER-APP
This is a Covid-19 Tracking app that displays dynamic information on the daily cases, recoveries, and deaths of all countries in the world.

# Motivation
I built this project because I wanted to build something with relevance and use to people in the world right now. 

---

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Support](#support)
- [License](#license)

---

# Build status

# Code Style

# Screenshots

# Tech/framework used

#### Built with
- React
- Chart.js
- Material-ui

# Features
This project has a minimal design with data that is displayed in numbers, graphs, and visually on the map. The map has popups to showcase country info once you click on a country. It also has a dark mode toggle for anyone who prefers a darker background. 

# Code Example
```
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data)
    })
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
      });
    };

    getCountriesData();
  }, []);
  ```

# Installation

> Clone to your local machine
`https://github.com/ardissam0/COVID-19_TRACKER-APP.git`

> Setup
```
$ npm i
$ npm start
```

# API Reference
https://corona.lmao.ninja/docs/

# Support
Reach out to me on social media if you have any questions!

[<img align="left" alt="Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]

<br />

---

# License


[website]: https://samardis.com/
[twitter]: https://twitter.com/samuel_ardis
[instagram]: https://www.instagram.com/samuel.d.ardis/
[linkedin]: https://www.linkedin.com/in/samuel-ardis/
