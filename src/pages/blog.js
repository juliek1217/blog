import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import featured from '../assets/mocks/featured'
import trending from '../assets/mocks/trending'
import { PostGrid } from '../components/common'

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3',
    },
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px',
    },
    1: {
        height: '300px',
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px',
    },
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Juhee Kim'
        post.description =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const useStyles = makeStyles((Theme) => ({
    marginTop: {
        marginTop: 100,
    },
}))

export default function Blog() {
    const classes = useStyles()
    return (
        <main className="blog">
            <div className="container">
                <div className={classes.marginTop}>
                    <div>
                        <PostGrid posts={recentPosts} />
                    </div>
                </div>
            </div>
        </main>
    )
}
