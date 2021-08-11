# CloudManLabs Technical Assessment

## Project Setup

<br/>

```
npm install
```

```
npm run serve
```
<br/>

## The project

This project has been created using Vue 3 + Vuetify 3 (Alpha). It is the first time for me using this new version of Vue so I had to do some extra research and maybe there are some code smells since I had to change some arrow functions to common functions to work in some cases like in Vue 2.

The project has been developed using the following tools/libraries:

* Node Package Manager
* Vue CLI (Vue 3)
* Vuetify
* V-Calendar (Need PopperJS to work)

### Why V-Calendar

I decided to use a library for the calendar. During the design phase three possible implementations were evaluated:

1.  Building a custom calendar using JavaScript/JSON objects and create a custom Vue Component using tables to build a calendar
2.  Building a custom calendar using CSS
3.  Using a third party library

The third option was quickly discarded because the need of display elements in certain dates would be very difficult using a pure CSS calendar. It should be necessary to create auxiliary variables and/or objects to manage the events in the calendar and in the side view separately. When deciding between the first and the second option, I finally decided to use a library because after making a little research, I found that V-Calendar is a very common used library nowadays, it has just been updated to work with Vue 3 and has a lot of customization and community support, integration with tools like i18n for internationalization (which I personally think is very important when working with dates) and more scalable than creating a calendar from zero. Since I have not received exact instructions regarding the features and functionality of the calendar, it seems to be better to use one with which new features can be added in the future.

### Found Bugs

When resizing the window, the `v-navigation-drawer`automatically closes itself, but since the open/close management is delegated into the parent component, the prop used to keep it open/closed does not change, so the user has to click twice in the hamburger menu to correctly hide/show the navigation bar.

* Possible solution: Adding a watcher to the `window.innerWidth` property to force the change of the property when the window resizes. The problem with this solution is that I don't exactly know if the Navigation drawer collapses always when the window resizes to less than 1280px or that property can be customized, or on the other hand if there is another way to prevent the drawer to be automatically collapsible.

### Further work

1. Styling components
2. Use a clear font
3. Adding themes (Dark/Light)
4. Add internationalization (i18n)
5. Use a third party light library like Moment.js to parse all dates to UTC initially and then formatting them using a property
