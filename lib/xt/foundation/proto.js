
/** @namespace
  The proto namespace is a mixture of common prototypal modifications
  to core JavaScript (and a few others) objects. They are placed here
  to be included for the entire application to make use of. These 
  features are generally convenience methods that have been tested in
  the context of their use in this application only.
*/
XT.proto = { /** XT.proto.prototype */ }

/** XT.String */        require('./string');
/** XT.Function */      require('./function');

// XT.mixin(Object.prototype, 
XT.mixin(XT,
  /** @lends XT */ {
  
  /**
    @see XT.Object.camelize
  */
  camelize: function(obj) {
    return XT.Object.camelize.call(obj);
  },
   
  /**
    @see XT.Object.camelize
  */
  cml: function(obj) {
    return XT.Object.camelize.call(obj);
  },
   
  /**
    @see XT.Object.camelize
  */
  decamelize: function(obj) {
    return XT.Object.decamelize.call(obj);
  }
 
});

XT.mixin(Array.prototype, 
  /** @lends Array.prototype */ {
  
  /**
    
    @returns {Number|Boolean} If the index is found and greater than zero
      it is returned, if it is found and equal to zero boolean true is returned,
      and if it is not found boolean false is returned.
  */
  contains: function(needle) {
    var i = 0,
        l = this.length;
    for(; i<l; ++i)
      if(this[i] === needle) return i > 0 ? i : true;
    return false;
  }
  
}) ;

XT.mixin(Function.prototype, 
   /** @lends Function.prototype */ {

  /**
    @see XT.Function.property
  */
  property: function() {
    return XT.Function.property(this);
  },

  /**
    @see XT.Function.observes
  */
  observes: function() {
    var i=0, len = arguments.length;
    for(; i<len; ++i)
      XT.Function.observes(this, arguments[i]);
    return this;
  }
}) ;

XT.mixin(String.prototype, 
  /** @lends String.prototype */ {
  
  /** @public
    @see XT.String.format
  */
  format: function() {
    return XT.String.format.apply(this, arguments);
  },
  
  /** @public
    @see XT.String.format
  */
  f: function() {
    return XT.String.format.apply(this, arguments);
  },

  /** @public
    @see XT.String.w
  */
  w: function() {
    return XT.String.w.apply(this, arguments);
  },
  
  /** @public
    @see XT.String.capitalize
  */
  capitalize: function() {
    return XT.String.capitalize.apply(this, arguments);
  },

  /** @public
    @see XT.String.capitalize
  */
  cap: function() {
    return XT.String.capitalize.apply(this, arguments);
  },

  /** @public
    Camelize and capitalize the string.
  */
  h: function() {
    return this.c().cap();
  },
  
  /** @public
    @see XT.String.trim
  */
  trim: function trim() {
    return XT.String.trim.apply(this, arguments);
  },
  
  /** @public
    @see XT.String.pre
  */
  pre: function pre() {
    return XT.String.pre.apply(this, arguments);
  },

  /** @public
    @see XT.String.suf
  */
  suf: function suf() {
    return XT.String.suf.apply(this, arguments);
  },

  /** @public
    @see XT.String.camelize
  */
  camelize: function() {
    return XT.String.camelize.apply(this, arguments);
  },

  /** @public
    @see XT.String.camelize
  */
  c: function() {
    return XT.String.camelize.apply(this, arguments);
  },

  /** @public
    @see XT.String.decamelize
  */
  decamelize: function() {
    return XT.String.decamelize.apply(this, arguments);
  },

  /** @public
    @see XT.STring.decamelize
  */
  d: function() {
    return XT.String.decamelize.apply(this, arguments);
  }

});