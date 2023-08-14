const checkInInput = document.getElementById('check-in-input');
const checkOutInput = document.getElementById('check-out-input');

//check in

var picker = new Pikaday({
    field: document.getElementById('check-in-input'),
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    },
    onSelect: function(selectedDate) {
        const selectedTimestamp = selectedDate.getTime();
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        const currentTimestamp = currentDate.getTime();

        if (selectedTimestamp < currentTimestamp) {
            alert("You cannot pick a date from yesterday.")
            // If selected date is yesterday or earlier, reset the picker to today's date
            picker.setDate(null)
        }
    }
});


//check out

var picker2 = new Pikaday({
    field: document.getElementById('check-out-input'),
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month<10 ? '0'+month : month}-${day<10 ? '0'+day : day}`;
    },
    onSelect: function(selectedDate) {
        const selectedTimestamp = selectedDate.getTime();
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        const currentTimestamp = currentDate.getTime();

        if (selectedTimestamp < currentTimestamp) {
            alert("You cannot pick a date from yesterday.")
            // If selected date is yesterday or earlier, reset the picker to today's date
            picker2.setDate(null)
        }
    }
});
