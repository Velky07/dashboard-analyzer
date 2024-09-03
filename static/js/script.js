const ctx = document.getElementById('dailyMaxChart').getContext('2d');
const dailyMaxChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2024-12-01', '2024-12-02', '2024-12-03', '2024-12-04', '2024-12-05', '2024-12-06'],
        datasets: [
            {
                label: 'Produção Máxima (kW)',
                data: [850, 900, 920, 870, 890, 910],
                borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha de produção máxima
                backgroundColor: 'rgba(75, 192, 192, 0.1)', // Cor do preenchimento abaixo da linha
                fill: true, // Preenchimento abaixo da linha
                tension: 0.4, // Suavizar as linhas
                pointBackgroundColor: 'white', // Cor dos pontos
                pointBorderColor: 'rgba(75, 192, 192, 1)', // Cor da borda dos pontos
                pointRadius: 5 // Tamanho dos pontos
            },
            {
                label: 'Produção Média (kW)',
                data: [800, 850, 860, 810, 820, 830],
                borderColor: 'rgba(153, 102, 255, 1)', // Cor da linha de produção média
                backgroundColor: 'rgba(153, 102, 255, 0.1)', // Cor do preenchimento abaixo da linha
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'white',
                pointBorderColor: 'rgba(153, 102, 255, 1)',
                pointRadius: 5
            },
            {
                label: 'Produção Mínima (kW)',
                data: [750, 780, 790, 770, 760, 780],
                borderColor: 'rgba(255, 99, 132, 1)', // Cor da linha de produção mínima
                backgroundColor: 'rgba(255, 99, 132, 0.1)', // Cor do preenchimento abaixo da linha
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'white',
                pointBorderColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 5
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white', // Cor dos valores do eixo Y
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Cor das linhas de grade
                }
            },
            x: {
                ticks: {
                    color: 'white', // Cor dos valores do eixo X
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Cor das linhas de grade
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white' // Cor da legenda
                }
            }
        }
    }
});
