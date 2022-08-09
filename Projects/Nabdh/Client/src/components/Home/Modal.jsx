import React from "react";
import LandingButton from "../Reusable-components/Button";
import { StyledModal } from "../../styles/Home";

/* URL => https://nabdh.alwaysdata.net/event/create.php
Required Data => author,title,description,
                    image,raised,goal,startingDate,
                    endingDate,idCard,associationLicence,image
 */
const Modal = ({ setIsOpen }) => {
	return (
		<StyledModal>
			<div className='darkBG' onClick={() => setIsOpen(false)} />
			<div className='centered'>
				<div className='modal'>
					<div className='modalHeader'>
						<h5 className='heading'>أضف حدتا</h5>
						<form>
							<input type='text' id='title' name='title' placeholder='add title' />
							<input type='text' id='author' name='author' placeholder='add author' />
							<input
								type='text'
								id='description'
								name='description'
								placeholder='add description'
							/>
							<input type='text' id='image' name='image' placeholder='add image' />
							<input
								type='text'
								id='raised'
								name='raised'
								placeholder='add raised money'
							/>
							<input type='text' id='goal' name='goal' placeholder='add goal money' />
							<input
								type='date'
								id='startingDate'
								name='startingDate'
								placeholder='add startingDate'
							/>
							<input
								type='date'
								id='endingDate'
								name='endingDate'
								placeholder='add endingDate'
							/>
							<LandingButton name={"اضف"} />
						</form>
					</div>
					<button className='closeBtn' onClick={() => setIsOpen(false)}>
						<i className='fa-solid fa-circle-xmark'> close</i>
					</button>
				</div>
			</div>
		</StyledModal>
	);
};

export default Modal;
