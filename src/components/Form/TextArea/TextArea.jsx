import React from 'react';
import './TextArea.scss'

export const TextArea = ({
                             id,
                             placeholder,
                             errors,
                             name,
                             register,
                             options
                         }) => {
    return (
        <>
            <label>
                 <textarea className='text-area'
                           id={id}
                           name={name}
                           placeholder={placeholder}
                           {...register(name, options)}>
             </textarea>
                <p className='error'>{errors}</p>
            </label>


        </>
    );
};
