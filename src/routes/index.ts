import { createRouter, createWebHistory } from "vue-router"
import Login from "../pages/Login.vue"
import Home from "../pages/Home.vue"
import Register from "../pages/Register.vue"

const routes = [{
  path: "/",
  name: "login",
  component: Login,
},
{
  path: "/home",
  name: "Home",
  component: Home,
},
{
  path: "/register",
  name: "Register",
  component: Register,
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router