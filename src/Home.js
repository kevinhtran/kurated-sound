import React from 'react'

const Home = () => (
  <div className='parent-container'>
    {/* This container which will contain services in circular cards with a logo symbolizing what kind of services */}
    <div className='services-container'>
      <h3>Kurated Sound is a sound services business bringing to you live music through the sounds of modern-day equipment and tunes. Check out our services here.</h3>
    </div>
    {/* This container will have 4 equal sized pictures that are clickable with text inside saying what it will direct you to: reservations, our tech, about us, contact us */}
    <div className='4pics-container'>
      Imagine 4 equal-sized pictures here that are clickable. *click click click click*
    </div>
    {/* This container will be about DJs and how we want to work with them */}
    <div className='find-dj-container'>
      Hey DJ! We want to work with you. Contact us. :)
    </div>
    {/* This container will be about how we run on multiple platforms such as youtube and spotify for you to listen to music and get in touch with our genre and curations. */}
    <div className='music-container'>
      I like music. Do you like music? Here are our youtube and spotify channels.
    </div>
  </div>
)

export default Home;