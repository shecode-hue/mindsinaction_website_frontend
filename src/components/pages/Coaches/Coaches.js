import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import './Coaches.css';
import axios from 'axios';

function emptyCache() {
  if ('caches' in window) {
    caches.keys().then((names) => {
      // Delete all the cache files
      names.forEach((name) => {
        caches.delete(name);
      });
    });

    // Makes sure the page reloads. Changes are only visible after you refresh.
    // window.location.reload(true);
  }
}

export default function Couches() {
  const [coachData, setCoachData] = useState([]);
  //fetching coaches from the database
  useEffect(() => {
    axios
      .get('https://mindsinaction.com.na/api/coach.php')
      .then((response) => {
        console.log(response);
        setCoachData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    emptyCache();
  }, []);

  return (
    <div id="coaches-body">
      <div className="coach-main">
        <div className="coach-title-header" data-aos="fade-up">
          <h1>Coaches</h1>
        </div>
        <div className="coach-cards">
          {coachData.map((x, i) => {
            return (
              <div key={i} className="coachx-card" data-aos="fade-up">
                <div className="center-hrz">
                  <div className="coach-card">
                    <div className="center-hrz">
                      <div className="coach-imgBx">
                        <img
                          src={
                            'https://mindsinaction.com.na/api/coach/' +
                            x.profile
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="coach-content">
                      <div className="coach-details">
                        <h2>
                          {x.name}
                          <br></br> <span>{x.position}</span>
                        </h2>
                        <div className="coach-data">
                          <div className="coach-left">
                            <div>
                              <h3>Education</h3>
                              <p>{x.qualification}</p>
                            </div>
                            <div>
                              <h3>Passion</h3>
                              <p>{x.passion}</p>
                            </div>
                          </div>
                          <div className="coach-middle">
                            <hr />
                          </div>
                          <div className="coach-right">
                            <div>
                              <h3>Experience</h3>
                              <p>{x.experience}</p>
                            </div>

                            <div>
                              <h3>Values</h3>
                              <p>{x.coach_values}</p>
                            </div>
                            <div>
                              <h3>Quote</h3>
                              <p>{x.quote}</p>
                              <h6>
                                <em>
                                  <span> ~ </span>
                                  {x.quoteby}
                                </em>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}