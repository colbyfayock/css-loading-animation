import React, { useState, useEffect } from 'react';
import Head from 'next/head'

export default function Home() {
  const [firstLoad, updateFirstLoad] = useState(false);
  const [isLoading, updateIsLoading] = useState(true);

  /**
   * handleOnLoadingCheck
   * @description Updates the state of loading using the checkbox
   */

  function handleOnLoadingCheck({ currentTarget } = {}) {
    updateIsLoading(currentTarget.checked);
  }

  let loadingClass = 'loading';

  if ( !isLoading ) loadingClass = '';

  useEffect(() => {
    setTimeout(() => {
      updateIsLoading(false);
      updateFirstLoad(true);
    }, 2000);
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>CSS Loading Animation</h1>

        <p>
          Pure CSS loading animation. Use it as a class to easily add an elegant loading state to your apps!
        </p>

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
          We'll trigger a loading state when this page first loads for 2 seconds. After
          you can use this checkbox to toggle the loading state on and off.
        </p>

        <p>
          <label className="loading-checkbox" htmlFor="is-loading">
            <input id="is-loading" type="checkbox" onChange={handleOnLoadingCheck} checked={isLoading} disabled={!firstLoad} /> Is Loading
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
