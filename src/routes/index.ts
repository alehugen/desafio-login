import { createRouter, createWebHistory } from "vue-router"
import Login from "../pages/Login.vue"
import Home from "../pages/Home.vue"
import Register from "../pages/Register.vue"
import UserForm from '../pages/UserForm.vue';

const routes = [{
  path: "/",
  name: "Login",
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

router.beforeEach(async (to) => {
  const token = sessionStorage.getItem("token");

  if (!token && to.name !== "Login" && to.name !== "User" && to.name !== 'Register') {
    return { name: "Login" };
  }
});

export default router