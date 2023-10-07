let obj = {
    className: 'open menu',
    addClass: function(cls) {
  
      let classes = this.className.split(' ');

      if (!classes.includes(cls)) {
  
        classes.push(cls);

        this.className = classes.join(' ');
      }

      return this;
    },
    removeClass: function(cls) {

      let classes = this.className.split(' ');

      let index = classes.indexOf(cls);

      if (index !== -1) {

        classes.splice(index, 1);

        this.className = classes.join(' ');
      }
 
      return this;
    }
  };
  
  
  
  console.log(obj.className); 
  
  obj.addClass('active');
  console.log(obj.className); 
  
  obj.removeClass('open');
  console.log(obj.className); 