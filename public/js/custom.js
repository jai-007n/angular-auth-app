 var ctx = document.getElementById("myChart").getContext('2d');
         var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
               labels: ["Sun", "Mon", "Tue ", "Wed ", "Thu ", "Fri ", "Sat "],
               datasets: [{
                  label: 'Week',
                  data: [400, 150, 60, 25, 28, 24, 7],
                  backgroundColor: "#2898ff"
               }, {
                  label: 'Month',
                  data: [300, 150, 40, 17, 28, 24, 7],
                  backgroundColor: "#3a4ffe"
               }]
            }
         });




  var xValues = ["Sale", "Distribute", "Return", ];
   var yValues = [55, 49, 44,];
   var barColors = [
      "#fd6161",
      "#2697ff",
      "#76d300",
      "#e8c3b9",
      "#1e7145"
   ];

   new Chart("myChart3", {
      type: "pie",
      data: {
         labels: xValues,
         datasets: [{
            backgroundColor: barColors,
            data: yValues
         }]
      },
      options: {
         title: {
            display: true,
           
         }
      }
   });


