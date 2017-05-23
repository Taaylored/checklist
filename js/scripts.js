
// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

// CONFIGURE & "Handshake"
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyNyK2dVB4Da7Dzo'
});
var base = Airtable.base('appYjgGyxE7AXQYex');
// Check-Check
console.log(base);

// Get Records
base('YaHURR').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    
    if (err) { console.error(err); return; }

    records.forEach(function(record) {
       
      // Check-Check 
      // console.log('Retrieved', record.get('Name'));
      // console.log( record.fields.Avatar[0].url ); 

      // Display Data
      showStudents(record)

    });
});

// Template Literal
var showStudents = function(record) {

  var template = 
  `
    <section class="ui raised card">
        <div class="image">
           <img src=" ${record.fields.Avatar[0].url} " alt="">
        </div>
       <div class="content">
           <h3>${record.fields.Name}</h3>
           <p class="description">
               ${record.fields.Bio}
           </p>
           <p class="description">
              <a href=" ${record.fields.GitHub} ">GitHub</a> and <a href="mailto:${record.fields.Email}">Email</a>
           </p>
       </div>
    </section>
  `;

  // Display Collected Data
  $('#students').append(template);

}
