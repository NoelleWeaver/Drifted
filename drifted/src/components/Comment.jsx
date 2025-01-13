
const Comment = ({comment, replies, currentUserId, deleteComment}) => {
    const createdAt = new Date(comment.createdAt).toLocaleDateString(); 
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736484287/user_du39us.png" />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{createdAt}</div>
                </div>
                <div className="comment-text">{comment.body}</div>
                <div className="comment-actions">
                    <div className="comment-action"><img src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472518/reply_l7tcp6.png" /></div>
                    <div className="comment-action" onClick={() => deleteComment(comment.id)}>Delete</div>
                </div>
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map(reply => (
                            <Comment comment={reply} key={reply.id} replies={[]} currentUserId={currentUserId} deleteComment={deleteComment} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment;