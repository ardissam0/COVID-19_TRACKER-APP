import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import SearchStates from '../components/SearchStates';
import Table2 from '../components/Table2';

import '../CSS/App.css';

function US() {
    const [states, setStates] = useState([]);

  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/states/")
    .then(response => {
        console.log(response.data)
        setStates(response.data)
    })
    .catch(error => console.log(error));
  }, []);


  return (
          <div className='mainPage__style'>
              <div className="app__left-US">
                    <Card>
                      <CardContent>
                            <h3>Live Cases by State</h3>
                            <Table2 states={states} setStates={setStates}/>
                      </CardContent>
                    </Card>
              </div>
                    <Card className="search__states">
                      <CardContent>
                            <SearchStates states={states} setStates={setStates}/>
                      </CardContent>
                    </Card>
          </div>
  );
};

export default US;