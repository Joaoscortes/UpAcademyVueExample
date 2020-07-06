<template>
  <div class="userform">
    <component v-for="(item, index) in sections" :key="index" :is="item" />
  </div>
</template>

v-for="(item, index) in items" :key="index"

<script>
import Form from "@/views/Form.vue";
import Table from "@/views/Table.vue";
import CirclePackChart from "@/views/CirclePackChart.vue";
import Histogram from "@/components/Histogram.vue";

export default {
  components: {
    Form,
    Table,
    CirclePackChart,
    Histogram
  },
  data() {
    return {
      sections: ["Histogram", "Form", "Table"]
    };
  }
};
</script>

<style>
</style>
