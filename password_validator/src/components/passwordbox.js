import React from 'react';
import styles from '../components/passwordbox.module.css';
import {useRef} from 'react';

function Passwordbox() {
    const password1 = useRef();
    const password2 = useRef();
    
    function Calculator(){
        const passwordOnelen=password1.current.value.length;
        const passwordtwolen=password2.current.value.length;

      if((passwordOnelen===0) && (passwordtwolen===0))
      {
        alert('Bhadwe (-_-)');
      }
      else if(password1.current.value === password2.current.value)
      {
        alert('Bosdk password sahi hai');
      }
      else
      {
        alert('kya cutiyapa hai yaar...sahi se password de na')
      }
         
     }
  return (
   
    <div className={styles.passwordbox}>
        <div className={styles.textboxes}>
        <p>Password: </p>
        <input type={'password'} ref={password1} ></input>
        <br/>
       
        <p >Confirm Password:</p>
        <input type={'password'} ref={password2} ></input>
        </div>
        <br/>
        <button onClick={Calculator}> button</button>

    </div>
    
  );
}

export default Passwordbox;
