import React from 'react'
import '../styles/SlideDrawer.css'

const SlideDrawer = ({show, children}) => {
   let drawerClasses = 'side-drawer'
   if(show) drawerClasses = 'side-drawer open';
   return (
      <div className={drawerClasses}>
         {children}
      </div>
    )
}

export default SlideDrawer
