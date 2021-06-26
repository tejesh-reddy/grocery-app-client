import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BannerStyles } from './Banner.styles';

export type BannerProps = {
    images: string[]
}

export const Banner = ({images} : BannerProps) => {

    const classes = BannerStyles()
    // Slide show delay
    const delay = 5000

    let [index, setIndex] = useState(0)

    useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {};
      }, [index]);
    

    return (
        <div className={classes.root}>
            <div className={classes.slider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((image, id) => {
                    return <img key={`${id}img`} src={image} className={classes.image}/>
                })}
            </div>
        </div>
    )
};