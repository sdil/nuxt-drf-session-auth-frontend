// https://stackoverflow.com/questions/66102428/nuxt-auth-with-cookies-with-drf

export default function ({ $axios }) {
    $axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
    $axios.defaults.withCredentials = true
    $axios.defaults.xsrfCookieName = 'csrftoken'
}