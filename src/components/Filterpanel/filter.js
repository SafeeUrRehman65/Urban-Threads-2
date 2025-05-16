var a1 = document.getElementsByClassName('c1');
var a2 = document.getElementsByClassName('filter-panel');
var a3 = document.getElementsByClassName('categ-list');
var a4 = document.getElementsByClassName('categ');
var min = document.getElementsByClassName('min')
var max = document.getElementsByClassName('max')
var man = document.getElementsByClassName('man')

var countSubcategCheck = document.getElementsByClassName('check')
var rating = document.getElementsByClassName('rating');
var minprice;
var maxprice;
// function to handle data


// to handle min and max prices set by user


export function DisplayCateg(item) {
    item[0].classList.toggle('hidden')
}
export function Clicked() {
    a1[0].classList.toggle('rotate-180')
    a3[0].classList.toggle('h-[7rem]')
    a4[0].classList.toggle('hidden')

}

export function DisplayFilter() {
    a2[0].classList.replace('opacity-0', 'opacity-100')

    // Men will be the default products so checkbox will remain checked
    man[0].checked = true
}

export function CloseFilter() {

    a2[0].classList.replace('opacity-100', 'opacity-0')
    a2[0].classList.replace('relative', 'absolute')

}

export function uncheckAll() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}

export function ApplyFilters() {
    // Checking multiple conditions before applying filters
    if (isNaN(Number(min[0].value))) {
        alert("Please enter a number in the min field")
        min[0].value = ""
    }

    if (isNaN(Number(max[0].value))) {
        alert("Please enter a number in the max field")
        max[0].value = ""
    }

    if (!(0 <= Number(rating[0].value) && (Number(rating[0].value) <= 20))) {
        rating[0].value = "";
        alert("Please enter a rating in the range of 0-20");
    }
    if ((min[0].value != "" && max[0].value == "") || (min[0].value == "" && max[0].value != "")) {
        alert("Please fill both min and max fields")

    } else {
        minprice = min[0].value
        maxprice = max[0].value
        console.log("ratings", rating[0].value)
        rating = Number(rating[0].value)
        // window.location.reload()
    }

}



