import './style.css';
export default function Login(){
    return(
      <div id="login" className="container">
        <h1>Login</h1>
        <form>
            <div className="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Ingresar</button>
            
            <p><a href="#">Olvidaste tu contraseña?</a></p>
            <p>Eres nuevo? <a href="/register">Registrate</a></p>
        </form>
    </div>
    );
}




 
