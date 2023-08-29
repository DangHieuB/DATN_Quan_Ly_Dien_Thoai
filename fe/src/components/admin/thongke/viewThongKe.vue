<template>
  <div id="chartContainer">
    <canvas id="myChart"></canvas>
  </div>
  <div class="div-button">
    <button class="button button1">Export Kết Quả Thống Kê</button>
  </div>
</template>

<script>
import ChartJS from 'chart.js';

export default {
  name: "viewThongKe",
  mounted() {
    const data = {
      labels: [
        'Iphone',
        'SamSung',
        'Opppo',
        'Nokia',
        'Xaomi',
        'Redmi'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14, 18],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
          'rgb(60, 50, 100)',
        ]
      }]
    };

    const config = {
      type: 'polarArea',
      data: data,
      options: {}
    };

    new ChartJS.Chart("myChart", config);
  }
};
</script>

<style scoped>
#chartContainer {
  width: 100%;
  max-width: 1000px;
  height: 500px;
  align-content: center;

}

.button {
  background-color: #58257b;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 4px;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #27aae1;
}

.button1:hover {
  background-color: #27aae1;
  color: white;
}
.div-button{
  position: absolute;
  bottom: 30px;
  right: 30px;
}
</style>