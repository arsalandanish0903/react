import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
export default function RTE({name, control, label, defaultValue = ''}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
        <Controller
        name={name || 'content'}
        control={control}
        defaultValue={defaultValue}
        render={({field: {onChange}}) => (
            <Editor 
            initialValue={defaultValue}
            init={{
                height: 500,
                menubar: true,
                plugins:[
                    'advlist autolink lists link image charmap print preview anchor',
                ],
                toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright align',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px',
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}
