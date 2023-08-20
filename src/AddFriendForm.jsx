/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import Button from './Button';

function AddFriendForm({ onAddFriend, friends, onToggleFriendForm }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState(`https://i.pravatar.cc/48?u=${Date.now()}`);

  function handleSubmit(e) {
    if (!name) return;
    e.preventDefault();
    const newFriend = {
      id: Date.now(),
      name,
      image: url,
      balance: 0
    };
    onAddFriend([...friends, newFriend]);
    setName('');
    setUrl(`https://i.pravatar.cc/48?u=${Date.now()}`);
    onToggleFriendForm(false);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧍Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️ Image URL</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}
export default AddFriendForm;
