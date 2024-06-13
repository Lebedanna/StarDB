import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, withChildFunction } from '../hoc-helpers';



const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const PersonList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)
    ),
    mapPersonMethodsToProps
)
const PlanetList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)
    ),
    mapPlanetMethodsToProps
)
const StarshipList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderModelAndName)
    ),
    mapStarshipMethodsToProps
)




export {
    PersonList,
    PlanetList,
    StarshipList
};