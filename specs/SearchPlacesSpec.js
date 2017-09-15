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
}
