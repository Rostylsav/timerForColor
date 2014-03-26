(function()
{

    /**
        * Creates a new Timer.
        * @constructor 
        * @param {obj} object with property and value.
        * @property {function} action. Function for timer.
        * @property {number} frameCount. Number of frames to be performed.
        * @property {number} time. time for display all frames.
        */      
    function Timer(obj)
    {
       
        /**
        * @property {function} action. Function for timer.
        */
        this.action = obj.action;

        /**
        * @property {number} frameCount. Number of frames to be performed.
        */
        this.iteration = obj.iteration;

        /**
        * @property {number} interval. Interval for color change.
        */
        this.interval = obj.interval;        

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
            this.intervalIid = setInterval( function(){
                            if(this.iteration>this.currentIteration)
                                {
                                    this.action; 
                                    this.currentIteration++;
                                }
                            else
                                {
                                    this.stop();
                                }
                        }, this.interval);
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
        * @property {array} stepChengOfColor. step that will change the color
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
        * @property {array} endColor. finish color.
        */ 
        this.endColor = obj.endColor;

       

        /**
        * @property {array} stepChengOfColor. step that will change the color
        */ 
        this.stepChengOfColor=[];

        /**
        * @property {array} arrayColorToChanje. color for display.
        */ 
        this.arrayColorToChanje = [];

        /**
        * @property {number} currentFrame. Current frame.
        */       
        this.currentFrame=0;

        
         var timer = new Timer({action:this.changeColor, iteration:50, interval:30}); 
       
       this.setChanjeStepOfColor = function()
        {
            this.stepChengOfColor[0] = ((this.startColor[0] - this.endColor[0]) / timer.iteration);
            this.stepChengOfColor[1] = ((this.startColor[1] - this.endColor[1]) / timer.iteration);
            this.stepChengOfColor[2] = ((this.startColor[2] - this.endColor[2]) / timer.iteration);
        }

        this.animation = function()
        {
            this.setChanjeStepOfColor();
            timer.run();
        }

         /**
        * Set color  and display him.
        */
        this.changeColor = function()
        {
           
                this.arrayColorToChanje[0] = (this.startColor[0] - Math.floor(this.stepChengOfColor[0]*this.currentFrame));
                this.arrayColorToChanje[1] = (this.startColor[1] - Math.floor(this.stepChengOfColor[1]*this.currentFrame));
                this.arrayColorToChanje[2] = (this.startColor[2] - Math.floor(this.stepChengOfColor[2]*this.currentFrame));
                this.element.style.backgroundColor = 'rgb(' + this.arrayColorToChanje[0] + ',' + this.arrayColorToChanje[1] + ','+ this.arrayColorToChanje[2] + ')';
                console.log(this.currentFrame);
                this.currentFrame++;
        }

    }

   window.Timer = Timer; 
    function init()
    {
        var color = new AnimateColor({element:document.getElementById('container'), startColor:[12, 123, 90], endColor:[190, 255, 10]});
        color.animation();
    }
    window.init = init;
}())    