import logo from './logo.svg';
import './App.css';
import './style.css';
import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {CovidTable} from './Table';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function App() {
  const [covidData, setCovidData] = useState(null);
  const [pageLoad, setPageLoad] = useState(false);


  useEffect(() => {
    fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
      .then(results => results.json())
      .then(data => {
        if (data.success) {
          setCovidData(data.data);
          setPageLoad(true);

          console.log(data.data, "data");
        }

      });
  }, []); // <-- Have to pass in [] here!



  return (
    <div className="App">
      <div className="page switcher">
        <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
        <label for="themeSwitch" className="theme-switch__label">
          <span></span>
        </label>
        <main>
        <div className="back-img-block">
          <div className="back-img">
            <div className="container-fluid h-100">
              <div className="row align-items-center h-100">
                <div className="top-heading text-left p-5 ml-5">
                  <Typography variant="h2" gutterBottom>
                    COVID-19
                    </Typography>
                  <Typography variant="h2" gutterBottom>
                    HEALTH UPDATES
                    </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container component="div" maxWidth="lg" className="content-block py-2">
          
          <div className="row">
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className="p-5 ">
                  <Typography component="div" >
                    <h4 className="center-heading">India COVID-19 coronavirus by city and state</h4>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
              <div className="container-fluid">
              <div className="row">
                <Grid item xs={12} md={6} lg={3}>
                  <Paper>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                        Confirmed cases
                        </Typography>
                          {pageLoad ? (
                          <Typography variant="h3" component="h2" className="text-primary">
                              {covidData.total.confirmed}
                          </Typography>
                          )
                          : (
      
                            <label>Loading...</label>
                          )}
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Paper>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                          Deaths
                        </Typography>
                        {pageLoad ? (
                          <Typography variant="h3" component="h2" className="text-danger">
                              {covidData.total.deaths}
                          </Typography>
                          )
                          : (
      
                            <label>Loading...</label>
                          )}
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Paper>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                        Recovered Cases
                        </Typography>
                        {pageLoad ? (
                          <Typography variant="h3" component="h2" className="text-success">
                              {covidData.total.recovered}
                          </Typography>
                          )
                          : (
      
                            <label>Loading...</label>
                          )}
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Paper>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                        Active cases
                        </Typography>
                        {pageLoad ? (
                          <Typography variant="h3" component="h2" className="text-warning">
                              {covidData.total.active}
                          </Typography>
                          )
                          : (
      
                            <label>Loading...</label>
                          )}
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper>
                {pageLoad ? (
                  <CovidTable 
                  renderData= {covidData.statewise}/>
                  )
                : (

                  <label>Loading...</label>
                )}
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
      </div>
      
    </div>
  );
}

export default App;
