const checkInInput = document.getElementById('check-in-input');
const checkOutInput = document.getElementById('check-out-input');

//check in

var picker = new Pikaday({
    field: document.getElementById('check-in-input'),
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month<10 ? '0'+month : month}-${day<10 ? '0'+day : day}`;
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
    }
});
