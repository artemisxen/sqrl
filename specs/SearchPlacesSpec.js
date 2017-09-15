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

  spec.describe('Testing the search result display',function(){
    spec.it('Can view the search result display',async function(){
      await spec.press('SearchPage.TextInput');
      await spec.fillIn('SearchPage.TextInput', 'Costa');
      await spec.press('SearchPage.TextInput', 'Costa');
      await spec.pause(1000);
      await spec.exists('ViewPlace.CostaCoffee');
    });
  });
}
