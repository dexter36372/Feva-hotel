import { useState } from 'react';

export default function Login({ setUsername, onLogin }) {
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input.trim()) {
      setUsername(input.trim());
      onLogin();
    } else {
      alert("Please enter a Roblox username");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>YOUR ROOM KEY TO EVERYTHING…</h1>
        <p style={styles.subtitle}>
          View your past stays, book your next escape. All in one place.
        </p>
        <input
          type="text"
          placeholder="ROBLOX USERNAME"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>LOGIN</button>
      </div>
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
    fontFamily: 'Arial, sans-serif',
    padding: '2rem'
  },
  container: {
    textAlign: 'center',
    maxWidth: '400px',
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
  }
};
