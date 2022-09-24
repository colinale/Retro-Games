import React from 'react';

const ItemPage = () => {

    return (
        <section className="item-details-sec selection-div">
        <div className="title-bar">
          <div className="blk-bars-div">
            <div className="blk-bar" />
            <div className="blk-bar" />
            <div className="blk-bar" />
            <div className="blk-bar" />
          </div>
          <a href>Item Viewer</a>
        </div>
        <div className="item-details-container">
          <div className="item-top-info">
            <div className="item-img">
              <img src="https://cdn.webshopapp.com/shops/21359/files/11424629/sims-2-for-playstation-2-ps2-platinum-dutch.jpg" />
            </div>
            <div className="item-bio">
              <h1>The Sims 2: Pets</h1>
              <h2>Playstation 2</h2>
              <p>The Sims 2: Pets is the fourth expansion pack released for The Sims 2, 
                released on October 18, 2006 for U.S. and Canada, October 20, 2006 for 
                EU, and October 26, 2006 for Australia. The main concept of this expansion 
                pack is to allow the player to own and raise pets. The Sims 2: Pets is a 
                remake of The Sims: Unleashed, which was a bestseller at that time. The 
                expansion pack is also included with The Sims 2: Fun with Pets Collection.</p>
              <h3>Rating</h3>
              <h4>7.4/10</h4>
              <h3>Year of realease</h3>
              <h4>2006</h4>
              <a href="https://www.ebay.com/itm/394247542249?hash=item5bcafc15e9:g:DiwAAOSwknBjJh~X&amdata=enc%3AAQAHAAAAoCHoar7L7I%2FBq2BGZmywbPi2B1xqCoD7tefH4hNzBvqijtHnnUbbIdy8wN9HY0j1yvWzChpTDR3c132AMIIlb80UpqbeU2miP5ykYgC303kBTIHJa9K1cRyqPHEVvvROW8aie88V4yze68i3Ahj4u38iuwIEdUOiwdE%2BxfVzvmaFEf8qigtmqnkJgAaTkTPtqTd6pldi4ma5zp9zoAYrACE%3D%7Ctkp%3ABk9SR5yyk9XpYA" target="_blank">
                Buy online</a>
            </div>
          </div>
          <div className="item-bottom-info">
            <div className="item-img">
              <img src="https://i.ytimg.com/vi/xKrBteGU5oE/maxresdefault.jpg" />
            </div>
            <div className="item-vid">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/1j-4RE0VTks" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      </section>
    );
};

export default ItemPage;