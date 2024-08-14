document.addEventListener('DOMContentLoaded', function() {
    const monthSelect = document.getElementById('month-select');
    const yearInput = document.getElementById('year-input');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const calendarBody = document.getElementById('calendar-body');

    function generateCalendar(month, year) {
        calendarBody.innerHTML = '';
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                let cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    cell.innerHTML = '';
                } else if (date > daysInMonth) {
                    cell.innerHTML = '';
                } else {
                    cell.innerHTML = date;
                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    function updateCalendar() {
        const month = parseInt(monthSelect.value);
        const year = parseInt(yearInput.value);
        generateCalendar(month, year);
    }

    monthSelect.addEventListener('change', updateCalendar);
    yearInput.addEventListener('change', updateCalendar);
    prevMonthButton.addEventListener('click', function() {
        let month = parseInt(monthSelect.value);
        let year = parseInt(yearInput.value);
        if (month === 0) {
            month = 11;
            year--;
        } else {
            month--;
        }
        monthSelect.value = month;
        yearInput.value = year;
        updateCalendar();
    });
    nextMonthButton.addEventListener('click', function() {
        let month = parseInt(monthSelect.value);
        let year = parseInt(yearInput.value);
        if (month === 11) {
            month = 0;
            year++;
        } else {
            month++;
        }
        monthSelect.value = month;
        yearInput.value = year;
        updateCalendar();
    });

    // Inicializa o calendário com o mês e ano atual
    const today = new Date();
    monthSelect.value = today.getMonth();
    yearInput.value = today.getFullYear();
    generateCalendar(today.getMonth(), today.getFullYear());
});
