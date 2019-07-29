exports.onRouteUpdate = ({ location, prevLocation }) => {
    if (prevLocation !== null) {
        const skipLink = document.querySelector('.routeSkipLink')
        if (skipLink) {
            skipLink.focus()
        }
    }
}