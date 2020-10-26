import { makeStyles } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollThrottled from './scroll-throttled'

const navLinks = [
    {
        title: 'HOME',
        path: '/',
    },
    {
        title: 'ABOUT',
        path: '/about',
    },
    {
        title: 'PROJECT',
        path: '/project',
    },
    {
        title: 'BLOG',
        path: '/blog',
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        '& > svg': {
            margin: theme.spacing(1),
            color: '#444',
        },
    },
}))

export default function Navigation({ user }) {
    const [menuActive, setMenuActive] = useState(false)
    const classes = useStyles()

    const [shouldHideHeader, setShouldHideHeader] = useState(false)
    const [shouldShowShadow, setShouldShowShadow] = useState(false)

    const MINIMUM_SCROLL = 80
    const TIMEOUT_DELAY = 400

    ScrollThrottled((callbackData) => {
        const { previousScrollTop, currentScrollTop } = callbackData
        const isScrolledDown = previousScrollTop < currentScrollTop
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

        setShouldShowShadow(currentScrollTop > 2)

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled)
        }, TIMEOUT_DELAY)
    })

    const shadowStyle = shouldShowShadow ? 'shadow' : ''
    const hiddenStyle = shouldHideHeader ? 'hidden' : ''

    return (
        <header className={`header ${shadowStyle} ${hiddenStyle}`}>
            <nav className="site-navigation" role="navigation">
                <span className="menu-title logo">Juhee Kim</span>
                <div
                    className={`menu-content-container ${
                        menuActive && `active`
                    }`}
                >
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>

                    <span>
                        <a
                            className={classes.root}
                            href="https://github.com/juliek1217"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon style={{ fontSize: 22 }} />
                        </a>
                    </span>
                    <span>
                        <a
                            className={classes.root}
                            href="mailto: kimj4@myumanitoba.ca"
                        >
                            <EmailIcon style={{ fontSize: 25 }} />
                        </a>
                    </span>
                </div>
                <i
                    className="ionicons icon ion-ios-menu"
                    onClick={() => setMenuActive(!menuActive)}
                />
            </nav>
        </header>
    )
}
