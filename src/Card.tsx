
import { Paper, Skeleton, Tooltip } from '@mui/material'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdAddShoppingCart, MdCompareArrows, MdOutlinePageview } from 'react-icons/md'
import { useCart } from "react-use-cart"
import classes from './ProductCard.module.css'

interface Props{
    id: string
    image: string
    title: string
    regularPrice: number
    salePrice: number
}
const ProductCard : React.FC<Props> = ({id, image, title, regularPrice, salePrice}) => {
    // States
    const [isImageLoaded, setIsImageLoaded] = React.useState(false)
    // Cart Configaration
    const { addItem } = useCart();
    // Image Load Handle
    const handleImageLoad = () => {
        setIsImageLoaded(true)
    }
    return (
        <React.Fragment>
            <Paper elevation={4} className={`${classes.root} group relative overflow-hidden mb-2 border border-gray-50`}>
                <a href={`/our-services/${id}`}>
                    <a>
                        { !isImageLoaded && <Skeleton variant="rectangular" width="100%" height="100%" />}
                        <img src={image} alt={title}   onLoad={handleImageLoad} className={`${isImageLoaded ? "opacity-1000" : "opacity-0"}`} placeholder="blur"  />
                    </a>
                </a>
                <div className='absolute left-0 right-0 -bottom-full opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all flex justify-center items-center'>
                    <Paper elevation={3} className='flex justify-around items-stretch'>
                        <Tooltip title="Add to cart" placement="top" arrow>
                            <div className='p-3' onClick={() => addItem({
                                id: id, 
                                name: title, 
                                price: salePrice 
                                        ? parseFloat(String(salePrice)) 
                                        : parseFloat(String(regularPrice)),
                                quantity: 1,
                                mainImage: image
                                })
                            }>
                                <MdAddShoppingCart size={20} />
                            </div>
                        </Tooltip>
                        <Tooltip title="Quick view" placement="top" arrow>
                            <div className='p-3'>
                                <MdOutlinePageview size={20} />
                            </div>
                        </Tooltip>
                        <Tooltip title="Compare" placement="top" arrow>
                            <div className='p-3'>
                                <MdCompareArrows size={20} />
                            </div>
                        </Tooltip>
                        <Tooltip title="Add to wishlist" placement="top" arrow>
                            <div className='p-3'>
                                <AiOutlineHeart size={20} />
                            </div>
                        </Tooltip>
                    </Paper>
                </div>
            </Paper>
            {/* <SiteHeadline small={true}>{title}</SiteHeadline> */}
            <div className='flex justify-center items-center'>
               {regularPrice && salePrice 
               ? <span className='block mr-5 text-gray-400'><del>$ {regularPrice}</del></span> 
               : <span className='block mr-5'>$ {regularPrice}</span>}
               {salePrice && <span className='block'>$ {salePrice}</span>}
            </div>
        </React.Fragment>
    )
}

export default ProductCard