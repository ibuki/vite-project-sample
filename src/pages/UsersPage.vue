<script setup lang="ts">
import { ref } from 'vue'

const users = ref(
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User${i + 1}`,
    age: i + 10,
    departmentId: i + 1,
  }))
)

function onDeleteClicked(userId: number) {
  if (!confirm('削除して良いですか？')) return
  console.log(userId)
}
</script>
<template>
  <div class="container">
    <div class="h1">ユーザー一覧</div>
    <RouterLink class="btn btn-primary" :to="{ name: 'newUser' }"
      >新規追加</RouterLink
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ユーザーID</th>
          <th scope="col">名前</th>
          <th scope="col">年齢</th>
          <th scope="col">所属ID</th>
          <th scope="col">処理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.departmentId }}</td>
          <td>
            <RouterLink
              class="btn btn-success"
              :to="{ name: 'editUser', params: { id: user.id } }"
              >編集</RouterLink
            >
            <a class="btn btn-danger ms-3" @click="onDeleteClicked(user.id)"
              >削除</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
