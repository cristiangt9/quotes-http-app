import classes from './CommentItem.module.css';

const CommentItem = ({comment}) => {
  return (
    <li className={classes.item}>
      <p>{comment.text}</p>
    </li>
  );
};

export default CommentItem;
