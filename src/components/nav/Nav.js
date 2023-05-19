import React from 'react'
import { NavLink } from "react-router-dom"
import * as Icon from 'react-feather'
import { useLocation } from 'react-router-dom'
import { routes as r } from "../../config/routes"
import './css/nav.css'
import { useDispatch } from 'react-redux'
import { setMobileMenu } from '../../features/controlsSlice'

export const Nav = ({classes, mobileCss}) => {

    const location = useLocation()
    const dispatch = useDispatch()

    const toggleMenu = (e) => {
        const el = e.target.closest('a')
        if (el.className.includes(classes.supOpen)) {
            el.classList.remove(classes.supOpen)
        } else {
            el.classList.add(classes.supOpen)
        }
    }

    return (
        <ul className={mobileCss ? 'border-t border-theme-29 py-5 ' + mobileCss : ''}>
            <li>
                <NavLink to={r.home.uri} className={location.pathname === r.home.uri ? classes.a + ' ' + classes.active : classes.a} onClick={() => dispatch(setMobileMenu({mobileCss:'hidden',openMenu:''}))}>
                    <div className={classes.icon}> <Icon.Home /> </div>
                    <div className={classes.title}>{r.home.label}</div>
                </NavLink>
            </li>
            <li>
                <NavLink to={r.test.uri} className={r.test.children.map(u => u.uri).includes(location.pathname) ? classes.a + ' ' + classes.active : classes.a} onClick={(e) => toggleMenu(e)}>
                    <div className={classes.icon}> <Icon.GitPullRequest /> </div>
                    <div className={classes.title}>
                        { r.test.label }
                        <div className={classes.subIcon}> <Icon.ChevronDown /> </div>
                    </div>
                </NavLink>
                <ul>
                    <li>
                        <NavLink to={r.test.children[0].uri} className={({ isActive }) => isActive ? classes.a + ' ' + classes.active : classes.a} onClick={() => dispatch(setMobileMenu({mobileCss:'hidden',openMenu:''}))}>
                            <div className={classes.icon}> <Icon.ChevronRight /> </div>
                            <div className={classes.title}> {r.test.children[0].label} </div>
                        </NavLink>
                    </li>
                </ul>
            </li>
        </ul>
    )
}