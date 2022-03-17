import React, { useState } from 'react'

export const GifExpertApp = () => {

    // A menos que hagamos una lista que no reciba más parametros y no se necesite renderizar nuevamente, esto no se hace
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories([...categories, 'Jujutsu Kaisen']);
        // Callback del useState en categories
        // setCategories(c => [...categories, 'Jujutsu Kaisen']);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {/* No debemos colocar el valor de key con el indice, ya que es muy volatil */}
                {
                    categories.map(c => {
                        return <li key={c}>{c}</li>;
                    })
                }
            </ol>
        </>
    )
};

