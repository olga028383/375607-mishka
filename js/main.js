function Popup(options){
  this.popup = document.querySelector('.popup-cart');
  if(!this.popup) return;
  this.btn = options.btn;
  this.close = document.querySelector('.popup-form__btn');
  
  this.showPopup = this.showPopup.bind(this);
  this.hidePopup = this.hidePopup.bind(this);
  
  for(var i = 0; i<this.btn.length; i++){
    this.btn[i].addEventListener('click', this.showPopup);
  }
  
  this.close.addEventListener('click', this.hidePopup);
}

Popup.prototype.showPopup = function(e){
  e.preventDefault();
  this.popup.classList.add('popup-cart--show');
};

Popup.prototype.hidePopup = function(e){
  e.preventDefault();
  this.popup.classList.remove('popup-cart--show');
};


function MenuMobile(){
  this.menu = document.querySelector('.nav-menu');
  this.btn = this.menu.querySelector('.nav-menu__button');
  
  this.menu.classList.remove('nav-menu--nojs');
  this.menu.classList.add('nav-menu--close');
  
  this.toggleMenu = this.toggleMenu.bind(this);
  
  this.btn.addEventListener('click', this.toggleMenu);
}

MenuMobile.prototype.toggleMenu = function(){
  this.menu.classList.toggle('nav-menu--close');
};

new MenuMobile;
new Popup({
  btn: document.querySelectorAll('.product__icon-add-cart')
});
new Popup({
  btn: document.querySelectorAll('.product-of-week__btn')
});