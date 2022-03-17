import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(c => {
                        return <li key={c}>{c}</li>;
                    })
                }
            </ol>
        </>
    )
};

