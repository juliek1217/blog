import { Box, Container, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from "react";

const useStyles = makeStyles((theme) => {
    return ({
        icons: {
            textAlign: "right",
            display: "inline",
            marginLeft: 10,
            fontSize: 24,
            textDecoration: "none",
            textDecorationLine: "none",
            cursor: "pointer",
            color: "#5f6368"
        },
        "@global": {
            ul: {
                margin: 0,
                padding: 0,
                listStyle: "none"
            }
        },

        footer: {
            marginTop: "auto",
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            [theme.breakpoints.up("md")]: {
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6)
            }
        },
        subfooter: {
            borderTop: `1px solid ${theme.palette.divider}`
        }
    });
});

const Copyright = () =>{
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/juliek1217/blog.git" target='_blank' rel="noopener noreferrer">
                Juhee Kim
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

const SocialLinks = () => {
    const classes = useStyles();
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            <Link className={classes.icons} href="https://github.com/juliek1217" target='_blank' rel="noopener noreferrer"><GitHubIcon style={{ fontSize: 22 }} /></Link>
            <span><Link className={classes.icons} href="mailto: kimj4@myumanitoba.ca"><EmailIcon style={{ fontSize: 25 }} /></Link></span>
        </Typography>
    );
};

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg" component="footer" className={classes.subfooter}>
                <Box mt={5}>
                    <SocialLinks />
                </Box>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;
