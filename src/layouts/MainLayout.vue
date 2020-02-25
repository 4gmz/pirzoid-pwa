<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="dawerLateral = !dawerLateral" />

        <q-toolbar-title>
          Pirzoid PWA 
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="dawerLateral" show-if-above bordered content-class="bg-grey-1" >

      <q-list>
        <q-item-label header class="text-grey-8" >
          Menu principal
        </q-item-label>
        <q-item clickable v-ripple v-for="(data , index) in listaMenu" :key="index">
          <q-item-section avatar>
            <q-icon color="primary" :name="`${data.icon}`" />
          </q-item-section>

          <q-item-section>{{data.title}}</q-item-section>
        </q-item>
      </q-list>


    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  data () {
    return {
      dawerLateral: false,
      listaMenu: [
        {
          title: 'Menu 1',
          icon: 'school',
        },
        {
          title: 'Menu 2',
          icon: 'code',
        },
        {
          title: 'Menu 3',
          icon: 'chat',
        },
        {
          title: 'Menu 4',
          icon: 'record_voice_over',
        },
        {
          title: 'Menu 5',
          icon: 'rss_feed',
        },
        {
          title: 'Menu 6',
          icon: 'public',
        }
      ]
    }
  }
}
</script>
