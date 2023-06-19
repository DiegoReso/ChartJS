
const ctx = document.getElementById('myChart');
  

  
  let datas={
    Qualidade: Math.random() * 30,
    Performance: Math.random() * 15,
    Usabilidade: Math.random() * 10,
    }


new Chart(ctx, {
  type: 'bar',
  data: {
    
    datasets: [{
      label: '# Qualidade',
      data: datas,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})



const ctx1 = document.getElementById('myChart1');
  

new Chart(ctx1, {
  type: 'line',
  data: {
    
    datasets: [{
      label: '# Qualidade',
      data: datas,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})


const ctx2 = document.getElementById('myChart2');
  

new Chart(ctx2, {
  type: 'pie',
  data: {

    labels:["Qualidade","Performance","Usabilidade"],
    datasets: [{
      label: '# Qualidade',
      data: [datas.Qualidade,datas.Performance,datas.Usabilidade],
       backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    
    }]
  },
  options: {
  
  }
})
