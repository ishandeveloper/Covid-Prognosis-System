// CHART 0

var ctx = document.getElementById("chart-0").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [447, 20],
        backgroundColor: [],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Mild Patients", "Critical Patients"],
  },
  options: {
    cutoutPercentage: 60,

    aspectRatio: 1,
    legend: {
      display: false,
    },

    responsive: true,
    title: {
      display: false,
      text: "in Lakhs",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: false,
    },
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: false,
            labelString: "Month",
          },
        },
      ],
      xAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: false,
            labelString: "",
          },
        },
      ],
    },
  },
});

//CHART: PRODUCT COST

var ctx = document.getElementById("chart-1").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
    ],
    datasets: [
      {
        pointStyle: "line",
        data: [
          404036,
          422023,
          518366,
          547765,
          569421,
          443776,
          764522,
          553283,
          1039656,
          744357,
        ],
        backgroundColor: ["rgba(45,55,68,0.5)"],
        borderColor: ["rgba(45, 55, 68, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    aspectRatio: 4,
    legend: {
      display: false,
    },
    responsive: true,
    title: {
      display: false,
      text: "in Lakhs",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
        },
      ],
      xAxes: [
        {
          display: false,
        },
      ],
    },
  },
});

//CHART: MAIN DASH

var ctx = document.getElementById("chart-main").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
    ],
    datasets: [
      {
        label: "Consumed",
        display: true,
        pointStyle: "line",
        data: [
          53245,
          47858,
          48654,
          47556,
          35804,
          56707,
          42567,
          61871,
          49617,
          36274,
        ],
        backgroundColor: ["rgba(45,55,68,0.5)"],
        borderColor: ["rgba(78,115,223,1)"],
        fill: false,
      },
      {
        label: "Generated",
        display: true,
        pointStyle: "line",
        data: [
          40403,
          42203,
          58366,
          54765,
          56421,
          43776,
          74522,
          53283,
          69656,
          44357,
        ],
        backgroundColor: ["rgba(0,0,255,0.5)"],
        borderColor: ["rgba(255, 0, 0, 1)"],
        fill: false,
      },
    ],
  },
  options: {
    aspectRatio: 1.5,
    legend: {
      display: true,
    },
    responsive: true,
    title: {
      display: true,
      text: "Power Consumption & Generation",
      fontFamily: "Poppins",
      fontSize: 14,
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: "in MegaWatts (MW)",
          },
        },
      ],
      xAxes: [
        {
          display: true,
        },
      ],
    },
  },
});
