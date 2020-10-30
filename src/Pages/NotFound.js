import React from 'react'
import './NotFound.css';


const Notfound = () => <div class="container container-notfound"><img src={require('../media/error.jpg')} className="w-100" alt="Page not found"/><div className="centered-notfound h1 text-shadow">Unfortunately, it seems that you are lost, this page doesn't exist.</div></div>
export default Notfound  