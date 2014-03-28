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

    /** set stayle class abd create some html element
    * @param {number} index. 
    * @param {html element} container. 
    */
    function createHtmlElement(index, container)
    {
        var div = document.createElement('div');
            div.id = index;
            div.className = 'animation' + index;
            container.appendChild(div);
    }
    /** set stayle class abd create some html element
    * @param {event} e. .
    */
    function animate(e)
    {

        var button = e.target;

        if(button.id == 4)
        {

            var container = document.getElementById('display');
            container.innerHTML = '';
            for(var i = 4; i <= 9; i++)
            {
                createHtmlElement(i, container);
            }
        }
        else
        {
           if(button.checked)
            {
                var container = document.getElementById('display');
                container.innerHTML = '';
                createHtmlElement(button.id, container);
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