import React, { useState } from 'react';
import images from '~/assets/images/default';
import styles from './Image.module.scss'
import classNames from 'classnames';

const Image = React.forwardRef(({src, alt, className, ref, type, ...props}) => {
    const [imageDefault, setImageDefault] = useState('')

    const handleErrorImage = ()=>{
        const formatType = String(type).toLowerCase()
        switch (formatType) {
            case 'logo_pc':
                setImageDefault(images.logo[0])
                break;
            case 'logo_phone':
                setImageDefault(images.logo[1])
                break;
            case 'other':
                setImageDefault(images.otherImage)
                break;
            default:
                // Nếu không truyền type thì mặc định là defaultImage cho product
                setImageDefault(images.noImage)
                break;
          }
    }

    return ( 
        <img 
            src={imageDefault || src} 
            alt={alt}
            className={classNames(styles.default_img, className)}
            ref={ref} 
            {...props} 
            onError={handleErrorImage}
            
        />
    );
});

export default Image;