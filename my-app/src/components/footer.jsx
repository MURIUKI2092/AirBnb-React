import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
  return (
    <div  className='footer'>
       <div className='footerDetails'>
        <div  className='details1'>
        <section className='Logo'>
        <h2>AirBnb<sup>ke</sup></h2>
      </section>
        </div>
        <div  className='details2'>
        <h2>Our Services</h2>
          <ul class="footer-links">
          <li className='footerListItem'>Host a house</li>
              <li className='footerListItem'>book a house</li>
              

            </ul>
        </div>
        <div  className='details3'>
        <h2>Help & Support</h2>
         <ul class="footer-links">
         <li className='footerListItem'>talk to us</li>
              <li className='footerListItem'>share your moment</li>
             

            </ul> 
        </div>
        
      </div>
      <div className='otherFooterDetails'>
        <div className='copyWriteInfo'>
          <p>Copyright &copy;{new Date().getFullYear()} All Rights Reserved by </p>

        </div>
        <div className='socialsInfo'>
        <FacebookIcon className='footerIcon'/>
        <InstagramIcon className='footerIcon'/>
        <PinterestIcon className='footerIcon'/>
        <TwitterIcon className='footerIcon'/>
        <WhatsAppIcon  className='footerIcon'/>

        </div>
      </div>
    </div>
  )
}
