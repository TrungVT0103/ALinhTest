import React from "react"
import { IPageItem } from "../Interface"
import styles from '../Page/Page.module.scss'

interface Props {
    item: IPageItem
    openItemDetail: () => void
}
const PageItem = (props: Props) => {
    const {item, openItemDetail} = props
    
    return (
        <div className={styles.item} onClick={openItemDetail}>
            <img src={item.img} className={styles.item_img} alt="" />
            <div>{item.price}</div>
            <div>{item.description}</div>
        </div>
    )
}

export default PageItem