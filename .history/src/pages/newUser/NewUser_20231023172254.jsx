import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">創建新使用者</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>姓名</label>
          <input type="text" placeholder="劉美美" />
        </div>
        <div className="newUserItem">
          <label>電子信箱</label>
          <input type="email" placeholder="admin@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>密碼</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>手機號碼</label>
          <input type="text" placeholder="0912-345-678" />
        </div>
        <div className="newUserItem">
          <label>地址</label>
          <input type="text" placeholder="台南市歸仁區長大路1號" />
        </div>
        <div className="newUserItem">
          <label>性別</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">男生</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">女生</label>
          </div>
        </div>
        <button className="newUserButton">建立</button>
      </form>
    </div>
  );
}
