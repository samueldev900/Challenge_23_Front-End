import React, { Component } from 'react'

export class footer extends Component {
  render() {
    return (
    <div>
       <footer className='pt-10 h-10 w-custom min-[370px]:w-custom2 md:w-96 text-center'>
            
            Challenge by <a className='text-blue-700 hover:text-blue-400' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. <br />
            Coded by <a className='text-blue-700 hover:text-blue-400' href="https://github.com/samueldev900">Samuel Oliveira</a>.

       </footer>
    </div>
    )
  }
}

export default footer