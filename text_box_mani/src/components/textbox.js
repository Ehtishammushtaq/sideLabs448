import {useState} from 'react'
import {useRef} from 'react';
function Textbox()
{
    const [red, setRed] = useState(100); //this is now a vaible named red that I can use to save data and change data using setRed default color of white
    const [green, setGreen] = useState(100);//this is dynamic in nature such as it refreshes every time any event is happening...ie it rerenders the page 
    const [blue, setBlue] = useState(100);
    const [fontfamily, setfontfamily] = useState();
    const [texttransform, settexttransform] = useState();
    const [letterSpacing, setletterspacing] = useState();
    const [borderraduis, setborderraduis] = useState();

    const cRed = useRef();
    const cBlue = useRef();
    const cGreen = useRef();
    const ffamily = useRef();
    const ttransform = useRef();
    const lspacing = useRef();
    const bradius = useRef();
    
    


    function colorChange()
    {
      
      console.log('before', red);

      setRed(cRed.current.value);
      setGreen(cGreen);
      setBlue(cBlue);
      setfontfamily(ffamily, "16px");
      settexttransform(ttransform);
      setletterspacing(lspacing)
      setborderraduis(bradius);
      console.log(cRed.current.value);
      console.log('after', red);
      
    }

    var mystyle = {
        background : `rgb(${cRed}, ${green}, ${blue})`, // I am doing all this in a variable so need to use js {} rgb is a function
        fontFamily: fontfamily,
        textTransform: texttransform,
        letterSpacing: letterSpacing,
        borderRadius: borderraduis
    }
    

    

    return(
        <div>
            <div style={mystyle}> 
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
                omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe 
                eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </div>
            <br/>
            
            <input type={'number'} ref={cRed}></input>

            <button onClick={colorChange}>button</button>
        </div>

       

    )

}

export default Textbox;