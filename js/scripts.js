// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

const inputs = document.querySelectorAll('.controls input');
        function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      }
      
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
 


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
   maxRecords: 1,
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Presidents'));
        
        showPresidents(record)
    });
});


var showPresidents = function(record) {
    console.log(record.fields.Image);

  var template = 
  `
<img src=" ${record.fields.Image[0].url} " alt="">

  `
;

    // Display Collected Data
  $('#designer').append(template);

}