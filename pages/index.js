import React, { useState } from 'react';
import Head from 'next/head'

export default function Home() {
  const [isLoading, updateIsLoading] = useState(true);

  function handleOnLoadingCheck({ currentTarget } = {}) {
    updateIsLoading(currentTarget.checked);
  }

  let loadingClass = 'loading';

  if ( !isLoading ) loadingClass = '';

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>CSS Loading Animation</h1>

        <h2>CSS Snippet</h2>
        <pre>
          <code>
{`
.loading {
  color: transparent;
  background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
  background-size: 400%;
  animation: loading 1.2s ease-in-out infinite;
}

@keyframes loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
`}
          </code>
        </pre>

        <h2>Example</h2>
        <p>
          <label className="loading-checkbox" htmlFor="is-loading">
            <input id="is-loading" type="checkbox" onChange={handleOnLoadingCheck} checked={isLoading} /> Is Loading
          </label>
        </p>

        <p className={loadingClass}>Eeeee! Now say "nuclear wessels"! Well I'da done better, but it's plum hard pleading a case while awaiting trial for that there incompetence. Yes! In your face, Gandhi! We can't compete with Mom! Her company is big and evil! Ours is small and neutral!</p>
        <p className={loadingClass}>I'm sure those windmills will keep them cool. Fry, we have a crate to deliver. <strong> So, how 'bout them Knicks?</strong> <em> It's toe-tappingly tragic!</em> And then the battle's not so bad?</p>
        <h3 className={loadingClass}>Then we'll go with that data file!</h3>
        <p className={loadingClass}>Doomsday device? Ah, now the ball's in Farnsworth's court! Now what? Tell her you just want to talk. It has nothing to do with mating. You can crush me but you can't crush my spirit! Hey! I'm a porno-dealing monster, what do I care what you think?</p>

        <ol className={`${loadingClass} list-with-space`}>
          <li>File not found.</li>
          <li>It's toe-tappingly tragic!</li>
          <li>Five hours? Aw, man! Couldn't you just get me the death penalty?</li>
        </ol>

        <span className={`${loadingClass} image-fixed-height`}>
          <img width="600" height="300" src="/professor-farnsworth-futurama.png" />
        </span>

        <h4 className={loadingClass}>Now, now. Perfectly symmetrical violence never solved anything.</h4>
        <p className={loadingClass}>I can explain. It's very valuable. Well, let's just dump it in the sewer and say we delivered it. Or a guy who burns down a bar for the insurance money! Ah, yes! John Quincy Adding Machine. He struck a chord with the voters when he pledged not to go on a killing spree.</p>

        <ul className="list-with-space">
          <li className={loadingClass}>Soothe us with sweet lies.</li>
          <li className={loadingClass}>Tell her you just want to talk. It has nothing to do with mating.</li>
          <li className={loadingClass}>Tell her she looks thin.</li>
        </ul>

        <p className={loadingClass}>And then the battle's not so bad? Bite my shiny metal ass. OK, this has gotta stop. I'm going to remind Fry of his humanity the way only a woman can. This is the worst kind of discrimination: the kind against me!</p>
        <p className={loadingClass}>You're going back for the Countess, aren't you? Large bet on myself in round one. Hey, guess what you're accessories to. Kids don't turn rotten just from watching TV. Okay, I like a challenge. If rubbin' frozen dirt in your crotch is wrong, hey I don't wanna be right.</p>
        <p className={loadingClass}>Of all the friends I've had… you're the first. We don't have a brig. Look, last night was a mistake. What are you hacking off? Is it my torso?! 'It is!' My precious torso! We can't compete with Mom! Her company is big and evil! Ours is small and neutral!</p>
        <p className={loadingClass}>When the lights go out, it's nobody's business what goes on between two consenting adults. What's with you kids? Every other day it's food, food, food. Alright, I'll get you some stupid food. In your time, yes, but nowadays shut up! Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for their stemcells.</p>
        <p className={loadingClass}>I daresay that Fry has discovered the smelliest object in the known universe! Doomsday device? Ah, now the ball's in Farnsworth's court! You don't know how to do any of those. We'll go deliver this crate like professionals, and then we'll go home.</p>
        <p className={loadingClass}>Of all the friends I've had… you're the first. Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff! Shut up and get to the point! You guys realize you live in a sewer, right?</p>
        <p className={loadingClass}>You've killed me! Oh, you've killed me! Of all the friends I've had… you're the first. Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors!</p>
        <p className={loadingClass}>It's toe-tappingly tragic! For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! Yep, I remember. They came in last at the Olympics, then retired to promote alcoholic beverages!</p>
        <p className={loadingClass}>Bite my shiny metal ass. Daddy Bender, we're hungry. Daddy Bender, we're hungry. And then the battle's not so bad?</p>
        <p className={loadingClass}>Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. I'm Santa Claus! Calculon is gonna kill us and it's all everybody else's fault! Why yes! Thanks for noticing.</p>
        <p className={loadingClass}>Yes, if you make it look like an electrical fire. When you do things right, people won't be sure you've done anything at all. You're going to do his laundry? Yeah, I do that with my stupidness. There's no part of that sentence I didn't like!</p>
        <footer>
          <p>
            Demo by <a href="https://twitter.com/colbyfayock">@colbyfayock</a>
          </p>
          <p>
            Copy from <a href="https://www.google.com/search?q=futurama">Futurama</a> via <a href="http://fillerama.io/">Fillterama.io</a>
          </p>
        </footer>
      </main>
    </div>
  )
}
