Vue.component('app-nav', {
    template: '#nav',
    data: function() {
        return {
            pages: [
                { url: '/', name: 'Home' },
                { url: '/about', name: 'About' }
            ]
        }
    }
})
