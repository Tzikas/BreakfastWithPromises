/**CALL THIS FUNCTION FROM OTHER FILES LIKE:
 * 
 * addFood('take steak from fridge', #steak)
 * 
 *  
 * */


/****** DO NOT TOUCH *****/
function addFood(step, id, callback){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        console.log(step);
        document.querySelector(id).innerHTML += (`<li>${step}</li`)
        resolve(step)
        callback ? callback() : ''//For iteration one  //addImage(id) => function to display food image once instructions finished printing
      }, Math.floor(Math.random() * 1000));
    })
  }
  /*****^ DO NOT TOUCH *****/

  
// function addImage(id){
//   if (id==='#mashPotatoes'){
//     document.querySelector('#table').innerHTML+=`<img src="/images/mashPotatoes.jpg"/>`
//   } else if (id==='#brusselSprouts'){
//     return document.querySelector('#table').innerHTML+=`<img src="/images/brusselSprouts.jpg"/>`
//   } else {
//     return ''
//   }
// }