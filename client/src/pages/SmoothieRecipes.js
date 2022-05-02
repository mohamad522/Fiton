import React from 'react'
import '../css/smoothierecipes.css'
import smoothie2 from '../images/smoothie2.png'
import smoothie3 from '../images/smoothie3.png'
import smoothie4 from '../images/smoothie4.png'

const SmoothieRecipes = () => {
  return (
    <div className='smoothie-bg'>
      <div>
        <h1 className='smoothies-title'>Smoothie Recipes</h1>
        <h2 className='smoothie-intro-title' >Here are the top healthy and easy frozen fruit smoothie recipes</h2>
        <p className='smoothie-intro-text' >
        Looking for frozen fruit smoothie recipes? Have we got the list for you! You can make smoothies with any fruit imaginable:
        from the commonplace strawberry to the uniquely refreshing honeydew melon. Then there are all the double flavors: mango banana,
        strawberry blueberry… You can truly the rainbow with this fruity, icy purees! Here’s our list of top easy and healthy fruit 
        smoothie recipes! Each one has been tried and tested by yours truly (and bonus: tested on a 3 year old too!). Each one follows a 
        basic formula,There are also notes about dietary swaps and ways to add additional protein to these purees. Ready to get started?
        </p>
        <h2 className='smoothie-intro-title2' >And now…the top frozen fruit smoothie recipes to try!</h2>
      </div>
      <hr className='padding-hr' ></hr>
      <div className='' >
          <h1>1 - STRAWBERRY SMOOTHIE</h1>
          <br/>
          <h3>Ingredients for the strawberry smoothie</h3>
          <p>Here’s what you’ll need to make this strawberry smoothie! Alex and I were careful to choose 
          healthy ingredients for this smoothie: no overly sugary juices or syrups. Here’s what we selected:</p>
          <div className='flexcontainer'>
            <img className='smoothie-img' src={smoothie2}/>
            <ul>
              <li className='list-items'>
                <h4>Frozen strawberries:</h4>
                <p>It’s easy to find and store frozen berries, and they add a great icy texture to this smoothie. 
                  If you want to use fresh berries, use a frozen banana.</p>
              </li>
              <li className='list-items'>
                <h4>Fresh banana:</h4>
                <p>Our pet peeve is smoothie recipes that call for frozen bananas, because we never keep them on hand! 
                  Usually we want a smoothie recipe now. So we customized this one to use a fresh banana.</p>
              </li>
              <li className='list-items'>
                <h4>Greek yogurt:</h4>
                <p>Greek yogurt gives this recipe a protein boost and helpful probiotics. (If you love yogurt you could 
                  add a touch more.) It also makes for a perfect creamy texture..</p>
              </li>
              <li className='list-items'>
                <h4>Ice:</h4>
                <p>Here’s the most important part — ice is essential to a perfect strawberry smoothie! It makes just the right frothy texture. 
                  We’ve tried it without and it really makes a difference. Do not omit it!</p>
              </li>
              <li className='list-items'>
                <h4>Milk:</h4>
                <p>You need just the right amount of liquid in a smoothie to get it to blend. Not enough and the blender gets stuck (the worst!), 
                  and too much it tastes milky. You can also use non-dairy (see below).</p>
              </li>
              <li className='list-items'>
                <h4>Maple syrup:</h4>
                <p>Adding a hint of maple brings out the sweetness in the berries. If you eat a low sugar diet you could omit, but it doesn’t quite 
                  taste sweet enough with no sweetener.</p>
              </li>
            </ul>
          </div>
          <hr className='padding-hr'></hr>
          <div>
            <h1>2 - Mango Smoothie</h1>
            <br/>
            <h3>Ingredients for the mango smoothie</h3>
            <p>This healthy mango smoothie has only a handful of 
              ingredients and the majority is fruit! Here’s what you’ll need:</p>
            <div className='flexcontainer' >
              <img className='smoothie-img' src={smoothie3}/>
              <ul>
                <li>
                  <h4>Frozen mixed berries :</h4>
                  <p>You can use berries of any kind: try to find the mix of blueberries, blackberries, and strawberries sold in the frozen section.</p>
                </li>
                <li>
                  <h4>Green apple</h4>
                  <p>Green apple features in many of our smoothie recipes (like our Spinach Smoothie and Green Smoothie) because it’s full of sweet tart flavor and helps add texture.</p>
                </li>
                <li>
                  <h4>Banana:</h4>
                  <p>Banana is almost integral to most smoothies: it adds the best creamy texture!</p>
                </li>
                <li>
                  <h4>Frozen mango or pineapple:</h4>
                  <p>You can use either: these frozen fruits add necessary sweetness to the berries.</p>
                </li>
                <li>
                  <h4>Ice:</h4>
                  <p>You’ve got to throw in a little ice for the perfect fluffy smoothie texture.</p>
                </li>
                <li>
                  <h4>Lemon juice</h4>
                  <p>Lemon juice brings a brightness to the flavors.</p>
                </li>
                <li>
                  <h4>Maple syrup, honey or agave syrup:</h4>
                  <p>It’s optional, but it makes for just the right sweetness.</p>
                </li>
              </ul>
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1>3 - Perfect Fruits Smoothie</h1>
              <br/>
              <h3>Ingredients for a fruit smoothie</h3>
              <p>This fruit smoothie is all about flavor and color: the beautiful bright 
                pink pops with the promise of all the tasty ingredients within. It’s a plant 
                based and vegan fruit smoothie that’s heavy on the fruit. Here are the ingredients you’ll need for 
                this fruit smoothie:</p>
                <div className='flexcontainer' >
                  <img className='smoothie-img' src={smoothie4}/>
                  <ul>
                    <li className='list-items'>
                      <h4>Frozen mango:</h4>
                      <p>Frozen mango is easy to find at your local grocery, and easy to store. This is typically what we’ll 
                        use for the mango smoothie. You also can use fresh mango if you have it onhand: it just won’t have as icy of a texture..</p>
                    </li>
                    <li className='list-items'>
                      <h4>Banana:</h4>
                      <p>The banana helps to make a creamy texture and accentuate the sweetness.</p>
                    </li>
                    <li className='list-items'>
                      <h4>Water & Milk:</h4>
                      <p>A little creaminess is helpful for the overall texture, so we’ve used a combination of water and milk together. You can use any 
                        type of dairy or non-dairy milk (more on that below).</p>
                    </li>
                    <li className='list-items'>
                      <h4>Ice:</h4>
                      <p>Ice makes the perfect frothy texture.</p>
                    </li>
                    <li className='list-items'>
                      <h4>Fresh lemon juice:</h4>
                      <p>Lemon juice is the key to brightening the flavors: it’s like the salt of sweet foods!</p>
                    </li>
                  </ul>
                </div>
            </div>
            <hr className='padding-hr'></hr>
          </div>    
      </div>
    </div>
  )
}

export default SmoothieRecipes