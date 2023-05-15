const routes = {
    dashboard: {
        label: 'Dashboard',
        uri: '/dashboard',
        slug: 'dashboard',
        children: []
    },
    simulation: {
        label: 'Simulation',
        uri: '#',
        slug: '#',
        children: [
        {
            label: 'Petri Net Editor',
            uri: '/dashboard/editor',
            slug: 'editor',
        },
        {
            label: 'Token Game',
            uri: '/dashboard/token-game',
            slug: 'token-game'
        }
    ]}
}

const getRouteLabel = uri => {
    let routeMap = []
    Object.values(routes).forEach(r => {
        r.children.length ? r.children.forEach(c => routeMap.push({label:c.label,uri:c.uri})) : routeMap.push({label:r.label,uri:r.uri})
    })
    const routeMatch = routeMap.find(r => r.uri === uri)        
    return routeMatch !== undefined ? routeMatch.label : 0
}

export { routes, getRouteLabel }