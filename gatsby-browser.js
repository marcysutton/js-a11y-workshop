exports.onRouteUpdate = ({ location, prevLocation }) => {
    console.log(location, prevLocation)
   if (prevLocation) {
       const skipLink = document.querySelector('.routeSkipLink')
       if (skipLink) {
           skipLink.focus()
       }
   }
}