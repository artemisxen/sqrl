export default function(spec){
  spec.describe('Displays the landing page text',function(){
    spec.it('Can view search page text',async function(){
      await spec.exists('SearchPage.Text');
    });
  });

  spec.describe('Displays the search bar',function(){
    spec.it('Can view the search bar',async function(){
      await spec.exists('SearchPage.TextInput');
    });
  });

  spec.describe('Search for a place',function(){
    spec.it('Can search for a place',async function(){
      await spec.exists('SearchPage.TextInput');
      await spec.fillIn('SearchPage.TextInput', 'Makers Academy');
    });
  });
}
