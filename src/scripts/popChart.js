
import Chart from 'chart.js/auto'
import * as d3 from 'd3'
// import { geoBounds } from 'd3'

// feed it Object.keys(allCountriesObj.US)
export const makeChart = async (allCountryData, countryCode, name) => {

    let chartData = allCountryData[countryCode]
    

    let canvas = document.getElementById('chart')

    //If no chart exist, we need to create a new canvs
  if(!canvas){
    d3.select('body')
    //   .append('div').attr('class', 'popChart')
    //   d3.select('.popChart')
      .append('div').attr('class', 'modalContainer')
      d3.select('.modalContainer')
      .append('canvas').attr('id', 'chart')
    d3.select('.modalContainer')


    canvas = document.getElementById('chart')
    //If a chart does exist we need to delete the old canvas and create a new one
  } else {
    //create a nice chart
    //need to delete the canvas
    d3.select('#chart').remove();
    d3.select('.modalContainer').append('canvas').attr('id', 'chart')
    canvas = document.getElementById('chart')
  }


    let ctx = canvas.getContext('2d')
    const labels = Object.keys(chartData);
    const data = {
      labels: labels,
      datasets: [{
        label: 'Population',
        data: Object.values(chartData),
        fill: true,
        backgroundColor: 'rgba(39, 134, 218, 0.3)',
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }]
    }

    const font = {
        weight: 'bold',
        size: 14
      
    }

    const scales = {
        xAxis: {
            title: {
                text: 'YEAR',
                color: '#fff',
                display: true,
                font: font
          },
            ticks: {
                color: '#fff'
            }
        },
        yAxis: {
            title: {
                text: 'Population',
                display: true,
                color: '#fff',
                font: font
            },
            ticks: {
                color: '#fff'
            }
        }

      }

    const layout = {
        padding: {
          bottom: 20,
          left: 20,
          right: 35,
          top: 20
        }
      }

    const plugins = {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: `Population of the ${name}`,
            color: '#fff',
            font: font
        }
    }
    

    
    const popChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            plugins: plugins,
            legend: {
              display: false,
            },
            scales: scales,
            layout: layout
        }
    })

}    