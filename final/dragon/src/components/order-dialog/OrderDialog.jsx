import { useState, useRef } from 'react';
import Button from '../button';
import { useToast } from '../toast-provider/ToastProvider';

import {
  BUTTON_TYPE,
  SUBMIT_TYPE,
  BUTTON_VISUAL,
  LINK_VISUAL,
  PATH_ORDERS,
} from '../../data/const';
import './OrderDialog.css';

export function OrderDialog({ dialogRef, merchKey, setPage, addOrder }) {
  const PREFIX = 'order-dialog';

  const wrapperRef = useRef();
  const { showToast } = useToast();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingAddressError, setShippingAddressError] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [isSameAddress, setIsSameAddress] = useState(false);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email can not be empty');
      return false;
    }
    if (!email.includes('@')) {
      setEmailError('Email must contain "@"');
      return false;
    }

    setEmailError('');
    return true;
  };

  const handleShippingAddressChange = e => {
    setShippingAddress(e.target.value);
  };

  const validateShippingAddress = () => {
    if (!shippingAddress) {
      setShippingAddressError('Address can not be empty');
      return false;
    }

    setShippingAddressError('');
    return true;
  };

  const handleBillingAddressChange = e => {
    setBillingAddress(e.target.value);
  };

  const handleCheckChange = e => {
    setIsSameAddress(e.target.checked);
  };

  const onClickDialog = () => {
    closeDialog();
  };

  const onClickWrapper = e => {
    e.stopPropagation();
  };

  const onClickSubmitBtn = e => {
    e.preventDefault(); // to avoid form action (sending request)

    if (validateEmail() && validateShippingAddress()) {
      addOrder(merchKey, email, shippingAddress, getBillingAddress(), Date.now());
      closeDialog();

      const onClickToastLink = () => {
        setPage(PATH_ORDERS);
      };
      showToast(
        <>
          <p>Ordered Successfully!</p>
          <p>
            See your orders
            <Button
              content='HERE'
              visual={LINK_VISUAL}
              onClick={onClickToastLink}
            />
          </p>
        </>
      );
    }
  };

  const onClickCloseBtn = () => {
    closeDialog();
  };

  const closeDialog = () => {
    dialogRef.current.close();

    // reset dialog data
    setEmail('');
    setEmailError('');
    setShippingAddress('');
    setShippingAddressError('');
  };

  const getBillingAddress = () => {
    return isSameAddress ? shippingAddress : billingAddress;
  }

  return (
    <dialog className={PREFIX} ref={dialogRef} onClick={onClickDialog}>
      <div className={`${PREFIX}__wrapper`} ref={wrapperRef} onClick={onClickWrapper}>
        <h3>Make an Order Now!</h3>
        <form
          className={`${PREFIX}__form`}
          action='/order'
          method='POST'
          id='order-form'
        >
          <input autoFocus/>
          {/* email */}
          <label className={`${PREFIX}__description required`} htmlFor='email'>Email</label>
          <input
            className={`${PREFIX}__operation email`}
            type='text'
            name='email'
            id='email'
            value={email}
            placeholder='123@abc.com'
            onChange={handleEmailChange}
            onBlur={validateEmail}
          />
          {emailError && <span className={`${PREFIX}__error email`}>{emailError}</span>}
          {/* shpping address */}
          <label className={`${PREFIX}__description required`} htmlFor='address'>Shipping Address</label>
          <input
            className={`${PREFIX}__operation address`}
            type='text'
            name='address'
            id='address'
            value={shippingAddress}
            onChange={handleShippingAddressChange}
            onBlur={validateShippingAddress}
          />
          {shippingAddressError && <span className={`${PREFIX}__error address`}>{shippingAddressError}</span>}
          {/* billing address */}
          <label className={`${PREFIX}__description`} htmlFor='billing-address'>Billing Address</label>
            <div>
              <input type='checkbox' name='same-address' id='same-address' onChange={handleCheckChange} />
              <label htmlFor='same-address'>Same as shipping address</label>
            </div>
          <input
            className={`${PREFIX}__operation billing-address`}
            type='text'
            name='billing-address'
            id='billing-address'
            value={getBillingAddress()}
            disabled={isSameAddress}
            onChange={handleBillingAddressChange}
          />
        </form>
      <div className={`${PREFIX}__btns`}>
        <Button
          content='Submit'
          type={SUBMIT_TYPE}
          visual={LINK_VISUAL}
          form='order-form'
          onClick={onClickSubmitBtn}
        />
        <Button
          content='Close'
          type={BUTTON_TYPE}
          visual={BUTTON_VISUAL}
          onClick={onClickCloseBtn}
        />
      </div>
      </div>
    </dialog>
  );
}
