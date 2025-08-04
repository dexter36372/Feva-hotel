
import { useState } from 'react';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    if (username.trim() === '') {
      alert("Please enter a username");
      return;
    }

    try {
      await setDoc(doc(db, "users", username), {
        joinedAt: new Date().toISOString()
      });

      setIsLoggedIn(true);
    } catch (err) {
      console.error("Error saving to Firestore:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div style={styles.page}>
      {!isLoggedIn ? (
        <div style={styles.container}>
          <h1 style={styles.title}>YOUR ROOM KEY TO EVERYTHING…</h1>
          <p style={styles.subtitle}>
            View your past stays, book your next escape. All in one place.
          </p>
          <input
            type="text"
            placeholder="ROBLOX USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>LOGIN</button>
        </div>
      ) : (
        <div style={styles.container}>
          <h2 style={styles.loggedIn}>Welcome, {username}</h2>
          <div style={styles.bookingCard}>
            <img
              src="https://i.ibb.co/5nhm9xb/fareham.png"
              alt="Hotel"
              style={styles.hotelImage}
            />

            <div style={styles.dates}>
              <div style={styles.dateBlock}>
                <div style={styles.dateTitle}>CHECK-IN</div>
                <div style={styles.dateValue}>01 AUG 2025<br />19:00</div>
              </div>
              <div style={styles.dateBlock}>
                <div style={styles.dateTitle}>CHECK-OUT</div>
                <div style={styles.dateValue}>01 AUG 2025<br />20:00</div>
              </div>
            </div>

            <div style={styles.hotelNameBox}>
              <div style={styles.hotelName}>FAREHAM PARK HOTEL & COUNTRY CLUB</div>
            </div>

            <div style={styles.details}>
              <div style={styles.detail}>ROOM TYPE: <b>STANDARD ROOM</b></div>
              <div style={styles.detail}>ROOM NUMBER: <b>NOT ALLOCATED</b></div>
            </div>

            <a
              href="https://forms.gle/your-form"
              target="_blank"
              rel="noreferrer"
              style={styles.feedbackBtn}
            >
              <div>DID YOU ENJOY YOUR STAY?<br /><span style={styles.feedbackLink}>LET US KNOW</span></div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"TT Hoves", sans-serif',
    padding: '2rem'
  },
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '0.95rem',
    marginBottom: '2rem',
    color: '#ccc',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
    backgroundColor: '#000',
    border: 'none',
    borderBottom: '2px solid #fff',
    color: '#fff',
    marginBottom: '1rem',
    outline: 'none',
  },
  button: {
    padding: '12px',
    width: '100%',
    fontSize: '1rem',
    backgroundColor: '#000',
    color: '#fff',
    border: '2px solid #fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  loggedIn: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  bookingCard: {
    backgroundColor: '#fff',
    border: '10px solid #000',
    padding: '1rem',
    fontFamily: '"TT Hoves", sans-serif',
    textAlign: 'left',
    color: '#000',
    marginTop: '2rem',
  },
  hotelImage: {
    width: '100%',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
  dates: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  dateBlock: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '0.75rem 1rem',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    marginRight: '1rem',
  },
  dateTitle: {
    fontSize: '0.8rem',
    marginBottom: '0.25rem',
  },
  dateValue: {
    fontSize: '0.9rem',
  },
  hotelNameBox: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '0.5rem 1rem',
    margin: '1rem 0',
    display: 'inline-block',
  },
  hotelName: {
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  details: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  detail: {
    marginBottom: '0.5rem',
  },
  feedbackBtn: {
    display: 'block',
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#00c176',
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1rem',
    borderRadius: '4px',
  },
  feedbackLink: {
    textDecoration: 'underline',
  }
};
