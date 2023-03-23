import React from 'react'
// import pana from '../assets/pana.png'
// import chisom from '../assets/chisom.jpg'
// import maureen from '../assets/maureen.png'
// import lydia from '../assets/lydia.png'
// import annabel from '../assets/Annabel.jpg'

const AboutUs = () => {
  return (
    <div>
      <section>
        <main className='mt-5 p-4 p-md-5 mt-md-5'>
          <p className='text-uppercase headingText'>about us</p>
          <article className='mt-3'>
            <img
              className='panaImage'
              src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/pana.png'
              alt='pana'
            />
            <section className='gridd'>
              <p className='mainP mt-3'>
                Founded in 2023, our mission is to connect recycling companies
                and individuals who have plastic waste materials to recycle in
                an efficient and convenient way. Recycler is committed to
                providing the best possible service to our customers and
                partners. We strive to provide a safe and secure platform for
                our users, while also making sure that our users are able to
                make informed decisions regarding their plastic waste materials.{' '}
              </p>
              <img
                className='panaImage1'
                src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/pana.png'
                alt='pana'
              />
            </section>
          </article>
          <article>
            <p className='mainP mt-3'>
              We believe that through our platform, we can help contribute to a
              more sustainable future. By providing an efficient and convenient
              platform for recycling plastic materials, we are helping to reduce
              the amount of plastic waste that enters our landfills and oceans.
              In addition, we are helping to reduce the amount of energy and
              resources used to create new plastic products. At Recycler, we are
              committed to making a positive contribution to the environment and
              our local communities. We are proud to be part of the growing
              effort to reduce our global plastic waste footprint and to create
              a more sustainable world for future generations. We invite you to
              join us in our mission to provide a convenient and efficient way
              for people to recycle their plastic waste materials. Together, we
              can help create a better and more sustainable future.
            </p>
          </article>
        </main>
        <main className='mt-2 p-4 p-md-5 mt-md-n5'>
          <p className='text-uppercase headingText'>meet the team</p>
          <section className='mt-4 section-one mt-md-3'>
            <div className='teamImg text-center mt-md-3'>
              <img
                className='mt-3 mt-md-2'
                src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/maureen.png'
                alt='maureen'
              />
              <div className='p-3 div-one'>
                <h3 className='text-uppercase'>Anyanwu Maureen</h3>
                <p>Front-end Engineer</p>
              </div>
            </div>
            <div className='teamImg text-center mt-3'>
              <img
                className='mt-3 mt-md-2 teamimg'
                src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/chisom.jpg'
                alt='chisom'
              />
              <div className='p-3 div-one'>
                <h3 className='text-uppercase'>Chukwuma Chisom</h3>
                <p>Front-end Engineer</p>
              </div>
            </div>
            <div className='teamImg text-center mt-3'>
              <img
                className='mt-3 mt-md-2'
                src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/lydia.png'
                alt='lydia'
              />
              <div className='p-3 div-one'>
                <h3 className='text-uppercase'>Umeh chinonye lydia</h3>
                <p>Product Designer</p>
              </div>
            </div>
            <div className='teamImg text-center mt-3'>
              <img
                className='mt-3 mt-md-2 teamimg'
                src='https://storage.googleapis.com/bucket-assets_recycler-380620/quickstart-folder/Annabel.jpg'
                alt='annabel'
              />
              <div className='p-3 div-one'>
                <h3 className='text-uppercase'>Nnawuihe Annabel Adaeze</h3>
                <p>Back-end Engineer</p>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  )
}

export default AboutUs
