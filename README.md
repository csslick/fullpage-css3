# fullpage-css3
## Smooth page scroller
- by CSSLICK 
- release date: 2019.12.25

## Demo
https://csslick.github.io/fullpage-css3/

## Usage
```
    <nav class="page-link">
      <a href="#page1">1</a>
      <a href="#page2">2</a>
      <a href="#page3">3</a>
    </nav>
    <div id="page">
        <section class="page" id="page1">
          <h1>page1</h1>
        </section>  
        <section class="page" id="page2">
          <h1>page2</h1>
        </section>  
        <section class="page" id="page3">
          <h1>page3</h1>
        </section>
    </div><!-- end page -->

  <script src="csslick-scroll.js"></script>
```  

```
*{
  margin: 0; padding: 0;
  box-sizing: border-box;
}
html, body { height: 100%;}

.page-link {
  position: fixed;
  text-align: center;
  background: #ff0;
  width: 100%;
  left: 0; top: 0;
  z-index: 99;
}
#page, section { height: 100%;}
section { 
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#page { overflow: hidden;}
#page1{
  background-color: lightblue;
}
#page2{
  background-color: pink;
}
#page3{
  background-color: lightgreen;
}

```
