<template>
  <v-row class="container-spacing">
    <v-col cols="8">
      <DatePicker is-expanded v-model="date" :attributes="attributes" />
    </v-col>
    <v-col cols="4" class="pl-10">
      <h3>Festivos 2021</h3>
      <ul class="pt-4">
        <li v-for="festivo in festivosToday" v-bind:key="festivo.name">
          <strong>{{festivo.date.getDate()}} de {{ monthNames[festivo.date.getMonth()] }}</strong> - {{ festivo.name }}
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import { DatePicker } from "v-calendar";

export default {
  name: "CalendarComponent",

  components: {
    DatePicker,
  },
  data() {
    return {
      monthNames: [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ],
      date: new Date(),
      diasFestivos: null,
      festivosToday: null,
    };
  },
  watch: {
    // whenever question changes, this function will run
    date: function () {
      this.updateFestivosToday();
    }
  },
  methods: {
    updateFestivosToday(){
        if(!this.date){return;}
        this.festivosToday = this.diasFestivos.filter((festivo) => {
        //let dateElements = festivo.date.split("-");
        //let formatDate = new Date(parseInt(dateElements[0]), parseInt(dateElements[1]) - 1, parseInt(dateElements[2]));
        let fixedToday = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
        //festivo.date = formatDate;
        return festivo.date.getTime() === fixedToday.getTime();
      }); 
    }
  },
  computed: {
    attributes() {
      if(this.diasFestivos == null){return;}
      return [
        ...this.diasFestivos.map((festivo) => ({
          dates: festivo.date,
          dot: {
            color: 'red',
          },
          popover: {
            label: festivo.name,
          },
          customData: festivo,
        })),
      ];
    },
  },
  async created() {
    const response = await fetch("https://cloudmanlabs.api.stdlib.com/challenge/holidays/");
    const data = await response.json();
    this.diasFestivos = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let festivo = {};
      festivo.name = item.description;
      festivo.type = item.type;
      festivo.date = item.day;
      this.diasFestivos.push(festivo);
    }
    // Force festivosToday to appear
    this.festivosToday = this.diasFestivos.filter((festivo) => {
      let dateElements = festivo.date.split("-");
      let formatDate = new Date(parseInt(dateElements[0]), parseInt(dateElements[1]) - 1, parseInt(dateElements[2]));
      let fixedToday = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
      festivo.date = formatDate;
      return formatDate.getTime() === fixedToday.getTime();
    });
  },
};
</script>

<style scoped>
.container-spacing {
  padding: 2vh;
}
</style>
