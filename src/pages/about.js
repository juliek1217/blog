import { Button, Container, Grid, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React from 'react'

const useStyles = makeStyles((Theme) => ({
    paper: {
        marginTop: Theme.spacing(6),
    },
    heroContent: {
        padding: Theme.spacing(12, 0, 6),

        '& h2': {
            color: '#363b3f',
            fontWeight: 700,
        },
        '& h5': {
            fontFamily: 'Lato',
        },
        '& h4': {
            color: '#202124',
            fontFamily: 'Roboto',
        },
    },
    heroButtons: {
        marginTop: Theme.spacing(4),
    },
    sectionTitle: {
        paddingTop: 100,
        textAlign: 'center',
        marginBottom: 70,
        fontFamily: 'Lato',
        '& h3': {
            color: '#202124',
            marginBottom: 25,
            fontWeight: 1000,
            textTransform: 'uppercase',
            position: 'relative',
            fontFamily: 'Lato',
            letterSpacing: 1,
        },
        '& h5': {
            color: '#363b3f',
            position: 'relative',
            fontFamily: 'Lato',
        },
    },
    outline: {
        textAlign: 'center',
        background: 'linear-gradient(to right, #4285f4,#4285f4)',
        borderRadius: 2,
        height: 4,
        width: 40,
        marginBottom: 25,
        marginTop: 25,
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        textAlign: 'right',
        display: 'inline',
        marginLeft: 10,
        fontSize: 24,
        textDecoration: 'none',
        textDecorationLine: 'none',
        cursor: 'pointer',
        color: '#5f6368',
        marginBottom: 100,
    },
    large: {
        width: Theme.spacing(25),
        height: Theme.spacing(25),
        marginBottom: 20,
    },
}))

const About = () => {
    const classes = useStyles()

    return (
        <main title="About">
            <Container component="main">
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <div className={classes.centered}>
                            <Avatar
                                alt="Remy Sharp"
                                src="img/juhee.jpg"
                                className={classes.large}
                            />
                        </div>
                        <Typography
                            component="h2"
                            variant="h4"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Juhee Kim
                        </Typography>
                        <Typography variant="h5">
                            <div className={classes.centered}>
                                <span>
                                    <a
                                        className={classes.icons}
                                        href="mailto: kimj4@myumanitoba.ca"
                                    >
                                        <EmailIcon style={{ fontSize: 25 }} />
                                    </a>
                                </span>
                                <span>
                                    <a
                                        className={classes.icons}
                                        href="https://www.linkedin.com/in/kim-juhee-b5b309166"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkedInIcon
                                            style={{ fontSize: 22 }}
                                        />
                                    </a>
                                </span>
                                <span>
                                    <a
                                        className={classes.icons}
                                        href="https://github.com/juliek1217"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GitHubIcon style={{ fontSize: 22 }} />
                                    </a>
                                </span>
                                <br />
                            </div>
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Typography
                            component="h5"
                            variant="h6"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            I am a senior student of Bachelor of Science in
                            Computer Science at the University of Manitoba,
                            focusing on full stack development for complex
                            scalable and resilient web/mobile applications with
                            newest UI/UX and modern web technologies.
                        </Typography>
                        <br />
                        <Divider />
                        <br />

                        <div className={classes.heroButtons}>
                            <Grid container spacing={1} justify="center">
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href="#experience"
                                    >
                                        Experience
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href="#education"
                                    >
                                        Education
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                        <div className={classes.paper}>
                            <div
                                className={classes.sectionTitle}
                                id="experience"
                            >
                                <Typography variant="h4">
                                    EXPERIENCE/ACTIVITY
                                </Typography>
                                <div className={classes.centered}>
                                    <div className={classes.outline}></div>
                                </div>
                                <Typography variant="h6">
                                    WICS Website Coordinator
                                </Typography>
                                <Typography
                                    component="h5"
                                    align="center"
                                    fontSize="6"
                                    paragraph
                                >
                                    University of Manitoba Women in Computer
                                    Science
                                    <br />
                                    JUNE 2020 - MAY 2021
                                    <br />
                                    <a href="https://cs.umanitoba.ca/~wics/">
                                        {' '}
                                        cs.umanitoba.ca/~wics/{' '}
                                    </a>
                                </Typography>
                                <br />
                                <Typography variant="h6">
                                    2020 Winnipeg Open Data Hackathon - Save
                                    Neighbourhood!
                                </Typography>
                                <Typography
                                    component="h5"
                                    align="center"
                                    fontSize="6"
                                    paragraph
                                >
                                    City of Winnipeg, MARCH 2020
                                    <br />
                                    <a href="https://engage.winnipeg.ca/opendata/brainstormers/hackathon-ideas/ideas/19023">
                                        {' '}
                                        hackathon-ideas/ideas/19023{' '}
                                    </a>
                                </Typography>
                                <br />
                                <Typography variant="h6">
                                    CSSA Programming Contest
                                </Typography>
                                <Typography
                                    component="h5"
                                    align="center"
                                    fontSize="6"
                                    paragraph
                                >
                                    Computer Science Student Association, U of
                                    Manitoba, 2019
                                </Typography>
                            </div>

                            <div
                                className={classes.sectionTitle}
                                id="education"
                            >
                                <Typography variant="h4">EDUCATION</Typography>
                                <div className={classes.centered}>
                                    <div className={classes.outline}></div>
                                </div>
                                <Typography variant="h6">
                                    Bachelor of Science in Computer Science
                                </Typography>
                                <Typography
                                    component="h2"
                                    align="center"
                                    fontSize="6"
                                    paragraph
                                >
                                    University of Manitoba, Winnipeg MB Canada
                                    <br /> May 2018 - Exp. graduation: May 2021
                                </Typography>
                                <Typography
                                    component="h5"
                                    align="center"
                                    color="textSecondary"
                                    fontSize="8"
                                    paragraph
                                >
                                    Related Courses: Data Structures and
                                    Algorithms, Computer Organization,
                                    Introduction to Artificial Intelligence,
                                    Software Engineering 1, Object-Orientation,
                                    Databases, Human-Computer Interaction,
                                    Analysis algorithms, Intro Computer Systems,
                                    Programming Practices, Discrete Mathematics
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </div>
            </Container>
        </main>
    )
}

export default About
