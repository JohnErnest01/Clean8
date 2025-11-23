function loadAppointments() {
    return JSON.parse(localStorage.getItem("appointments") || "[]");
}

function saveAppointments(data) {
    localStorage.setItem("appointments", JSON.stringify(data));
}

function deleteAppointment(index) {
    const data = loadAppointments();
    data.splice(index, 1);
    saveAppointments(data);
}

function updateAppointment(index, updated) {
    const data = loadAppointments();
    data[index] = updated;
    saveAppointments(data);
}
