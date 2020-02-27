<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Prizoid - PWA
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>


    <!-- dawer menu -->
    <q-drawer show-if-above v-model="left" side="left" :breakpoint="500" overlay bordered content-class="bg-grey-3" >
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

    <!-- dawer usuario -->
    <q-drawer show-if-above v-model="right" side="right" :breakpoint="500" overlay bordered content-class="bg-grey-3">
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
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
      left: true,
      right: false,
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
