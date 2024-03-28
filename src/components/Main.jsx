import { useEffect, useState } from 'react';
import './styles/main.scss'
import { makeWheel } from '../utils/makeWheel';

function Main(){
  const colorObj = {
    red: '#85181B',
    yellow: '#FFD600',
    violet: '#1B1F4A',
  }

  const [control, setControl] = useState('manual');
  const [wheel, setWheel] = useState([]);
  const [risk, setRisk] = useState('medium');
  const [segment, setSegment] = useState(8);

  const initializeWheel = () => {
    return makeWheel(segment, risk, colorObj);
  }

  useEffect(() => {
    const wheelValue = initializeWheel();
    setWheel(wheelValue?.wheelData)
  }, []);

  return (
    <div className='main-area'>
      <div className="game-area">
        <div className="sidebar">
          <div className="main-control">
            <div className="control">
              <div className="auto-menu">
                <div className="btn">
                  <button onClick={() => setControl('manual')} className={control === 'manual' ? 'manual active' : 'manual'}>Manual</button>
                  <button onClick={() => setControl('auto')} className={control === 'auto' ? 'auto active' : 'auto'}>Auto</button>
                </div>
              </div>
            </div>
            <div className="form">
              <div className="form-group">
                <div className="label">
                  <span>Bet Amount</span>
                  <span>343$</span>
                </div>
                <div className="input-group">
                  <input type="number" />
                  <div className="multi">
                    <button><span>1/2</span></button>
                    <button><span>2x</span></button>
                  </div>
                </div>
                <div className="label">
                  <span>Risk</span>
                </div>
                <div className="input-group">
                  <select name="" id="" value={risk} onChange={(e) => setRisk(e.target.value)}>
                    <option value="Law">Law</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="label">
                  <span>Segment</span>
                </div>
                <div className="input-group">
                  <select name="" value={segment} onChange={(e) => setSegment(parseInt(e.target.value))} id="">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                </div>               
                {
                  control === 'auto' && <>
                <div className="label">
                  <span>Number of bets</span>
                </div>
                <div className="input-group">
                  <input type="number" />
                </div>
                  </>
                }
              </div>
            </div>
            <div className="form">
              <div className="form-group">
                {
                  control === 'auto' 
                  ? <button className='bet'>Auto Start</button> 
                  : <button className='bet'>Bet</button>
                }
                
              </div>
            </div>
          </div>
        </div>
        <div className="gamebar">
          <div className="gamebar-container">
            <span className='marker'><img src="./pointer.svg" alt="arrow" /></span>
            <div className="temp">
              <div className="wheel">
                {
                  [...wheel]
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;