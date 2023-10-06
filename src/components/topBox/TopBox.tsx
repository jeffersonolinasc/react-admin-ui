import './topbox.scss'
import { topDealUsers } from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {
          topDealUsers.map((user) => (
            <div key={user.id} className="listItem">

              <div className="user">
                <img src={user.img} alt="Perfil" />
                <div className="userTexts">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
              </div>
              <div className="amount">{user.amount}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TopBox