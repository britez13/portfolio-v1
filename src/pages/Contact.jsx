import React from 'react'

const Contact = () => {

  
  const handleSubmit = (e) => {
    e.preventDefault()



  }

  return (
    <main className='contact'>
      <h1>Contact</h1>
      <form>
        <input type="email" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button type="submit" onSubmit={handleSubmit} >Send Message</button>
      </form>
    </main>
  )
}

export default Contact