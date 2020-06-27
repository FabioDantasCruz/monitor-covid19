import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Carregando';
    }
    console.log(lastUpdate);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.infectados)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value} duration={2} separator='.'/>
                        </Typography>
                        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero de casos ativos de Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.recuperados)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Curados</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={recovered.value} duration={2} separator='.'/>
                        </Typography>
                        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero de pessoas curadas do Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.mortos)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={deaths.value} duration={2} separator='.'/>
                        </Typography>
                        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero de mortes causadas pelo Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )

}



export default Cards;