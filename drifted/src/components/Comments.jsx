import {useState, useEffect} from "react"
import {getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi} from '../api'
import Comment from './Comment'
import CommentForm from './CommentForm'
const Comments = ({currentUserId}) => {
    const [comments, setComments] = useState([]);
    const rootComments = comments.filter((comments) => comments.parentId === null)
    const getReplies = commentId => {
        return comments.filter(comment => comment.parentId === commentId).sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    }
    const addComment = (text, parentId) => {
        console.log('addComment', text, parentId)
        createCommentApi(text, parentId).then(comment => {
            setComments([comment, ...comments])
        })
    }
    const deleteComment = (commentId) => {
        deleteCommentApi(commentId).then(() => {
            setComments(comments.filter(comment => comment.id!== commentId))
        })
    }
    useEffect(() => {
        getCommentsApi().then(data => {
            setComments(data);
        })
    }, [])
    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comments-container">
                {rootComments.map(rootComment => (
                    <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} currentUserId={currentUserId} deleteComment={deleteComment} />
                ))}
            </div>
            <div className="comment-form-title">Write a message</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
        </div>
    )
}

export default Comments;