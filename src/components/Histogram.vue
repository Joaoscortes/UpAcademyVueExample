<template>
  <div>
    <h2>Histogram Example</h2>
    <svg width="960" height="600" />
  </div>
</template>
<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      dataset: [10, 20, 30, 23, 13, 40, 27, 35, 20]
    };
  },
  mounted() {
    let marge = { top: 60, bottom: 60, left: 60, right: 60 };
    let svg = d3.select("svg");
    let width = svg.attr("width");
    let height = svg.attr("height");
    let g = svg
      .append("g")
      .attr("transform", "translate(" + marge.top + "," + marge.left + ")");
    let dataset = this.dataset;
    let xScale = d3
      .scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([0, width - marge.left - marge.right]);
    let xAxis = d3.axisBottom(xScale);
    let yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([height - marge.top - marge.bottom, 0]);
    let yAxis = d3.axisLeft(yScale);
    g.append("g")
      .attr(
        "transform",
        "translate(" + 0 + "," + (height - marge.top - marge.bottom) + ")"
      )
      .call(xAxis);
    g.append("g")
      .attr("transform", "translate(0, 0)")
      .call(yAxis);

    let gs = g
      .selectAll(".rect")
      .data(dataset)
      .enter()
      .append("g");
    let rectPadding = 20;
    gs.append("rect")
      .attr("x", function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr("y", function() {
        let min = yScale.domain()[0];
        return yScale(min);
      })
      .attr("width", function() {
        return xScale.step() - rectPadding;
      })
      .attr("height", function() {
        return 0;
      })
      .attr("fill", "lightblue")
      .transition()
      .duration(2000)
      .delay(function(d, i) {
        return i * 400;
      })
      .attr("y", function(d) {
        return yScale(d);
      })
      .attr("height", function(d) {
        return height - marge.top - marge.bottom - yScale(d);
      });

    gs.append("text")
      .attr("x", function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr("y", function() {
        let min = yScale.domain()[0];
        return yScale(min);
      })
      .attr("dx", function() {
        (xScale.step() - rectPadding) / 2;
      })
      .attr("dy", 20)
      .text(function(d) {
        return d;
      })
      .transition()
      .duration(2000)
      .delay(function(d, i) {
        return i * 400;
      })
      .attr("y", function(d) {
        return yScale(d);
      });
  }
};
</script>

<style>
</style>