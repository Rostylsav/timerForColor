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
        this.frameCount = obj.frameCount;
        /**
        * @property {number} time. time for display all frames.
        */
        this.time = obj.time;
        /**
        * @property {number} interval. Interval for color change.
        */
        this.interval = 0;
        /**
        * @property {nimber} intervalId. intervalId for function stop().
        */
        this.intervalId = 0;
        
        /**
        * Function set interval for change.
        * @returns true or false.
        */

        this.setIntervalToChange = function()
        {
            this.interval = Math.floor(this.time/this.frameCount);
        }

        /**
        * This function starts the timer.
        */
        this.run = function()
        {   
             var currentFrame = 0;   
             this.setIntervalToChange();
            if(this.frameCount > currentFrame)    
            {    
                this.intervalIid = setInterval ( this.action, this.interval );
                currentFrame++;
            }    
            else
            {
                this.stop();
            }
        }

        /**
        * This function stops the timer.
        */
        this.stop = function()
        {
            clearInterval(this.intervalId);
            this.intervalId=0;
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
        * @property {array} stepChengOfColor. step that will change the color
        */ 
        this.stepChengOfColor=obj.step.map(function(elem){return elem;});
        /**
        * @property {array} arrayColorToChanje. color for display.
        */ 
        this.arrayColorToChanje = []; 
        /**
        * @property {number} currentFrame. Current frame.
        */       
        this.currentFrame=0;
        
        /**
        * Set color  and display him.
        */
        this.animation = function()
        {
            this.arrayColorToChanje[0] = (this.startColor[0] + Math.floor(this.stepChengOfColor[0]*this.currentFrame));
            this.arrayColorToChanje[1] = (this.startColor[1] + Math.floor(this.stepChengOfColor[1]*this.currentFrame));
            this.arrayColorToChanje[2] = (this.startColor[2] + Math.floor(this.stepChengOfColor[2]*this.currentFrame));

            this.frameCount++;

            this.element.style.backgroundColor = 'rgb(' + this.arrayColorToChanje[0] + ',' + this.arrayColorToChanje[1] + ','+ this.arrayColorToChanje[2] + ')';
        }

    }

   
    function init()
    {
        var color = new AnimateColor({element:document.getElementById('container'), startColor:[113, 123, 90], frameCount:50, step:[2,1,0]});
        var timer = new Timer({action:color.animation, frameCount:50, time:1500}); 
        timer.run(color.currentFrame);
    }
    window.init = init;
}())    