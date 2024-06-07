import { Link, useParams } from 'react-router-dom';
import './App.css';

const DetailsPage = ({ src }) => {

  const { id } = useParams();
  const post = src[id];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('ja-JP', options);
  }

  return (
    <div className='App'>
      <header className="header-App">
        <Link to="/" className="link">Blog</Link>
        <Link to="/" className="link" >お問い合わせ</Link>
      </header>
      
      <div style={{ border: 'none' }} className="posts-info">
        <ul>
          <li>
            <div><img src={post.thumbnailUrl} alt="img" /></div>
            <div className="date">{formatDate(post.createdAt)}</div>
            <div className="programming-language">
              {post.categories.map((category, idx) => (
                <span key={idx} className="category-box">{category}</span>
              ))}
            </div>
            <div className="title">{post.title}</div>
            <div style={{ display: 'block' }} className="content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DetailsPage;