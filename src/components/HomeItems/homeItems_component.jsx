import React, { Component } from "react";
import "./homeItems_styles.scss";

import HomePageItem from "./homePage-item-component";

class HomeItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

   sections = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ];
  

  render() {
    return (
      <div>
        <div className="home-wrapper">
            {
                this.sections.map(({id,imageUrl,title})=>{
                    return <HomePageItem key={id} BoxNumber={id} title={title} imageUrl={imageUrl} />
                })
            }
            {/* <HomePageItem key={this.sections[0].id} BoxNumber={this.sections[0].id} title={this.sections[0].title} imageUrl={this.sections[0].imageUrl} /> */}
        </div>
      </div>
    );
  }
}

export default HomeItems;
