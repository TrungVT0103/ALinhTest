import Dialog from "@mui/material/Dialog"
import { ItemDetail } from "../../Mock"
import styles from '../../Page/Page.module.scss'

interface Props {
    closeAddMoreDialog: () => void
}

const AddMoreDialog = (props: Props) => {
    const {closeAddMoreDialog} = props

    // const 
    return (
        <Dialog PaperProps={{className: styles.addMoreDialog}} open={true}>
            <div className="d-flex justify-content-end">
                <div style={{cursor: 'pointer'}} onClick={closeAddMoreDialog}>X</div>
            </div>
            <h3>Xin chào</h3>
            <h5>Đăng nhập hoặc Tạo tài khoản</h5>
        </Dialog>
    )
}

export default AddMoreDialog