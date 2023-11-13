import './style.css';
export default function Register(){
      return(
        <div id="register" className="container">
        <h1>Registrate</h1>
        <form>
            <div className="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div className="form-group">
                <label for="password">Confirmar Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div className="form-group">
                <label for="email">Correo:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label for="phone">Telefono:</label>
                <input type="phone" id="phone" name="phone" required/>
            </div>
            <button type="submit">Registrarse</button>
            <p>Ya tienes cuenta? <a href="/login"> Inicia sesion</a></p>
        </form>
    </div>
      );
}