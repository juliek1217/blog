import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import BuildIcon from '@material-ui/icons/Build'
import React from 'react'
import featured from '../assets/mocks/featured'
import trending from '../assets/mocks/trending'
import { MasonryPost, PostGrid, PostMasonry } from '../components/common'

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

const lastFeatured = featured.pop()

const useStyles = makeStyles((Theme) => ({
    marginTop: {
        marginTop: 100,
    },
}))

export default function Home() {
    const classes = useStyles()
    return (
        <main className="home">
            <div className="container">
                <h1>
                    <BuildIcon />
                    &nbsp;&nbsp;Under construction
                </h1>
                <h4>
                    I am currently stuck on my coursework but it will be ready
                    around Nov. 10th. Stay tuned!
                </h4>
                <br />
                <br />
                <br />
                <Divider />
                <div className={classes.marginTop}>
                    <div className="featured-posts-container">
                        <PostMasonry
                            posts={featured}
                            columns={2}
                            tagsOnTop={true}
                        />
                        <MasonryPost post={lastFeatured} tagsOnTop={true} />
                    </div>
                </div>

                <div className={classes.marginTop}>
                    <Divider />
                    <h1>Trending</h1>
                    <div className="featured-posts-container">
                        <PostMasonry posts={trending} columns={3} />
                    </div>
                </div>

                <div className={classes.marginTop}>
                    <Divider />
                    <h1>Recent Posts</h1>
                    <div>
                        <PostGrid posts={recentPosts} />
                    </div>
                </div>
            </div>
        </main>
    )
}
