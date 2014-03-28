(function()
{
    /**
    *  set event for radiobuttom.
    */
    function addEvent()
    {
        for( var i = 1; i  <= 4; i++ )
        {
            document.getElementById(i+'').addEventListener("click", animate);   
        }
    }
    /**
    * @param {event} e. set stayle class abd create some html element.
    */
    function animate(e)
    {

        var button = e.target;

        if(button.id == 4)
        {

            var container = document.getElementById('display');
            container.innerHTML = '';

            var div1 = document.createElement('div');
            div1.id = 1;
            div1.className = 'animation' + 4;

            var div2 = document.createElement('div');
            div2.id = 2;
            div2.className = 'animation' + 5;

            var div3 = document.createElement('div');
            div3.id = 3;
            div3.className = 'animation' + 6;

            var div4 = document.createElement('div');
            div4.id = 4;
            div4.className = 'animation' + 7;

            var div5 = document.createElement('div');
            div5.id = 5;
            div5.className = 'animation' + 8;

            var div6 = document.createElement('div');
            div6.id = 6;
            div6.className = 'animation' + 9;

            container.appendChild(div1);
            container.appendChild(div2);
            container.appendChild(div3);
            container.appendChild(div4);
            container.appendChild(div5);
            container.appendChild(div6);

        }
        else
        {
           if(button.checked)
            {
                var container = document.getElementById('display');
                container.innerHTML = '';
                var div = document.createElement('div')
                div.className = 'animation' + button.id;
                container.appendChild(div);
            } 
        }
        
    }
    /**
    *Function of initialization.
    */
    function init()
    {
        addEvent();        
    }
    window.init = init;
}())    