<template>
  <div>
    <h1>Circle Pack in D3</h1>
    <h2>{{ msg }}</h2>
    <svg :height="height" :width="width">
      <g transform="translate(50,50)">
        <circle
          v-for="c in output"
          :key="c.id"
          :r="c.r"
          :cx="c.x"
          :cy="c.y"
          :fill="c.fill"
          :stroke="c.stroke"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      msg: "👋 from the Chart Component",
      height: 600,
      width: 600,
      d3Data: [
        {
          user: "Al",
          content: "I really love seafood.",
          timestamp: " Mon Dec 23 2013 21:30 GMT-0800 (PST)",
          retweets: ["Raj", "Pris", "Roy"],
          favorites: ["Sam"]
        },
        {
          user: "Al",
          content: "I take that back, this doesn't taste so good.",
          timestamp: "Mon Dec 23 2013 21:55 GMT-0800 (PST)",
          retweets: ["Roy"],
          favorites: []
        },
        {
          user: "Al",
          content: "From now on, I'm only eating cheese sandwiches.",
          timestamp: "Mon Dec 23 2013 22:22 GMT-0800 (PST)",
          retweets: [],
          favorites: ["Roy", "Sam"]
        },
        {
          user: "Roy",
          content: "Great workout!",
          timestamp: " Mon Dec 23 2013 7:20 GMT-0800 (PST)",
          retweets: [],
          favorites: []
        },
        {
          user: "Roy",
          content: "Spectacular oatmeal!",
          timestamp: " Mon Dec 23 2013 7:23 GMT-0800 (PST)",
          retweets: [],
          favorites: []
        },
        {
          user: "Roy",
          content: "Amazing traffic!",
          timestamp: " Mon Dec 23 2013 7:47  GMT-0800 (PST)",
          retweets: [],
          favorites: []
        },
        {
          user: "Roy",
          content: "Just got a ticket for texting and driving!",
          timestamp: " Mon Dec 23 2013 8:05 GMT-0800 (PST)",
          retweets: [],
          favorites: ["Sam", "Sally", "Pris"]
        },
        {
          user: "Pris",
          content: "Going to have some boiled eggs.",
          timestamp: " Mon Dec 23 2013 18:23 GMT-0800 (PST)",
          retweets: [],
          favorites: ["Sally"]
        },
        {
          user: "Pris",
          content: "Maybe practice some gymnastics.",
          timestamp: " Mon Dec 23 2013 19:47  GMT-0800 (PST)",
          retweets: [],
          favorites: ["Sally"]
        },
        {
          user: "Sam",
          content: "@Roy Let's get lunch",
          timestamp: " Mon Dec 23 2013 11:05 GMT-0800 (PST)",
          retweets: ["Pris"],
          favorites: ["Sally", "Pris"]
        }
      ]
    };
  },
  created() {
    this.colourScale = d3
      .scaleOrdinal()
      .range(["#5EAFC6", "#FE9922", "#93c464", "#75739F"]);
  },
  methods: {
    packChart() {
      const packChart = d3.pack();
      packChart.size([500, 500]);
      packChart.padding(10);
      const output = packChart(this.packData).descendants();
      return output.map((d, i) => {
        const fill = this.colourScale(d.depth);
        return {
          id: i + 1,
          r: d.r,
          x: d.x,
          y: d.y,
          fill,
          stroke: "grey"
        };
      });
    }
  },
  computed: {
    packData() {
      const nestedTweets = d3
        .nest()
        .key(d => d.user)
        .entries(this.d3Data);
      const packableTweets = { id: "All Tweets", values: nestedTweets };
      return d3
        .hierarchy(packableTweets, d => d.values)
        .sum(d =>
          d.retweets ? d.retweets.length + d.favorites.length + 1 : 1
        );
    },
    output() {
      return this.packChart();
    }
  }
};
</script>

<style>
</style>