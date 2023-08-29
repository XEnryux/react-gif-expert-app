import { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue ] = useState('');


//Esta configuracion de setState para el imput permite que se
//renderice lo que se va escribiendo 
//en el teclado mientras se esta escribiendo 
//dentro de la barra de busqueda

    const onImputChange = ({target}) => {   
        setInputValue(target.value)
    };


    // funcion ejecutada al enviar el formulario de la barra de busquesa
    // esta linea de codigo aniade lo escrito en la barra de busqueda al arreglo original
    // de "categories" de 'GifExpertApp
    const onSubmit = (event) => {
    
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
      

    }

    return (
        <form onSubmit= { onSubmit } aria-label = 'form'>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onImputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,

  }

