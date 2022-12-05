import React, { useState } from "react"
import styles from './Page.module.scss'
import avatar from '../Assets/img.png'
import PageItem from "../Component/PageItem"
import { ListItem } from "../Mock"
import { Dialog } from "@mui/material"
import ItemDetailDialog from "./ItemDetailDialog"
import AddMoreDialog from "./AddMoreDialog"
const Page = () => {
    let listItem = ListItem
    const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
    const [isOpenAddMoreDialog, setIsOpenAddMoreDialog] = useState<boolean>(false)
    
    const openItemDetail = () => {
        setIsOpenDialog(true)
    }

    const closeDialog = () => {
        setIsOpenDialog(false)
    }

    const openAddMoreDialog = () => {
        setIsOpenAddMoreDialog(true)
    }

    const closeAddMoreDialog = () => {
        setIsOpenAddMoreDialog(false)
    }
    
    return (
        <div>
            <div className={styles.listItem}>
                {listItem.map((item) => (
                    <PageItem openItemDetail={openItemDetail} item={item} key={item.id} />
                ))}
            </div>
            {isOpenDialog && <ItemDetailDialog openAddMoreDialog={openAddMoreDialog} closeDialog={closeDialog} /> }
            {isOpenAddMoreDialog && <AddMoreDialog closeAddMoreDialog={closeAddMoreDialog} /> }
        </div>
        
    )
}

export default Page