<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- wrtie a title for the map -->
    <h1>The default Vuelayers map</h1>
    <!-- Default useage  -->
    <div id="default_map">
      <vl-map
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
        style="height: 500px">
        <vl-view
          :zoom.sync="zoom"
          :center.sync="center"
          :rotation.sync="rotation"></vl-view>

        <vl-geoloc @update:position="geolocPosition = $event">
          <template #default="geoloc">
            <vl-feature v-if="geoloc.position" id="position-feature">
              <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
              <vl-style-box>
                <vl-style-icon
                  src="_media/marker.png"
                  :scale="0.4"
                  :anchor="[0.5, 1]"></vl-style-icon>
              </vl-style-box>
            </vl-feature>
          </template>
        </vl-geoloc>

        <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
      </vl-map>
      <div style="padding: 20px">
        Zoom: {{ zoom }}<br />
        Center: {{ center }}<br />
        Rotation: {{ rotation }}<br />
        My geolocation: {{ geolocPosition }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueLayers from 'vuelayers';
import 'vuelayers/dist/vuelayers.css'; // needs css-loader

Vue.use(VueLayers);

Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326',
});

export default {
  name: 'App',
  components: {},
  data() {
    return {
      zoom: 4,
      center: [25, 25],
      rotation: 0,
      geolocPosition: null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#default_map {
  margin: 20px;
}
</style>
