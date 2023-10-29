import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import eyeSlash from './assets/eye-slash.svg'
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
    <div className='container'>
        <div className="left">
            <img src={logo} alt="logo" />
        </div>

        <div className="right">
            <h1>Login</h1>

            <form id='form'> 
              <div style={{marginBottom: 20}} className='inp'>
                <label htmlFor="loginid">Login ID</label> <br />
                <input type="text" placeholder='Enter Login ID'  className='inputField' />
              </div>

              <div className='password'>
                <label htmlFor="password">Password</label> <br />
                <input type="password" placeholder='Enter Password'  className='inputField' />
                <img src={eyeSlash} alt="eyeSlash" />
              </div>

              <br />
              <div className="remember">
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
             


              <div className="change-psw"><a href="#change-psw">Change Password</a></div>
              
              <div className="terms">
                <input type="checkbox" />
                <span>Agree to <a href="#terms">Terms & Conditions</a></span> 
              </div>

              <button>Login</button> <br />


            </form>

            <div id='register'>Don't Have An Account? <a href="#register">Register Here</a></div>
        </div>
    </div>
    </Container>
  )
}

const Container = styled.div`
  .container{
  width: 1300px;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  .left img{
    width: 543px;
    height: 450px;
    flex-shrink: 0;
  }
  
  .right{
    width: 650px;
    height: 650px;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
    padding: 60px 100px;
    position: relative;
    border-radius: 12px;
    flex-shrink: 0;

     h1{
      font-size: 48px;
      font-weight: 700;
      text-align: center;
    }

    #form{
        label{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      .inputField{
        width: 100%;
        padding: 10px;
        font-size: 18px;
        border: 1px solid #04072F66;
        border-radius: 8px;
      }
      .password{
        position: relative;
      }

      .password{
          img{
          position: absolute;
          top: 40px;
          right: 20px;
        }
      } 
      .remember{
        margin-bottom: 5px;
      } 
      .remember,.terms{
        span{
          font-size: 18px;
          font-weight: 400;
          color: var(--light-1);
          margin-left: 8px;
        }
      } 
      .change-psw{
        font-size: 18px;
        font-weight: 400;
        color: var(--light-1); 
      }
      .terms{
        span{
            a{
            text-decoration: none;
            color: var(--secondary-1);
          }
        }
      }
      .change-psw{
          a{
          text-decoration: none;
          color: var(--secondary-1);
        }
      } 
      
      .change-psw{
        position: absolute;
        top: 50%;
        right: 120px;
      }
      button{
        color: #f2f2f2;
        background-color: #1575A7;
        width: 400px; 
        height: 56px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 8px;
        border: none;
        margin: 20px 0px;
      }
      #register
      {
        font-size: 18px;
        font-weight: 700;
        text-align: center;
      }
      input:focus{
        outline: none;
      }

    } 
    #register{
          a{
          text-decoration: none;
          color: var(--secondary-1);
        }
      } 

  }
  

}
@media (max-width: 512px) { 
  .container{
    flex-direction: column;
  }
  .left{
    flex: 1;
  }
  .left{
      img{
      width: 100vw;
      height: 100vh;
    }
  }
  .right{
    width: 100vh;
    height: 100vh;
  }
} 

 /* Media Query for low resolution  Tablets, Ipads */ 
 @media (min-width: 481px) and (max-width: 767px) { 
  .container{
    flex-direction: column;
    gap: 50px;
    }
    .left{
      flex: 1;
    }
    .left{
        img{
        width: 100vw;
        height: 100vh;
      }
    }
    .right{
      width: 100vh;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .change-psw{
      top: 54%;
      right: 100px;
    }
} 

@media screen and (max-width: 1024px) {
  .container{
    flex-direction: column;
    gap: 50px;
    }
    .left{
      flex: 1;
    }
    .left{
      img{
        width: 100vw;
        height: 100vh;
      }
    } 
    .right{
      width: 100vh;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .change-psw{
      top: 54%;
      right: 100px;
    }
  }

`



export default App
