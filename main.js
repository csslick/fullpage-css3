
var btn_a = document.querySelectorAll('#gnb a');

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