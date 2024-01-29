var myArray = [
    { name: "Ajay", major: "Computer Science", age: 18 },
    { name: "Vamsi", major: "Data Science", age: 24 },
    { name: "Pavan", major: "Industrial engineering", age: 20 },
    { name: "rahul", major: "Cyber Security", age: 16 },
    { name: "Anudeep", major: "Computer Science", age: 19 },
    { name: "Deva", major: "Data Science", age: 21 },
    { name: "Ram", major: "Industrial Engineering", age: 30 },
    { name: "Kumar", major: "Computer Science", age: 15 },
    { name: "raju", major: "Cyber Security", age: 30 }
];

buildTable(myArray);

$('th').on('click', function () {
    var column = $(this).data('colname');
    var order = $(this).data('order');
    var text = $(this).html();
    text = text.substring(0, text.length - 1);

    if (order == 'desc') {
        myArray = myArray.sort((a, b) => (a[column] > b[column] ? 1 : -1));
        $(this).data('order', 'asc');
        text += '&#9660';
    } else {
        myArray = myArray.sort((a, b) => (a[column] < b[column] ? 1 : -1));
        $(this).data('order', 'desc');
        text += '&#9650';
    }

    $(this).html(text);
    buildTable(myArray);
});

function buildTable(data) {
    var table = document.querySelector('table');
    var tbody = document.getElementById('myTable');
    tbody.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        var colname = `name-${i}`;
        var colmajor = `major-${i}`;
        var colage = `age-${i}`;

        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].major}</td>
                        <td>${data[i].age}</td>
                   </tr>`;
        tbody.innerHTML += row;
    }
}

function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector('table');
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) { // Start from 1 to skip the header row
        var display = "none"; // Default to hide the row

        for (var j = 0; j < tr[i].cells.length; j++) {
            td = tr[i].cells[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    display = ""; // Show the row if any column contains the search term
                    break; // Break the loop once a match is found in any column
                }
            }
        }

        tr[i].style.display = display;
    }
}

