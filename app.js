Vue.component('app-nav', {
    template: '<ol><li>Home</li></ol>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'some message'
    }
})
