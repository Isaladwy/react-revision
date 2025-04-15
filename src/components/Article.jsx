function Article({
  name = 'Tamim',
  email = 'Taladwy@gmail.com',
  year = `2023`,
  content = 'no content provided',
}) {
  return (
    <div style={{ boxShadow: '0px 0px 10px gray', margin: '10px' }}>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{year}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Article;
