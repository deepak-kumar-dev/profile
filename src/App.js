import React from 'react';
import profile from '../src/profile.jpg'

function App() {

  let commonStyle = {
    display: 'flex',
    minWidth:280,
    maxWidth:600,
    padding: 10,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center'
  }

  let CWidth = window.innerWidth
  let CHeight = window.innerHeight
  let mobileStyle =  CWidth < 500 ? { flexDirection:'column', textAlign:'center' } : {}
  let largeFont = CWidth < 500 ? 24 : 32
  let smallFont = CWidth < 500 ? 16 : 24
  let CStyle = {...commonStyle, ...mobileStyle}

  return (
    <div style={{background:'rgb(224, 224, 224)',width:CWidth, height:CHeight, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
      <div
        style={CStyle}>
        <div style={{ width: 200, height: 200, borderRadius: 100, overflow: 'hidden' }} >
          <img height={200} width={200} src={profile} alt="p_img" ></img>
        </div>
        <div
          style={{
            marin: 20,
            marginLeft: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center'
          }}
        >
          <div style={{fontWeight: 600, fontSize: largeFont}}>
            Deepak Kumar
          </div>
          <div style={{fontSize: smallFont, color: 'grey'}}>
            Full Stack Developer
          </div>
          <div style={{fontSize: smallFont, color: 'grey'}}>
            deepakkumarlamoria@gmail.com
          </div>
          <div style={{fontSize: smallFont, color: 'grey'}}>
            8824404070
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;