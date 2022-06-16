<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'
import { isPresent } from '../utils/StringUtils';

interface User {
  name: string | null
  age: number | null
  departmentId: number | null
}

const router = useRouter()
const user = ref({
  name: 'EdittingUser',
  age: 10,
  departmentId: 10,
})

function onSaveClicked() {
  router.push({ name: 'listUsers' })
}

function onCancelClicked() {
  router.push({ name: 'listUsers' })
}

function validateUser(user: User) {
  return isPresent(user.name) && user.age && user.age >= 0 && user.departmentId
}

const saveDisabled = computed(() => !validateUser(user.value) )

</script>

<template>
  <div class="container">
    <div class="h1">ユーザー編集</div>
    <div class="mb-3">
      <label class="form-label">
        名前
        <input
          v-model="user.name"
          type="email"
          class="form-control"
          placeholder="user name"
        />
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label">
        年齢
        <input
          v-model="user.age"
          type="number"
          class="form-control"
        />
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label">
        所属ID
        <input
          v-model="user.departmentId"
          type="number"
          class="form-control"
        />
      </label>
    </div>
    <button class="btn btn-primary" :disabled="saveDisabled" @click="onSaveClicked()">保存</button>
    <button class="btn btn-secondary ms-3" @click="onCancelClicked()">キャンセル</button>
  </div>
</template>
