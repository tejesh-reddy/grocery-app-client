import React from 'react';

export type BannerProps = {
    images: string[]
}

export const Banner = ({images} : BannerProps) => {

    return (
        <div>
            <div>
                {images.map((image, id) => {
                    <img src={image}/>
                })}
            </div>
        </div>
    )
};
