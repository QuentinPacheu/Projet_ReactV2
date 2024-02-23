import React, { useState } from 'react';
import { useGetCommentsQuery, useCreateCommentMutation } from "../Services/API";
import styles from '../Style/style.module.css';


const CommentForm = ({ productId, createComment }) => {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createComment({ productId, username, comment })
            .unwrap()
            .then(() => {
                setUsername('');
                setComment('');
            })
            .catch(error => console.error("Error in creating comment:", error));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                type="text" 
                name="username" 
                placeholder="utilisateur" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                required 
                className={styles.inputField}
            />
            <textarea 
                name="comment" 
                placeholder="commentaire" 
                value={comment}
                onChange={e => setComment(e.target.value)}
                required 
                className={styles.textareaField}
            />
            <button 
                type="submit" 
                className={styles.submitButton}
            >
                Valider
            </button>
        </form>
    );
};

const CommentsList = ({ comments }) => {
    if (comments && comments.length > 0) {
        const reversedComments = comments.slice().reverse();
        return reversedComments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
                <h3>{comment.username}</h3>
                <p>{comment.comment}</p>
            </div>
        ));
    } else {
        return <div className={styles.noComments}>No comments available.</div>;
    }
};

export default function Comments({ productId }) {
    const { data: comments, isFetching } = useGetCommentsQuery(productId);
    const [createComment, { isLoading }] = useCreateCommentMutation();

    if (isFetching) {
        return <h1></h1>;
    }

    return (
        <div className={styles.commentsContainer}>
            <h2>Ajouter un commentaire</h2>
            <CommentForm productId={productId} createComment={createComment} />

            <h2>Commentaires</h2>
            <CommentsList comments={comments} />
        </div>
    );
}