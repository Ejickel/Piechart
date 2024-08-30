const ctx = document.getElementById('myChart');

// Data: Number of students by department
const data = [120, 190, 30, 50, 20, 30]; // Replace these values with actual student numbers
const labels = ['Computer Science', 'Business', 'Engineering', 'Arts', 'Law', 'Medicine']; // Example departments

// Calculate the total number of students
const totalStudents = data.reduce((acc, value) => acc + value, 0);

// Convert data to percentage
const percentageData = data.map(value => ((value / totalStudents) * 100).toFixed(2)); // Convert to percentage and round to 2 decimal places

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Percentage of Students by Department',
            data: percentageData,
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    }
                }
            }
        }
    }
});