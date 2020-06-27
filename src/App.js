import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/image.png';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })

  }


  render() {
    const { data, country } = this.state;

    return (
      <>

        <div className={styles.container}>
          
          <img className={styles.image} src={image} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
          <footer className={styles.footer}>COVID-19 Tracker utilizando React, Charts.JS e Material UI.</footer>

        </div>
      </>
    );
  }

}

export default App;
