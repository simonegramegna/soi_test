import React from 'react'
import * as Icon from 'react-feather'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getRouteLabel } from '../../config/routes'


export const Topbar = () => {

    const location = useLocation()
    const { test_id } = useParams()

    return (
        <div className="top-bar">
            <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
                <Link to="/"><Icon.Home className="breadcrumb__icon" /></Link>
                <Icon.ChevronRight className="breadcrumb__icon" />
                <NavLink to={'/'+location.pathname.split('/')[1]} className="breadcrumb--active">{getRouteLabel('/'+location.pathname.split('/')[1])}</NavLink>
                {
                    test_id ? <>
                        <Icon.ChevronRight className="breadcrumb__icon" />
                        <Link to="#" className="breadcrumb--active">{test_id.replace('-',' ').charAt(0).toUpperCase() + test_id.replace('-',' ').slice(1)}</Link>
                    </> : null
                }
            </div>
        </div>
    )
}