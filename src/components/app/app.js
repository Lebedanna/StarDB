import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';
import DummySwapiService from "../../services/dummy-swapi-service";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {StarshipDetails} from "../sw-components";


export default class App extends Component {

    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService
                ? DummySwapiService
                : SwapiService
        return {
                swapiService: new Service()
        }
        })
    }



    render() {

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />
                            <Routes>
                                <Route path="/"
                                    element={<h2>WELCOME TO.... BEBRA! GOIDA</h2>}
                                    exact />
                                <Route path="/people" element={<PeoplePage/>} />
                                <Route path="/planets" element={<PlanetsPage/>} />
                                <Route path="/starships" exact element={<StarshipsPage/>} />
                                <Route path="/starships/:id"
                                        element={<StarshipDetails itemId={1}/>
                                        }/>
                            </Routes>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}