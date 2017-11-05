export const ChowNowToggle = {
  methods: {
    toggleChowNow: function () {
      let iframe = document.getElementById('chownow-wrap')
      let darken = document.getElementById('darken')
      if (iframe.classList.contains('open')) {
        iframe.classList.remove('open')
        darken.classList.remove('dark')
      } else {
        iframe.classList.add('open')
        darken.classList.add('dark')
      }
    }
  }
}
