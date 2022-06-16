<script setup lang="ts">
import { PropType } from 'vue'
import { User } from '../models/User'

const props = defineProps({
  user: { type: Object as PropType<User>, required: true },
})

const emit = defineEmits<{
  (e: 'update', user: User): void
}>()

function userChanged(propName: keyof User, value: string | number | null) {
  emit('update', { ...props.user, [propName]: value })
}
</script>

<template>
  <div class="mb-3">
    <label class="form-label">
      名前
      <input
        :value="props.user.name"
        type="email"
        class="form-control"
        placeholder="user name"
        @change="userChanged('name', ($event.target as HTMLInputElement).value)"
      />
    </label>
  </div>
  <div class="mb-3">
    <label class="form-label">
      年齢
      <input
        :value="props.user.age"
        type="number"
        class="form-control"
        @change="userChanged('age', +($event.target as HTMLInputElement).value)"
      />
    </label>
  </div>
  <div class="mb-3">
    <label class="form-label">
      所属ID
      <input
        :value="props.user.departmentId"
        type="number"
        class="form-control"
        @change="
          userChanged(
            'departmentId',
            +($event.target as HTMLInputElement).value
          )
        "
      />
    </label>
  </div>
</template>
