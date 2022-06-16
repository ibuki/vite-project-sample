import Home from '../pages/HomePage.vue'
import UsersPage from '../pages/UsersPage.vue'
import UserNewPage from '../pages/UserNewPage.vue'
import UserEditPage from '../pages/UserEditPage.vue'

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/users', name: 'listUsers', component: UsersPage },
  { path: '/users/new', name: 'newUser', component: UserNewPage },
  { path: '/users/:id/edit', name: 'editUser', component: UserEditPage },
]
