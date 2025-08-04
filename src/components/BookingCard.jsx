export default function BookingCard({ username }) {
  return (
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
            <div style={styles.dateValue}>01 AUG 2025<br/>19:00</div>
          </div>
          <div style={styles.dateBlock}>
            <div style={styles.dateTitle}>CHECK-OUT</div>
            <div style={styles.dateValue}>01 AUG 2025<br/>20:00</div>
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
          href="https://forms.gle/oTFCo7TRf4gJjYge7"
          target="_blank"
          rel="noreferrer"
          style={styles.feedbackBtn}
        >
          <div>DID YOU ENJOY YOUR STAY?<br/><span style={styles.feedbackLink}>LET US KNOW</span></div>
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    backgroundColor: '#000',
    minHeight: '100vh',
  },
  loggedIn: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  }
};
