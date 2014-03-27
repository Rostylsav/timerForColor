(function()
{

    /**
        * Creates a new Timer.
        * @constructor 
        * @param {obj} object with property and value.
        * @property {function} action. Function for timer.
        * @property {number} frameCount. Number of frames to be performed.
        * @property {number} time. time for display all frames.
        * @property {function} callback. function wich starts after animate.
        */      
    function Timer(obj)
    {
        /**
        * @property {function} action. Function for timer.
        */
        this.action = obj.action;

         /**
        * @property {number} ountIteration. Number of iterations to be performed.
        */
        this.countIteration =obj.countIteration;

        /**
        * @property {number} interval. Interval for color change.
        */
        this.interval = obj.interval; 

        /**
        * @property {function} callback. function wich starts after animate.
        */
        this.callback = obj.callback;    

        /**
        * @property {nimber} currentIteration. Curent iteration.
        */
        this.currentIteration = 0;

        /**
        * @property {nimber} intervalId. intervalId for function stop().
        */
        this.intervalId = 0;

         /**
        * This function starts the timer.
        */
        this.run = function()
        {     
            this.intervalId = setInterval(function()
                                {
                                    if(this.currentIteration <= this.countIteration)
                                    {
                                        this.action();
                                        this.currentIteration++;    
                                    }
                                    else
                                    {
                                        this.stop();
                                        if(typeof this.callback =='function')
                                        {
                                            this.callback();   
                                        }
                                    } 
                                }.myBind(this), this.interval);
        }

        /**
        * This function stops the timer.
        */
        this.stop = function()
        {
            clearInterval(this.intervalId);
            this.intervalId = 0;
        }
    }

    /**
        * Creates a new AnimateColor.
        * @constructor 
        * @param {obj} object with property and value.
        * @property {html element} element. html element which will be animation color.
        * @property {array} startColor. color with which to start the animation.
        * @property {array} endColor. the final color for animation.
        * @property {number} time. time for animate.
        * @property {function} callback. function wich starts after animate.
        */   
    function AnimateColor(obj)
    {
        /**
        * @property {html element} element. html element which will be animation color.
        */
        this.element=obj.element;

        /**
        * @property {array} startColor. color with which to start the animation.
        */
        this.startColor = obj.startColor;

        /**
        * @property {array} endColor. the last color of animation.
        */
        this.endColor = obj.endColor;

        /**
         * @property {number} time. time for animate.
        */
        this.time = obj.time;

        /**
        * @property {function} callback. function wich starts after animate.
        */
        this.callback = obj.callback;


        /**
         * @property {number} interval. interval for changing.
        */
        this.interval = obj.interval;

        
        /**
        * @property {array} stepChengOfColor. step that will change the color
        */
        this.stepChengOfColor=[];

        /**
         * @property {array} arrayColorToChange. color to display
        */
        this.arrayColorToChange = obj.startColor.map(function(item){return item;});  

        /**
        * @property {number} currentFrame. current frame
        */   
        this.currentFrame=0;

        /**
        * @property {number} countIteration. count of iteration
        */
        this.countIteration = 0;


        /**
        * @returns {number} returns count of iteration
        */
        this.getIteration = function()
        {
            this.countIteration = Math.floor(this.time / this.interval);
            return this.countIteration;
        }
       
        /**
        *set the step for changing color 
        */
       this.setChanjeStepOfColor = function()
        {
            var iter = this.getIteration();
            this.stepChengOfColor[0] = ((this.startColor[0] - this.endColor[0]) / iter);
            this.stepChengOfColor[1] = ((this.startColor[1] - this.endColor[1]) / iter);
            this.stepChengOfColor[2] = ((this.startColor[2] - this.endColor[2]) / iter);
        }
        /**
        * set and display color
        */
        this.changeColor = function()
        {
            this.arrayColorToChange[0] = (this.startColor[0] - Math.floor(this.stepChengOfColor[0]*this.currentFrame));
            this.arrayColorToChange[1] = (this.startColor[1] - Math.floor(this.stepChengOfColor[1]*this.currentFrame));
            this.arrayColorToChange[2] = (this.startColor[2] - Math.floor(this.stepChengOfColor[2]*this.currentFrame));
            this.currentFrame++;
            this.element.style.backgroundColor ='rgb(' + this.arrayColorToChange[0] + ',' + this.arrayColorToChange[1] + ','+ this.arrayColorToChange[2] + ')';
        }

        /**
        * Creates a new Timer.
        */
        var timer = new Timer({action:this.changeColor.myBind(this), countIteration:this.getIteration(), interval:this.interval, callback:this.callback}); 

        /**
        * Function that starts the animation.
        */
        this.animate = function()
        {
            this.setChanjeStepOfColor();
            timer.run();
        }

    }

    /**
    * Function that call vethod of some object.
    */
    Function.prototype.myBind =  function ( context )
    {
        var that = this;

        return  function() {
                that.call(context);
            };
    }

    /**
    *Function of initialization.
    */
    function init()
    {
        function callback()
        {
            var newColor = new AnimateColor({element:document.getElementById('container2'), startColor:[0, 0, 0], endColor:[225, 215, 235], time:3000, interval:100,})
            newColor.animate();
        }
        var color = new AnimateColor({element:document.getElementById('container1'), startColor:[102, 255, 90], endColor:[210, 0, 110], time:2500, interval:100, callback : callback});
        color.animate();
    }
    window.init = init;
}())    