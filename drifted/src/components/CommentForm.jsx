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
            <input className="comment-form-input" placeholder="Write a Message..." value={text} onChange={(e) => setText(e.target.value)} />
            <button className="comment-form-button" disabled={isInputDisabled}>{submitLabel}<img src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472516/up-arrow_r5a38t.png" /></button>
        </form>
    )
}

export default CommentForm;