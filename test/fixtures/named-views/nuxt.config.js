export default {
  router: {
    extendRoutes(routes, resolve) {
      const indexRoute = routes.find(route => route.name === 'index')
      const indexChildRoute = indexRoute.children.find(route => route.name === 'index-child-id')

      Object.assign(indexChildRoute, {
        components: {
          default: indexChildRoute.component,
          left: resolve(__dirname, 'components/childLeft.vue')
        },
        chunkNames: {
          left: 'components/childLeft'
        }
      })

      routes
        .filter(route => ['main', 'another'].includes(route.name))
        .forEach((route) => {
          Object.assign(route, {
            components: {
              default: route.component,
              top: resolve(__dirname, 'components/mainTop.vue')
            },
            chunkNames: {
              top: 'components/mainTop'
            }
          })
        })

        const cartIndex = routes.findIndex(route => route.name === 'cart')
        console.log('before', routes[cartIndex])
        routes[cartIndex] = {
          ...routes[cartIndex],
          components: {
            default: routes[cartIndex].component,
            footer: resolve(__dirname, 'components/topFooter.vue'),
            left: resolve(__dirname, 'components/childLeft.vue')
          },
          chunkNames: {
            footer: 'components/topFooter',
            left: 'components/childLeft'
          }
        }
        console.log('after', routes[cartIndex])

    }
  }
}
