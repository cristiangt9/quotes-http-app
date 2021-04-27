import classes from './Layout.module.css'
import React from 'react'

const Layout = (props) => {
    return (
        <div className={classes.main}>
            {props.children}
        </div>
    )
}

export default Layout
