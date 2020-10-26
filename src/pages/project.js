import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import project from '../assets/mocks/project'

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    marginTop: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        height: '500px',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}))

//const cards = [1, 2, 3]

export default function Project() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.marginTop}>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={4}>
                        {project.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea
                                        href={card.link}
                                        target="_blank"
                                    >
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={require(`../assets/images/projects/${card.image}`)}
                                            title={card.title}
                                        />
                                        <CardContent
                                            className={classes.cardContent}
                                        >
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                            >
                                                {card.title}
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="h2"
                                            >
                                                {card.categories[0]}
                                            </Typography>
                                            <Typography>
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        {card.tech.map((technology) => (
                                            <Button
                                                size="small"
                                                color="primary"
                                            >
                                                {technology}
                                            </Button>
                                        ))}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    )
}
