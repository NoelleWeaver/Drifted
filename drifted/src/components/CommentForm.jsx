import {useState} from "react";

const CommentForm = ({handleSubmit, submitLabel}) => {
    const [text, setText] = useState('')
    const isInputDisabled = text.length === 0
    const onSubmit = event => {
        event.preventDefault()
        handleSubmit(text)
        setText("")
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="comment-form-input" value={text} onChange={(e) => setText(e.target.value)} />
            <button ClassName="comment-form-button" disabled={isInputDisabled}>{submitLabel}</button>
        </form>
    )
}

export default CommentForm;