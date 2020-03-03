//Array of steps to prepare each food item
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


//Iteration 1: Make steak instructions through use of callback functionality
// addFood(steak[0], '#steak',function(){
//   addFood(steak[1], '#steak',function(){ 
//     addFood(steak[2], '#steak', function(){
//       addFood(steak[3], '#steak', function(){
//         addFood(steak[4], '#steak', function(){
//           addFood(steak[5], '#steak', function(){
//             addFood(steak[6], '#steak', function(){
//               addFood(steak[7], '#steak')
//               document.querySelector('#table').innerHTML+=`<img src="/images/steak.jpg"/>`
//             })
//           })
//         })
//       })
//     })
//   })
// })
    // Version2: using makeFood method
        // function makeFood(steps, id, nextStep){ 
        //   document.querySelector(id).innerHTML+=`<li>${steps}</li>`
        //   if (nextStep){
        //     nextStep();
        //   }else if(!nextStep){
        //     document.querySelector('#table').innerHTML+=`<img src="/images/steak.jpg"/>`
        //   }
        // }

        // makeFood(steak[0], '#steak',function(){
        //   makeFood(steak[1], '#steak',function(){ 
        //     makeFood(steak[2], '#steak', function(){
        //       makeFood(steak[3], '#steak', function(){
        //         makeFood(steak[4], '#steak', function(){
        //           makeFood(steak[5], '#steak', function(){
        //             makeFood(steak[6], '#steak', function(){
        //               makeFood(steak[7], '#steak')
        //             })
        //           })
        //         })
        //       })
        //     })
        //   })
        // })
    //Version3: condense version 2 makeFood method call into for loop
        // function makeFood(steps, id){ 
        //   document.querySelector(id).innerHTML+=`<li>${steps}</li>`
        // }

        // for (i=0;i<steak.length;i++){
        //   makeFood(steak[i], '#steak')
        //   if (i === steak.length-1){
        //     document.querySelector('#table').innerHTML+=`<img src="/images/steak.jpg"/>`
        //   }
        // }

//Iteration 2: Make potatoes using promises (method addFood on addFood.js)
  // addFood(mashPotatoes[0],'#mashPotatoes').then(res=>{
  //   addFood(mashPotatoes[1],'#mashPotatoes').then(res=>{
  //     addFood(mashPotatoes[2],'#mashPotatoes').then(res=>{
  //       addFood(mashPotatoes[3],'#mashPotatoes').then(res=>{
  //         addFood(mashPotatoes[4],'#mashPotatoes')
  //         document.querySelector('#table').innerHTML+=`<img src="/images/mashPotatoes.jpg"/>`
  //       })
  //     })
  //   })
  // })

//Iteration 3: Make Brusselsprouts using async and await method
 
  // brusselSprouts.forEach(eachStep=>{
  //   async function mealprep(step){
  //     await addFood(step,'#brusselSprouts')
  //     if (brusselSprouts.indexOf(step) === brusselSprouts.length-1){
  //       document.querySelector('#table').innerHTML+=`<img src="/images/brusselSprouts.jpg"/>`
  //     }
  //   }
  //   mealprep(eachStep)
  // }) 

    //Version2: await for each step in brusselSprouts array
        // async function prepareMeal(){
        //   await addFood(brusselSprouts[0],'#brusselSprouts')
        //   await addFood(brusselSprouts[1],'#brusselSprouts')
        //   await addFood(brusselSprouts[2],'#brusselSprouts')
        //   await addFood(brusselSprouts[3],'#brusselSprouts')
        //   await addFood(brusselSprouts[4],'#brusselSprouts')
        //   await addFood(brusselSprouts[5],'#brusselSprouts')
        //   await addFood(brusselSprouts[6],'#brusselSprouts')
        //   await addFood(brusselSprouts[7],'#brusselSprouts')
        //   await addFood(brusselSprouts[8],'#brusselSprouts')
        // }

//Function to prepare meal in its entirety
  const promises=[]
function prepareMeal(){
    let foods=[steak,mashPotatoes,brusselSprouts]
    let foodName=['steak','mashPotatoes','brusselSprouts']
    for (let i=0;i<foods.length;i++){
      let food = foodName[i]
        foods[i].forEach(async function(step){
          await addFood(step,`#${food}`)
            if (foods[i].indexOf(step)===foods[i].length-1){
              document.querySelector('#table').innerHTML+=`<img src="/images/${food}.jpg"/>`
            }
          promises.push(addFood(step))
        })
    }
  }
    
  prepareMeal()

  // Promise.all(promises).then(response=>alert("Dinner is served!"))

