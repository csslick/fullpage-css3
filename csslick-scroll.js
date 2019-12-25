/*** Smooth page scroller
  by CSSLICK 
  release date: 2019.12.25
  for more information: https://github.com/csslick/fullpage-css3
***/

//  link(indicator)
var btn_a = document.querySelectorAll('.page-link a');
var page = document.querySelector('#page');

// add inner wrapper
section_html = document.getElementById('page').innerHTML;
inner_html = '<div class="inner">' + section_html + '</div>';
page.innerHTML = inner_html;

// init transiton
var cssText = 'transition:0.4s;height:100%';
document.querySelector('#page > .inner').style.cssText = cssText;

// scroll action
for(var i = 0; i < btn_a.length; i++) {
  btn_a[i].addEventListener('click', function(e){
    e.preventDefault();
    console.log('this hash', this.hash);
    var section = document.querySelector(this.hash);
    console.log(section.offsetTop);
    var top = document.querySelector('#page .inner');
    top.style.transform = 'translateY(' + (-section.offsetTop) + 'px)'
  })
}