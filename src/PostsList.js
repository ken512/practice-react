import React, { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

const PostsList = () => {
  

  // formatDate 関数を定義し、日付文字列をフォーマットする処理を関数内で行う
  const formatDate = (dateString) => {

    // '2023-09-11T09:00:00.000Z'を Dateオブジェクトに変換
    const date = new Date(dateString);

    // 年、月、日を数値形式で表示するためのオプションで定義する
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    // `Date` オブジェクトをローカルの日付文字列に変換
    return date.toLocaleDateString('ja-JP', options);
  };

  const [posts, setPosts] = useState({ articles: [] });
  const [loading, setLoading] = useState(true); // ローディング状態を追加

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
        const data = await response.json();
        
        setPosts( data );

      }  finally {
        setLoading(false); // データ取得が完了したらローディングを終了
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // ローディング中の表示
  }

  return (
    <div className="App">
      <header className="header-App">
        <Link className="link" to="/">Blog</Link>
        <Link className="link" to="/">お問い合わせ</Link>
      </header>

      {
        Array.isArray(posts.posts) && posts.posts.map(article => (
          <div key={article.id} className="posts-info">
            <ul >
              <li>
                <Link to={`/post/${article.id}`}>
                  <div className="date">{formatDate(article.createdAt)}</div>
                  <div className="programming-language">{article.categories.map((category, idx) => (
                    <span key={idx} className="category-box">{category}</span>
                  ))}</div>
                  <div className="title">{article.title}</div>
                  <div className="content" dangerouslySetInnerHTML={{ __html: article.content }}>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        ))}
    </div>

  );

}

export default PostsList;