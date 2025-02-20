// App.js
import React from 'react';
import Header from './components/Header';
import ListingsSection from './components/ListingsSection';
import Reminders from './components/Reminders';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <ListingsSection />
      <div className="widgets-container">
        <Reminders />
        <Calendar />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>REALTOR.AI</h1>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li><a href="#">Calendar</a></li>
          <li><a href="#">Insights</a></li>
          <li><a href="#">Logbook</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#" className="header-user-icon">👤</a></li>
        </ul>
      </nav>
    </header>
  );
}

// ListingCard.js
import React from 'react';
import './ListingCard.css';

function ListingCard({ image, location, address }) {
  return (
    <div className="listing-card">
      <img src={image} alt="Listing" className="listing-image" />
      <div className="listing-details">
        <h4>{location}</h4>
        <p>{address}</p>
      </div>
    </div>
  );
}


function ListingsSection() {
  const listings = [
    {
      image: 'https://via.placeholder.com/320x220',
      location: 'Bloomfield',
      address: '123 Random Street some address'
    },
    {
      image: 'https://via.placeholder.com/320x220',
      location: 'Bloomfield',
      address: '123 Random Street some address'
    },
    {
      image: 'https://via.placeholder.com/320x220',
      location: 'Bloomfield',
      address: '123 Random Street some address'
    },
  ];

  return (
    <section className="listings-section">
      <h2>See Our Newest Listings</h2>
      <div className="listings-container">
        {listings.map((listing, index) => (
          <ListingCard key={index} image={listing.image} location={listing.location} address={listing.address} />
        ))}
          <div className="listings-arrow">
                &gt;
            </div>
      </div>
    </section>
  );
}


function Reminders() {
  return (
    <div className="reminders">
      <h3>Important Reminders!</h3>
        <div className="reminders-content">
            <div>
                <p>Get this doneeeeee</p>
                <p className="reminders-due-date">Due on 05/02/2025</p>
            </div>
            <div className="reminders-dots">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>
        </div>
    </div>
  );
}


function Calendar() {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <h4>Calendar</h4>
        <div className="calendar-navigation">
          <span className="nav-arrow">&lt;</span>
          <span className="nav-arrow">&gt;</span>
        </div>
      </div>
      <p className="calendar-month">September 2021</p>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
          </tr>
          <tr>
            <td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
          </tr>
          <tr>
            <td>15</td><td>16</td><td>17</td><td><span className="today">18</span></td><td>19</td><td>20</td><td>21</td>
          </tr>
          <tr>
            <td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>
          </tr>
          <tr>
            <td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default mainscreen;
