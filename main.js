// Get access to the DOM
let filterInput = document.getElementById('filterInput');

// Listen to click
filterInput.addEventListener('keyup', filterNames);

// Write event function
function filterNames(){
    // Get filtervalue
    let filterValue = filterInput.value.toUpperCase();
    // Get ul from DOM
    let ul = document.getElementById('names');
    // Get lis
    let links = ul.querySelectorAll('li.list-group-item a');
    // Get a's from lis
    links.forEach(function(link){
        // if matched
        if(link.textContent.toUpperCase().indexOf(filterValue) > -1){
            link.parentElement.style.display = '';
        }else{
            link.parentElement.style.display = 'none';
        }
    })
} 