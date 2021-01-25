# React Scroll To Top

React.js component for smooth scroll top page [Demo](https://react-smooth-scroll.surge.sh/)

## Getting Started


### Installing

```
npm i react-smooth-scroll-to-top
```

End with an example of getting some data out of the system or using it for a little demo

## Import and use

on a single component
```javascript
import ScrollToTop from './ScrollToTop';

<div>
  <ScrollToTop />
</div>
```

## Props

| Name                    | Type             | Default         | Description                                                              |
|-------------------------|------------------|-----------------|--------------------------------------------------------------------------|
| children                | Component        | ^               | Arrow up icon                                                        |
| color                   | String           | #98a6d4         | Background color of component                                            |
| right                   | String or Number | 30px            | Right position of the component  |
| bottom                  | String or Number | 40px            | Bottom position of the component                                         |
| visibleAt               | Number           | 300             | Where the component should visible when user scroll reach certain bottom offset |

## Built With

* React.js - The web framework used
* Styled Components - For styles
* react-transition-group - For animations
* prop-types 

## Authors

* **Davi Pereira**
###### build in 2018
