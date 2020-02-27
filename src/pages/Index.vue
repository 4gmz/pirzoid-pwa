<template>
  <q-page class="flex flex-center">
    <q-btn label="Abrir un modal" color="primary" @click="openModal" />
    <singleTable />
    <modal ref="mi_modal" />
  </q-page>
</template>

<script>
import singleTable from 'components/singleTable'
import modal from 'components/modal'
export default {
  name: 'PageIndex',
  components:{
    singleTable,
    modal
  },
  methods:{
    openModal(){
      this.$refs.mi_modal.toggle()
    }
  }
}
</script>
