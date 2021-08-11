<template>
  <v-app>
    <!-- Use props to pass the drawer in -->
    <NavigationComponent :open="drawer" @drawer-opened="handleDrawerChange($event)"/>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <h3>Calendario 2021</h3>
    </v-app-bar>

    <v-main v-on:click="handleDrawerClose">
      <v-container fluid>
        <CalendarComponent />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CalendarComponent from "./components/CalendarComponent.vue";
import NavigationComponent from "./components/NavigationComponent.vue";

export default {
  name: "App",

  components: {
    CalendarComponent,
    NavigationComponent
  },

  data: () => ({
    drawer: true,
  }),
  methods: {
    handleDrawerChange(isOpen){
      this.drawer = isOpen;
    },
    handleDrawerClose(){
      if(window.innerWidth < 1280){
        this.drawer = !this.drawer;
      }
    }
  }
};
</script>
