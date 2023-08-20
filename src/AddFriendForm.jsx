/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import Button from './Button';

function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState(`https://i.pravatar.cc/48`);

  function handleSubmit(e) {
    if (!name || !url) return;

    const id = crypto.randomUUID();
    e.preventDefault();
    const newFriend = {
      id,
      name,
      image: `${url}?=${id}`,
      balance: 0
    };
    onAddFriend(newFriend);
    setName('');
    setUrl(`https://i.pravatar.cc/48`);
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
