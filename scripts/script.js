// © Anas Abu Farraj
// Learning Handlebars
// March 9, 2019

jQuery(document).ready(() => {
  // document ready message
  jQuery('footer small').text('Ready to Manipulate!');

  // get html template and compile date
  let compiledTemplate = Handlebars.compile(
    jQuery('#character-template').text()
  );

  // get data with AJAX, when don, render the template
  jQuery.ajax('data/cast.json').done(cast => {
    jQuery('.character-list-container').html(compiledTemplate(cast));
  });
});
