// The following four functions are used for fetching and displaying charts for transport information.

function chart_trips_by_usage() {
    const ctx = document.getElementById('trips_by_usage');

    new Chart(ctx, {
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
            text: "Trips by usage"
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Inter, sans-serif',
                            style: 'normal',
                            weight: 'bold',
                        },
                    },
                },
            },
        },
    });
}

function chart_trips_by_registration() {
    const ctx = document.getElementById('trips_by_registration');

    new Chart(ctx, {
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
            text: "Trips by registration"
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Inter, sans-serif',
                            style: 'normal',
                            weight: 'bold',
                        },
                    },
                },
            },
        },
    });
}

function chart_trips_by_type_of_vehicle() {
    const ctx = document.getElementById('trips_by_type_of_vehicle');

    new Chart(ctx, {
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
            text: "Trips by type of vehicle"
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Inter, sans-serif',
                            style: 'normal',
                            weight: 'bold',
                        },
                    },
                },
            },
        },
    });
}

function chart_trips_by_destination() {
    const ctx = document.getElementById('trips_by_destination');

    new Chart(ctx, {
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
            text: "Trips by destination"
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Inter, sans-serif',
                            style: 'normal',
                            weight: 'bold',
                        },
                    },
                },
            },
        },
    });
}

// The following four functions are used for fetching and displaying charts for attendance information.

function chart_average_attendance_for_beginner_lessons() {
    const ctx = document.getElementById('average_attendance_for_beginner_lessons');

    new Chart(ctx, {
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
            text: "Average attendance for beginner lessons"
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Inter, sans-serif',
                            style: 'normal',
                            weight: 'bold',
                        },
                    },
                },
            },
        },
    });
}

function chart_average_attendance_for_intermediate_lessons() {
    const ctx = document.getElementById('average_attendance_for_intermediate_lessons');

    new Chart(ctx, {
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
            text: "Average attendance for intermediate lessons"
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Inter, sans-serif',
                            style: 'normal',
                            weight: 'bold',
                        },
                    },
                },
            },
        },
    });
}

function chart_average_attendance_for_training_sessions() {
    const ctx = document.getElementById('average_attendance_for_training_sessions');

    new Chart(ctx, {
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
            text: "Average attendance for training sessions"
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Inter, sans-serif',
                            style: 'normal',
                            weight: 'bold',
                        },
                    },
                },
            },
        },
    });
}

function chart_average_attendance_for_trips() {
    const ctx = document.getElementById('average_attendance_for_trips');

    new Chart(ctx, {
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
            text: "Average attendance for trips"
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Inter, sans-serif',
                            style: 'normal',
                            weight: 'bold',
                        },
                    },
                },
            },
        },
    });
}