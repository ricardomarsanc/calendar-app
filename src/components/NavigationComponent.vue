<template>
  <v-navigation-drawer
    app
    color="teal darken-2"
    v-model="drawerOpen"
    @input="onInput"
  >
    <v-list class="header-item">
      <v-list-item>
        <v-list-item-avatar>
          <v-icon size="36"> mdi-account-circle </v-icon>
        </v-list-item-avatar>
        <v-list-item-title class="text-h6 pl-4">
          {{ userData.name }} {{ userData.surname }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group color="primary">
        <v-list-item class="list-item" v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="pl-4">
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <div class="pa-2">
          <v-btn class="error-btn" elevation="4"> Informar de un error </v-btn>
        </div>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <v-img
        max-height="100"
        max-width="100"
        :src="require('../assets/logo_web.svg')"
      ></v-img>
      <div class="pa-2">
        Desarrollado con
        <v-btn icon color="pink">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationComponent",

  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },

  data: function () {
    return {
      userData: {},
      drawerOpen: this.open,
    };
  },
  computed: {
    items() {
      return [
        {
          icon: "mdi-calendar-account",
          title: "Fecha de nacimiento",
          text: "18/21/1990",
        },
        {
          icon: "mdi-office-building",
          title: "Cargo",
          text: this.userData.position,
        },
        {
          icon: "mdi-email",
          title: "Email",
          text: this.userData.email,
        },
        {
          icon: "mdi-cellphone",
          title: "Teléfono",
          text: this.userData.phone,
        },
        {
          icon: "mdi-calendar-today",
          title: "Días de vacaciones restantes",
          text: this.userData.vacationDays,
        },
      ];
    },
  },
  methods: {
    myFunc() {
      console.log("Hola: " + this.drawerOpen);
    },
    onInput(isOpen) {
      this.$emit("drawerOpened", isOpen);
    },
  },
  watch: {
    open(newVal) {
      this.drawerOpen = newVal;
    },
  },
  created() {
    fetch("https://cloudmanlabs.api.stdlib.com/challenge/user/")
      .then((response) => response.json())
      .then((data) => (this.userData = data));
  },
};
</script>
<style scoped>
.list-item {
  color: white;
  margin-top: 2vh;
  font-size: 15px;
}

.error-btn {
  margin-top: 3vh;
}

.header-item {
  color: white;
  padding-top: 4vh;
  padding-bottom: 3vh;
}
</style>