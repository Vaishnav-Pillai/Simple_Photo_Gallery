import React from 'react'
import image1 from './Images/image1.jpeg';
import image2 from './Images/image2.jpeg';
import image3 from './Images/image3.jpeg';
import image4 from './Images/image4.jpeg';
import image5 from './Images/image5.jpeg';
import image6 from './Images/image6.jpeg';
import image7 from './Images/image7.jpeg';
import image8 from './Images/image8.jpeg';
import image9 from './Images/image9.jpeg';
import image10 from './Images/image10.jpeg';

function Body() {
  return (
    <div className="container">
        <center><h3 className='my-4' style={{fontFamily: 'fantasy', letterSpacing: '1px', wordSpacing: '2px', fontSize: '40px', textDecoration: 'underline', color: 'white'}}>Simple Photo Gallery</h3></center>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{border: '4px ridge white'}}>
            <div className="carousel-indicators" >
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active mx-3 my-4" aria-current="true" aria-label="Slide 1"><img src={image1} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" className="mx-3 my-4" aria-label="Slide 2"><img src={image2} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" className="mx-3 my-4" aria-label="Slide 3"><img src={image3} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" className="mx-3 my-4" aria-label="Slide 4"><img src={image4} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="4" className="mx-3 my-4" aria-label="Slide 5"><img src={image5} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="5" className="mx-3 my-4" aria-label="Slide 6"><img src={image6} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="6" className="mx-3 my-4" aria-label="Slide 7"><img src={image7} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="7" className="mx-3 my-4" aria-label="Slide 8"><img src={image8} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="8" className="mx-3 my-4" aria-label="Slide 9"><img src={image9} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="9" className="mx-3 my-4" aria-label="Slide 10"><img src={image10} className="d-block" style={{height: '50px', width: '60px', marginBottom:'15px', border: '2px solid black'}} alt="..."/></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={image4} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={image5} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={image6} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={image7} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={image8} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={image9} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={image10} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Body
