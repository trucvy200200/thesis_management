import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ModalGuide from "./ModalGuide"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Link } from "react-router-dom"
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const ModalViewPdf = (props) => {

    return (
        <div id="view-hotel">
            <BootstrapDialog
                onClose={props.handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.open}
                fullScreen={true}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Báo cáo chi tiết
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <div className="btn">
                        <Button variant="outlined" color="primary"
                            sx={{ height: "fit-content", fontWeight: "bold" }}>
                            <FileDownloadOutlinedIcon size={16} />
                            <Link to={'src/public/1702483222078-987251743-2.pdf'} target="_blank" download>Download</Link>
                        </Button>
                    </div>
                    <ModalGuide file={props.file} />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div >
    );
}

export default ModalViewPdf