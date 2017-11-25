export const ChowNowToggle = {
  methods: {
    toggleChowNow: function () {
      let iframe = document.getElementById('chownow-wrap')
      let darken = document.getElementById('darken')
      if (iframe.classList.contains('open')) {
        iframe.classList.remove('open')
        darken.classList.remove('dark')
        if (window.openedOrder) {
          window.history.back()
          window.openedOrder = false
        } else {
          history.pushState('', document.title, window.location.pathname)
        }
      } else {
        iframe.classList.add('open')
        darken.classList.add('dark')
        history.pushState('', 'order', '#order')
        window.openedOrder = true
      }
    }
  }
}
