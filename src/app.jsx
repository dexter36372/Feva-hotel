import { useState } from 'react';
import Login from './components/Login';
import BookingCard from './components/BookingCard';
import Admin from './components/Admin';

export default function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {!isLoggedIn ? (
        <Login setUsername={setUsername} onLogin={() => setIsLoggedIn(true)} />
      ) : username.toLowerCase() === "admin-access" ? (
        <Admin />
      ) : (
        <BookingCard username={username} />
      )}
    </div>
  );
}
