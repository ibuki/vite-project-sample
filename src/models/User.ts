import { isPresent } from '../utils/StringUtils'

export interface User {
  name: string | null
  age: number | null
  departmentId: number | null
}

export function validateUser(user: User) {
  return isPresent(user.name) && user.age && user.departmentId
}
export function generateEmptyUser(): User {
  return {
    name: '',
    age: null,
    departmentId: null,
  }
}
