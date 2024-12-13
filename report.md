---
layout: default
title: Report
---

## Introduction


## Plots

<div id="plotly-chart" style="width: 100%; height: 500px;"></div>

<script>
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    type: 'scatter'
  };

  var data = [trace1];

  Plotly.newPlot('plotly-chart', data);
</script>


<canvas id="chartjs-chart" width="400" height="200"></canvas>