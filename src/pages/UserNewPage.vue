<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import UserForm from '../components/UserForm.vue'
import { validateUser, generateEmptyUser } from '../models/User'

const router = useRouter()
const user = ref(generateEmptyUser())

const saveDisabled = computed(() => !validateUser(user.value))

function onSaveClicked() {
  console.log(user.value)
  // router.push({ name: 'listUsers' })
}

function onCancelClicked() {
  router.push({ name: 'listUsers' })
}
</script>

<template>
  <div class="container">
    <div class="h1">新規ユーザー追加</div>
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
