import { MdLogin } from 'react-icons/md';

export default function Login() {
    return (
        <div className="login__container">
            <div className="login__logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="login__form">
                <img src="/images/login-image.png" alt="" />

                <form>
                    <div className="input__box">
                        <input
                            type="text"
                            id="username"
                            autoComplete='off'
                            maxLength={26}
                            required
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input__box">
                        <input 
                            type="password" 
                            id="password"
                            autoComplete='off'
                            maxLength={26}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button>
                        <MdLogin />
                    </button>
                </form>
            </div>
        </div>
    );
}