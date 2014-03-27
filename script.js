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
        this.action = obj.action;
        this.countIteration = obj.countIteration;
        this.interval = obj.interval;        
        this.currentIteration = 0;
        this.intervalId = 0;

        this.run = function()
        {     
            this.intervalIid = setInterval( this.action.myBind(AnimateColor), this.interval)
        }

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
        this.element=obj.element;
        this.startColor = obj.startColor;
        this.endColor = obj.endColor;
        this.time = obj.time;
        this.stepChengOfColor=[];
        this.arrayColorToChange = obj.startColor.map(function(item){return item;});     
        this.currentFrame=0;
        this.countIteration = 0;

        this.getIteration = function()
        {
            this.countIteration = Math.floor(this.time / 30);
            return this.countIteration;
        }
       

       this.setChanjeStepOfColor = function()
        {
            var iter = this.getIteration();
            this.stepChengOfColor[0] = ((this.startColor[0] - this.endColor[0]) / iter);
            this.stepChengOfColor[1] = ((this.startColor[1] - this.endColor[1]) / iter);
            this.stepChengOfColor[2] = ((this.startColor[2] - this.endColor[2]) / iter);
        }
        this.changeColor = function()
        {
            this.arrayColorToChange[0] = (this.startColor[0] - Math.floor(this.stepChengOfColor[0]*this.currentFrame));
            this.arrayColorToChange[1] = (this.startColor[1] - Math.floor(this.stepChengOfColor[1]*this.currentFrame));
            this.arrayColorToChange[2] = (this.startColor[2] - Math.floor(this.stepChengOfColor[2]*this.currentFrame));
            this.currentFrame++;
            this.element.style.backgroundColor = 'rgb(' + this.arrayColorToChanje[0] + ',' + this.arrayColorToChanje[1] + ','+ this.arrayColorToChanje[2] + ')';
            console.log(this.currentFrame);
        }

        var timer = new Timer({action:this.changeColor, countIteration:this.getIteration(), interval:30}); 

        this.animate = function()
        {
            this.setChanjeStepOfColor();
            timer.run();
        }

    }

    Function.prototype.myBind =  function ( context )
    {
        var that = this;

        return  function() {
                that.call(context);
            };
    }
   window.Timer = Timer; 
    function init()
    {
        var color = new AnimateColor({element:document.getElementById('container'), startColor:[12, 123, 90], endColor:[190, 255, 10], time:1500});
        color.animate();
    }
    window.init = init;
}())    