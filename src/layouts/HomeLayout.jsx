import React from 'react';
import { NotFound, Search } from '../components'
import logo from '../logo.svg'
import { Route, Switch, Link } from 'react-router-dom'
import { HomeScreen, DetailScreen } from '../pages';
import { Typography } from '@material-ui/core';

const HomeLayout = () =>
    <div className="App">
        <header className="App-header">
            <div></div>
            <Search />
            <Link to="/" className="App-logo-container">
                <img src={logo} className="App-logo" alt="logo" />
                <Typography
                    variant="h2"
                    component="h1"
                    className="App-logo-text"
                >React coin</Typography>
            </Link>
        </header>
        <main className="App-main">
            <Switch>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/currency/:id" component={DetailScreen} exact />
                <Route component={NotFound} exact />
            </Switch>
        </main>
    </div>

export default HomeLayout