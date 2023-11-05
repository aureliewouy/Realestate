function PostAccepted(props) {
  return (
    <div className="accepted">
      <p>Annonce ajouté</p>
      <button className="create_btn" onClick={props.onClose}>
        Fermer
      </button>
    </div>
  );
}

export default PostAccepted;
