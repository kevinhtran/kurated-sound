import React from 'react'

const Home = () => (
  <div className='parent-container'>
    {/* This container which will contain services in circular cards with a logo symbolizing what kind of services aka 'Social Proof'*/}
    <div className='services-container'>
      <h3>Kurated Sound is a sound services business bringing to you live music through the sounds of modern-day equipment and tunes. Check out our services here.</h3>
      <p>Experienced and knowledgeable in music equipment and staging with zero failures.</p>
      <p>Proven events completion and success.</p>
    </div>
    {/* Benefits container. "What can we do for you>" */}
    <div>
      <p>Feel the music and turn your social gatherings into more than just the typical meet-up occassion.</p>
      <p>Not your ordinary bluetooth speaker or sound bar playing off your phone or TV.</p>
      <p> Weddings, outdoor birthday bash, baby showers, gender reveals, bachelor/bachelorette parties, DJs who are in need of equipment for their gigs, we do it all!</p>
    </div>
    {/* Features container. How can we do it for uou?*/}
    {/* This container will have 4 equal sized pictures that are clickable with text inside saying what it will direct you to: reservations, our tech, about us, contact us */}
    <div className='4pics-container'>
      <p>We use modern-day tech and equipment that is suited to your needs and expectations. Our equipments primarily consists of PA speakers, subwoofers, both wired and wireless microphones, mixers to help amplify and control the sound, and a DJ controller.</p>
      <ul>
        <p>There are particular brands that we use and they are considered some of the best in the current market today:</p>
        <li>Behringer</li>
        <li>Mackie</li>
        <li>QSC</li>
        <li>Turbosound</li>
        <li>Pioneer</li>
        <li>Shure</li>
        <li>Sennheiser</li>
      </ul>
      <p>Aside from our latest technologies, our best asset is our very own Kurated Sound co-founder and DJ, Khalil! Or better known as Kleos- his on-stage name. He is our personal DJ and can spin the dopest DJ set for your event - bringing to you the best and latest electronic music in today's lineup. </p>
    </div>
    {/* Call to Action Container */}
    <div>
      <div className='find-dj-container'>
        <p>If you are a performer or DJ, we’d love to assist and get in contact with you! Please <strong>contact us</strong></p>
      </div>
      <div>Don't forget to check us out on Yelp!</div>
    </div>
    {/* This container will be about how we run on multiple platforms such as youtube and spotify for you to listen to music and get in touch with our genre and curations. */}
    <div className='music-container'>
      I like music. Do you like music? Here are our youtube and spotify channels. :)
    </div>
  </div>
)

export default Home;