import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const baseUrl = 'http://localhost:3000'
axios.defaults.baseURL = baseUrl

Vue.use(VueAxios, axios)