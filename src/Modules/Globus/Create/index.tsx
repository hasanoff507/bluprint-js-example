import React from "react";
import { Button, Dialog, Intent } from "@blueprintjs/core";


type Props = {
    isOpen:boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleClose:any
};

const Create: React.FC<Props> = ({isOpen,setIsOpen,handleClose }: Props) => {


    return (
        <div>
            <Dialog
                isOpen={isOpen}
                onClose={handleClose}
                title="Create a new project"
                icon="plus"
                // intent={Intent.PRIMARY}
            >
                <div className="bp3-dialog-body">
                    <p>This is an example dialog created with Blueprint.js!</p>
                    <p>You can add any content you like.</p>
                </div>
                <div className="bp3-dialog-footer">
                    <div className="bp3-dialog-footer-actions">
                        <Button onClick={handleClose}>Close</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Create;