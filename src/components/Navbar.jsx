import './styles/navbar.scss'

function NavBar(){
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='flex'>
          <div className="title">
            <h2>Bet App</h2>
          </div>
          <div className="amount">
            <div className="amount-wallet">
              <input type="text" readOnly />
              <button>withdrow</button>
            </div>
          </div>
          <div className="user">
            <img src="./cafe.svg" alt="" />
            <span>Paulo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;