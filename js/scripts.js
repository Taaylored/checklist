
// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

// CONFIGURE & "Handshake"
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyy840KvfhDAHXKL'
});
var base = Airtable.base('appbbz2yerInkMeoh');

// Check-Check
console.log(base);

// Get Records
base('Top 10').select({

    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Presidents'));
        
        showPresidents(record)
    });
});


var showPresidents = function(record) {

  var template = 
  `
<div class="item">
      <input type="checkbox">
      <p>${record.fields.Presidents}</p>
</div>
  `
;

    // Display Collected Data
  $('#tester').append(template);

}





const checkboxes = document.querySelectorAll('.column input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
