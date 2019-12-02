



const steak = [
  'season steak generously with salt, pepper and garlic powder',
  'place in ziplock bag',
  'cook in sous vide at 120 F for 1-2 hours',
  'remove from bag and pat dry',
  'heat pan with grapeseed oil and a quarter stick of butter',
  'cook steak for 30-60 seconds per side using a spoon to baste with butter',
  'rest for 10 mintutes',
  'enjoy'
]

const brusselSprouts = [
  'wash burussel srouts',
  'cut off base and chop in half',
  'toss in bowl with olive oil, balsamic vinger and salt',
  'preheat oven to 500 F',
  'coat baking sheet with olive oil',
  'place in flat side down',
  'cook for 20 minutes',
  'place back in bowl and add salt and pepper',
  'enjoy',
]

const mashPotatoes = [
  'boil water',
  'tear open bag of of instant potato mix and pour into bowl',
  'pour in water',
  'mix',
  'enjoy'
] 

//to understand Callbacks
function makeFoodSteak(steps, id) {
  addFood(steps[0], id, function(){
    addFood(steps[1], id, function(){
      addFood(steps[3], id, function() {
        addFood(steps[4], id, function() {
          addFood(steps[5], id, function() {
            addFood(steps[6], id, function() {
              addFood(steps[7], id, function() {
                document.querySelector('#table').innerHTML += '<img src="images/steak.jpg" />'
              });
            });
          });
        });
      });
    });
  });
}

//to understand Promises and then
function makeFoodPotatoes(steps, id) {
  addFood(steps[0], id).then(()=>{
    addFood(steps[1], id).then(()=>{
      addFood(steps[2], id).then(()=>{
        addFood(steps[3], id).then(()=>{
          addFood(steps[4], id).then(()=>{
            document.querySelector('#table').innerHTML += '<img src="images/mashPotatoes.jpg" />'
          })
        })
      })
    })
  })
}

//to understand Async and Await
async function makeFoodBrussels(steps, id) {
  await addFood(steps[0], id)
  await addFood(steps[1], id)
  await addFood(steps[2], id)
  await addFood(steps[3], id)
  await addFood(steps[4], id)
  await addFood(steps[5], id)
  await addFood(steps[6], id)
  await addFood(steps[7], id)
  await addFood(steps[8], id)
  document.querySelector('#table').innerHTML += '<img src="images/brusselSprouts.jpg" />'
}


// makeFoodSteak(steak, "#steak");
// makeFoodPotatoes(mashPotatoes, "#mashPotatoes");
// makeFoodBrussels(brusselSprouts, "#brusselSprouts");

async function makeFood(steps, id){
  // console.log('start here', steps, id);
  let promises = [];
  for (step of steps){
    promises.push( await addFood(step, id) )
  }
  document.querySelector('#table').innerHTML += `<img src="images/${id.replace('#','')}.jpg" />`;
  return promises;

  // addFood()
}

//to understand Promises.all
Promise.all([
  makeFood(steak, "#steak"),
  makeFood(mashPotatoes, "#mashPotatoes"),
  makeFood(brusselSprouts, "#brusselSprouts")
]).then(val=>{
  console.log('all done', val)
    document.querySelector('body').innerHTML += `<button >Dinner is Served!</button>`
    document.querySelector('button').onclick = function(){
      new Audio('dinnerIsServed.mp3').play()
    }
})



// makeFood(steak, '#steak')


