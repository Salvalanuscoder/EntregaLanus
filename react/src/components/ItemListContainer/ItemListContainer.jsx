import './ItemListContainer.css';

const ItemListContainer = ({saludo}) => {

    return (
        <div className="catalogo-contenedor">
            <h2>Item List Container</h2>
            <hr />

            <p>hello world</p>
            <p>{saludo}</p>
           
            {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
    
        </div>
    )
}

export default ItemListContainer