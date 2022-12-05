import Dialog from "@mui/material/Dialog"
import { ItemDetail } from "../../Mock"
import styles from '../../Page/Page.module.scss'

interface Props {
    closeDialog: () => void
    openAddMoreDialog: () => void
}

const ItemDetailDialog = (props: Props) => {
    let itemDetail = ItemDetail
    const {closeDialog, openAddMoreDialog} = props

    // const 
    return (
        <Dialog PaperProps={{className: styles.dialog}} open={true}>
            <div className="d-flex justify-content-end mb-3">
                <div style={{cursor: 'pointer'}} onClick={closeDialog}>X</div>
            </div>
            <div className="d-flex">
                <div className={styles.wrapAvatar}>
                    <img className={styles.avatar} src={itemDetail.img} alt="" />
                </div>
                <div className="mx-4">
                    <div className={styles.dialog_title}>
                        <h4>{itemDetail.title}</h4>
                        <h3 className={styles.dialog_price}>{itemDetail.price} đ</h3>
                    </div>
                    <div className={styles.dialog_description}>
                        <button onClick={openAddMoreDialog} style={{width: '220px'}} type="button" className="btn btn-success">+ Thêm</button>
                        <div className="mt-3">Thương hiệu: {itemDetail.branch}</div>
                        <div>Xuất xứ: {itemDetail.madeIn}</div>
                        <div className="mt-3">{itemDetail.information}</div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default ItemDetailDialog