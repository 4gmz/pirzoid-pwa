<template>
  <div class="q-pa-md q-gutter-md">
    <q-dialog v-model="toolbar">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          <q-toolbar-title>
              <span class="text-weight-bold">titulo modal</span>
          </q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <q-card-section>
          <component :is="mi_componente" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import formulario from './formulario'
export default {
  components:{
    formulario
  },
  data () {
    return {
      toolbar: false,
      mi_componente: 'formulario'
    }
  },
  methods:{
      toggle(){
          this.toolbar = true
      }
  }
}
</script>
