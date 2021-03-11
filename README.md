# CSS Loading Animation
Pure CSS loading animation. Use it as a class to easily add an elegant loading state to your apps!

## CSS Snippet
```
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
```

## Why did I deploy this as a React app?
It was just easier for me to create a really basic example of toggling loading state. To use the loading animation itself, you do **not** need React. Mostly you'll need a way to dynamically add a CSS class.

## Spinning this up locally
* Install dependencies
```
yarn install
# or
npm install
```
* Run the development server:
```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## More tutorials and walkthroughs
* [Follow me on Twitter](https://twitter.com/colbyfayock)
* [Subscribe on YouTube](https://www.youtube.com/colbyfayock)
