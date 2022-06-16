<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import UserForm from '../components/UserForm.vue'
import { User, validateUser } from '../models/User'

const router = useRouter()
const edittingUser: User = {
  name: 'EdittingUser',
  age: 10,
  departmentId: 10,
}
const user = ref(edittingUser)

const saveDisabled = computed(() => !validateUser(user.value))

function onSaveClicked() {
  router.push({ name: 'listUsers' })
}

function onCancelClicked() {
  router.push({ name: 'listUsers' })
}
</script>

<template>
  <div class="container">
    <div class="h1">ユーザー編集</div>
    <UserForm :user="user" @update="user = $event" />
    <button
      class="btn btn-primary"
      :disabled="saveDisabled"
      @click="onSaveClicked()"
    >
      保存
    </button>
    <button class="btn btn-secondary ms-3" @click="onCancelClicked()">
      キャンセル
    </button>
  </div>
</template>
