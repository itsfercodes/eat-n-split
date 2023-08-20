/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import FriendsList from './FriendsList';
import AddFriendForm from './AddFriendForm';
import Button from './Button';
import SplitBillForm from './SplitBillForm';

function EatNSplitApp() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <AddFriendForm />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
      <SplitBillForm />
    </div>
  );
}
export default EatNSplitApp;
