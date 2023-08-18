import "./Header.css";

function Header (){
    return <header className="header">
        <img src="/img/HeaderHeader_total.png" alt="img_header" />
        <ul>
            <li><a href="#">Hugo</a></li>
            <li><a href="#">Mis trabajos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Formulario</a></li>
            <li><a href="#">Ejemplo</a></li>
        </ul>   
    </header>
};

export default Header;