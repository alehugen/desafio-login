import { createRouter, createWebHistory } from "vue-router"
import Login from "../pages/Login.vue"
import Home from "../pages/Home.vue"
import Register from "../pages/Register.vue"
import UserForm from '../pages/UserForm.vue';

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
},
{
  path: "/register/user",
  name: "User",
  component: UserForm,
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router