// © Anas Abu Farraj
// Learning Handlebars
// March 9, 2019

const cast = {
  characters: [
    {
      name: 'Jon Snow',
      shortCode: 'jon-snow',
      actor: 'Kit Harrington',
      house: 'Stark',
      location: undefined,
    },
    {
      name: 'Tyrion Lannister',
      shortCode: 'tyron',
      actor: 'Peter Dinklage',
      house: 'Tyron',
      location: 'Lannister',
    },
    {
      name: 'Brienne of Tarth',
      shortCode: 'brienne',
      actor: 'Gwendoline Christie',
      house: 'Tarth',
      location: 'Tarth',
    },
    {
      name: 'Helen of Patron',
      shortCode: 'Porgy',
      actor: 'Anna Gratia',
      house: 'Golly',
      location: 'Golly',
    },
  ],
};

jQuery(document).ready(() => {
  // document ready message
  jQuery('footer small').text('Ready to Manipulate!');

  // get html template and compile date
  let character = Handlebars.compile(jQuery('#character-template').text());

  // render template
  jQuery('.character-list-container').html(character(cast));
});
