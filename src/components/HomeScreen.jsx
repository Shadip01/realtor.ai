import { createSignal } from 'solid-js';
import styles from './homescreen.css`';

export default function HomePage() {
  try {
    const [listings] = createSignal([
      { location: "Bloomfield", address: "123 Random Street" },
      { location: "Bloomfield", address: "456 Another St" },
      { location: "Bloomfield", address: "789 Random Ave" }
    ]);

    const [reminders] = createSignal([
      { task: "Get this done", dueDate: "05/02/2025" }
    ]);

    const calendarData = [
      [1, 2, 3, 4, 5, 6],
      [8, 9, 10, 11, 12, 13],
      [15, 16, 17, 18, 19, 20],
      [22, 23, 24, 25, 26, 27],
      [29, 30, 31]
    ];

    return (
      <div class={styles.homePage}>
        <header class={styles.header}>
          <h1>REALTOR.AI</h1>
          <nav>
            <ul>
              <li>Calendar</li>
              <li>Insights</li>
              <li>Logbook</li>
              <li>Notifications</li>
            </ul>
          </nav>
        </header>

        <section class={styles.listings}>
          <h2>See Our Newest Listings</h2>
          {listings().map((listing, index) => (
            <div key={index} class={styles.listing}>
              <h3>{listing.location}</h3>
              <p>{listing.address}</p>
            </div>
          ))}
        </section>

        <section class={styles.reminders}>
          <h2>Important Reminders!</h2>
          {reminders().map((reminder, index) => (
            <div key={index} class={styles.reminder}>
              <p>{reminder.task}</p>
              <p>Due on {reminder.dueDate}</p>
            </div>
          ))}
        </section>

        <section class={styles.calendar}>
          <h2>September 2021</h2>
          <table>
            <thead>
              <tr>
                <th>SAN MON</th>
                <th>YUE WED</th>
                <th>THU FRI</th>
                <th>SAT</th>
              </tr>
            </thead>
            <tbody>
              {calendarData.map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((day, dayIndex) => (
                    <td key={dayIndex}>{day}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error loading HomePage:', error);
    return <div>There was an error loading the page</div>;
  }
}