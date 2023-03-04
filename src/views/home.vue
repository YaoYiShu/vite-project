<template>
  <div><div>This is Home Page</div></div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, watch, onMounted, getCurrentInstance } from 'vue'

import { useRouter } from 'vue-router'
import axios from '@/utils/axios'

const router = useRouter()

const props = defineProps({
  propData: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped></style>
