<template>
  <div id="showroom">
    <div id="showroom-description">
      <h1>remichel live erleben</h1>
      <hr class="divider" />
      <p>
        Achtung: Auf Grund der Pandemie ist die Markteinführung und Öffnung im
        Einzelhandel erst mit Sommer / Herbst 2021 zu erwarten.
      </p>
      <p>Händler werden?</p>
      <p>
        Sichern SIe sich schon jetzt die Möglchkeit als exklusiver Händler in
        Ihrer Stadt! Mehr Informationen auf unserem B2B-Terminal oder in den
        B2B-FAQ.
      </p>
    </div>
    <div id="showroom-map">
      <img src="@/assets/images/mock-map.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowroomIndex',
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
  color: rgb(28, 28, 28);
}
p {
  margin-bottom: 1rem;
}
h1 {
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 400;
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
  border-top: 1px solid rgb(214, 187, 146);
  border-color: rgb(214, 187, 146);
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
  li {
    font-size: 1.2rem;
  }
  p {
    font-size: 1.3rem;
  }

  #showroom-openhours > h2 {
    font-size: 1.3rem !important;
  }

  #showroom-map {
    width: calc((100% / 3));
  }
}
</style>
