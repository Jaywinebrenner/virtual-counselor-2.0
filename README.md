# Virtual Counselor


<!-- alternate navbar stylings for Header -->
<Navbar style={{ backgroundColor: 'rgba(255,255,255, 0.3)', opactiy: '.3'}} bg="" variant="dark">

<Nav style={{textAlign: 'center'}}>
  <Nav.Link style={{fontSize: '1.7rem', textAlign: 'center'}} href="/">Home</Nav.Link>
    <Nav.Link style={{fontSize: '1.7rem'}} href="/#about">About</Nav.Link>
</Nav>

</Navbar>


<!-- orgininal navbar stylings -->
<div className='navbar-wrapper'>
<FaRegHandshake className='left-hand-icon'/>

<Switch>
  <NavLink  onClick={props.onFadeOut} onMouseOut={removeChange} style={{ textDecoration: 'none', fontSize: '1.3rem', color: 'gray', marginBottom: '90px', marginRight: '5rem',fontWeight: 'bold' }} to="/">Home</NavLink>
</Switch>

<NavLink  onMouseOut={removeChange} className='navbar-about-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: 'gray', marginBottom: '90px', marginRight: '3rem',fontWeight: 'bold' }}  to="/about">About</NavLink>

<FaRegHandshake className='hand-icon'/>
</div>


  ![enter image description here](https://i.imgur.com/Gq70Yas.gif)

## By **Jay Winebrenner**

  ### Description
  A Web Application that purports to offer counseling yet takes the user on an unusual journey based on input. Virtual Counselor is an App that Jay Winebrenner made during his tenure studying software development at Epicodus in Portland, Oregon in an effort to incorporate his filmmaking past with his new found coding endeavors. He used React to make this. Email him if you want. About anything.

  jaywinebrenner@gmail.com

  ### Setup/Installation Requirements
  ![enter image description here](https://i.imgur.com/KW12jKcl.jpg)



1. Click the link shown in the above photo and download the file.
2. Unzip the file and navigate to the folder via your terminal or command line application.
3. Type $ // npm i // to install all the modules.
4. Type $ // npm start // to spin up a server which will display Virtual Counselor.
5. Navigate to // localhost:3000 // on your browser to open Virtual Counselor.
5. For purposes of these instructions, anything inside of // is what is to be typed in the terminal. If the instruction says // hello // for example, you'd type just the word hello in the terminal.




  ### ReactJS Component Schema:
  ![enter image description here](https://i.imgur.com/Ng0pIKI.png)

  ### Technologies Used

   - ReactJS
   - React-Router
   - React-Howler
   - React-Linkify
   - styled-components
   - Amazon S3 Cloud Storage

  ### Support and Contact

  If you have any questions about anything at all, please don't hesitate to get in touch. jaywinebrenner@gmail.com


  ### License

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  Copyright (c) 2019 **Jay Winebrenner**
