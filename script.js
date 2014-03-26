(function()
{
    function Timer(obj)
    {
        this.frameCount = obj.frameCount;
        this.time = obj.time;
        this.color = obj.color;
        this.interval = 0;
        this.intervalId = 0;
        
        /**
        * Function checks whether the timer is running.
        * @returns true or false.
        */

        this.setIntervalToChange = function()
        {
            this.interval = Math.floor(this.time/this.frameCount);
        }

        this.isRunning=function()
        {
            var isRunning;
            if(this.intervalId != 0)
            {
                isRunning = true;
            }
            else
            {
                isRunning = false;
            }
            return isRunning;
        }
        /**
        * Defines a new function for timer.
        * @param {function} new function for timer.
        */
        this.setAction = function(action)
        {
            if(this.isRunning())
            {
                this.stop();
                this.action = action;
                this.run();
            }
            else
            {
                this.action  = action;
            }
        }
        /**
        * Defines a new interval for timer.
        * @param {number} new interval for timer.
        */
        this.setTime = function(time)
        {
            if(this.isRunning())
            {
                this.stop();
                this.time = time
                this.run();
            }
            else
            {
                this.time = time;
            }
        }
        /**
        * Defines a new interval for timer.
        * @param {number} new interval for timer.
        */
        this.setFrameCount = function(frameCount)
        {
            if(this.isRunning())
            {
                this.stop();
                this.frameCount = frameCount;
                this.run();
            }
            else
            {
                this.frameCount = frameCount;
            }
        }

        /**
        * The function starts the timer.
        */
        this.run = function()
        {   
             this.setIntervalToChange();
            if(this.frameCount > this.color.currentFrame)    
            {    
                this.intervalIid = setInterval ( this.color.animation, this.interval );
            }    
            else
            {
                this.stop();
            }
        }
        /**
        * The function stopChangings the timer.
        */
        this.stop = function()
        {
            clearInterval(this.intervalId);
            this.intervalId=0;
        }
        
    }
    
    function animateColor(obj)
    {


        this.element=obj.element;
        this.startColor = obj.startColor;
        this.stepChengOfColor=obj.step.map(function(elem){return elem;});

        this.arrayColorToChanje = [];       
        this.currentFrame=0;
        
        /**
        * Color for animation.
        */
        this.setNewColorToShow = function()
        {
            this.arrayColorToChanje[0] = (this.startColor[0] + Math.floor(this.stepChengOfColor[0]*this.currentFrame));
            this.arrayColorToChanje[1] = (this.startColor[1] + Math.floor(this.stepChengOfColor[1]*this.currentFrame));
            this.arrayColorToChanje[2] = (this.startColor[2] + Math.floor(this.stepChengOfColor[2]*this.currentFrame));
            this.frameCount++;
        }

        /**
        * Animation.
        */
        this.animation = function()
        {
                //this.setNewColorToShow();
                this.setNewColorToShow.myBind(this);
                this.element.style.backgroundColor = 'rgb(' + this.arrayColorToChanje[0] + ',' + this.arrayColorToChanje[1] + ','+ this.arrayColorToChanje[2] + ')';
        }
    }

    Function.prototype.myBind =  function ( context, obj )
    {
        var data = {
                   payload:obj
                };
        var that = this;

        return  function() {
                data.args = [].slice.call(arguments);
                that.call(context, data);
            };
    }
    
    function init()
    {
        var color = new animateColor({element:document.getElementById('container1'), startColor:[113, 123, 90], frameCount:50, step:[2,1,0]});
        var timer = new Timer({frameCount:50, time:1500, color: color});
        
       timer.run(color.currentFrame);
    }
    window.init = init;
}())    