<template>
  <div id="showroom">
    <div id="showroom-description">
      <h1>remichel live erleben</h1>
      <hr class="divider" />
      <p>Lust auf Kennenlernen?</p>
      <p>Besuche uns einfach in unserem Showroom in Linz.</p>
      <div id="showroom-openhours">
        <h2>Unsere Geschäftszeiten:</h2>
        <div id="showroom-calendar">
          <ul id="openhours-days">
            <li>Dienstag</li>
            <li>Mittwoch:</li>
            <li>Donnerstag:</li>
            <li>Freitag:</li>
            <li>Samstag:</li>
          </ul>

          <ul id="openhours-time">
            <li>11:00 - 18:00</li>
            <li>11:00 - 18:00</li>
            <li>11:00 - 18:00</li>
            <li>11:00 - 18:00</li>
            <li>9:00 - 13:00</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="showroom-map">
      <img src="@/assets/images/mock-map.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Showroom',
  components: {},
}
</script>

<style  scoped>
#showroom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#showroom-description {
  width: 100vw;
  height: 50vh;
  background: rgb(228, 226, 228);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
}
h1 {
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 400;
}
p {
  margin-bottom: 1rem;
}
#showroom-openhours {
  margin-top: 1rem;
}
h2 {
  font-size: 1.1rem !important;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
#showroom-calendar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
#openhours-days {
  width: 50%;
  text-align: left;
  padding: 0;
}
li {
  list-style: none;
}
#openhours-time {
  text-align: right;
  width: 50%;
  padding: 0;
}
li {
  list-style: none;
}
#showroom-map {
  width: 100vw;
}
img {
  width: 100%;
  height: 100%;
}
.divider {
  width: 15%;
  margin: 1.2rem;
  border-top: 1px solid gold;
  border-color: gold;
}
@media screen and (min-width: 800px) {
  #showroom-description {
    width: 50%;
    height: auto;
    padding: 4rem;
  }
  #showroom-map {
    width: 50%;
  }
}
@media screen and (min-width: 1200px) {
  #showroom-description {
    width: calc((100% / 3) * 2);
    height: auto;
    padding: 6rem;
  }
  #showroom-description > li {
    font-size: 1.2rem;
  }
  #showroom-openhours {
  }
  #showroom-openhours > h2 {
    font-size: 1.3rem !important;
  }
  #showroom-map {
    width: calc((100% / 3));
  }
  p {
    font-size: 1.3rem;
  }
}
</style>
