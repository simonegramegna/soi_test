const routes = {
    home: {
        label: 'Home',
        uri: '/',
        slug: '',
        children: []
    },
    test: {
        label: 'SOI Test',
        uri: '/soi-test',
        slug: 'soi-test',
        children: [
        {
            label: 'Petri Net Editor',
            uri: '/soi-test/editor',
            slug: 'editor',
        },
        {
            label: 'Token Game',
            uri: '/soi-test/token-game',
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