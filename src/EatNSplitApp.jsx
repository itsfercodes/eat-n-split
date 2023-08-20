/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import FriendsList from './FriendsList';
import AddFriendForm from './AddFriendForm';
import Button from './Button';
import SplitBillForm from './SplitBillForm';

function EatNSplitApp() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
        <Button>Add friend</Button>
      </div>
      <SplitBillForm />
    </div>
  );
}
export default EatNSplitApp;
