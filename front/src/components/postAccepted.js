function PostAccepted(props) {
  return (
    <div className="validate">
      <p>Annonce bien ajouté</p>
      <button onClick={props.onClose}>Fermer</button>
    </div>
  );
}

export default PostAccepted;
