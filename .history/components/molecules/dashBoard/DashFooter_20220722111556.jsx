import React from 'react'

export const DashFooter = () => {
  return (
    <footer className="dashFooter">
        <nav className="dashFooter__nav">
            <ul  className="dashFooter__nav--list">
                <li className="dashFooter__list--item"><button><img src="img/home.png" alt="home"/></button></li>
                <li className="dashFooter__list--item"><button><img src="img/notification.png" alt="notification"/></button></li>
                <li className="dashFooter__list--item"><div className="dashFooter__list--blueC"><button><img src="img/welcomeimg.png" alt="brandlogo"/></button></div></li>
                <li className="dashFooter__list--item"><button><img src="img/time.png" alt="time"/></button></li>
                <li className="dashFooter__list--item"><button><img src="img/account.png" alt="account"/></button></li>
            </ul>
        </nav>
    </footer>
  )
}
