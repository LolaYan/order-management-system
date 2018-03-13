/* global Handlebars, prompt */
'use strict';

(
    function addNewOrderItemRow() {
    var button = document.getElementById('addNewOrderItemRowButton');

    button.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('button was clicked');
        var table = document.getElementById('newOrderItemTable');

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        var cell1 = row.insertCell(0);
        cell1.innerHTML = rowCount;

        var colCount = table.rows[1].cells.length;

        for (var i = 1; i < colCount; i++) {
            var newcell = row.insertCell(i);
            newcell.innerHTML = table.rows[1].cells[i].innerHTML;
            //alert(newcell.childNodes);
            switch (newcell.childNodes[0].type) {
                case "text":
                    newcell.childNodes[0].value = "";
                    break;
                case "checkbox":
                    newcell.childNodes[0].checked = false;
                    break;
                case "select-one":
                    newcell.childNodes[0].selectedIndex = 0;
                    break;
            }
        }

    }, false);
}());
