<template>

<div>
  <p class="text-2xl text-red-600">Test : <a class="text-blue-500">{{ regis[0].first_name }}</a> </p>
  <p class="text-2xl text-red-600">Test : <a class="text-blue-500">{{ regis[0].middle_name }}</a> </p>

</div>

</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get('http://localhost:3100/regis')
    return {
      regis: data
    }
  },

}
</script>
