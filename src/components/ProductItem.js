import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import React, { useState } from 'react';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref){
    return <Slide direction='up' ref={ref} {...props} />;
})

const ProductItem = ({ data }) =>{
    const dialogData = data['product-dialog'];

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div style={{ display: "block" }}>
            <img 
                src={data.url} 
                alt='...' 
                style={{ maxWidth: "300px" }} 
                onClick={handleClickOpen}
            />
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: "10px 0 5px 0", fontWeight: "bold", fontSize: "25px" }}>{data.title}</h2>
                <div style={{ fontSize: "15px" }}>{data.subtitle}</div>
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{data.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {dialogData.explanation}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default ProductItem;