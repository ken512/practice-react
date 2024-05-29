import React from 'react'
import './App.css'


const PostsList = ({ src }) => {

  // formatDate 関数を定義し、日付文字列をフォーマットする処理を関数内で行う
  const formatDate = (dateString) => {

    // '2023-09-11T09:00:00.000Z'を Dateオブジェクトに変換
    const date = new Date(dateString);

    // 年、月、日を数値形式で表示するためのオプションで定義する
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    // `Date` オブジェクトをローカルの日付文字列に変換
    return date.toLocaleDateString('ja-JP', options);
  }

  return (
    <div className="App">
      <header className="header-App">
        <a className="link" href='/'>Blog</a>
        <a className="link" href='/'>お問い合わせ</a>
      </header>

      {
        src.map((elem, index) => (
          <div key={index} className="posts-info">
            <ul >
              <li>
                <a href='/'>
                  <div className="date">{formatDate(elem.createdAt)}</div>
                  <div className="programming-language">{elem.categories.map((category, idx) => (
                    <span key={idx} className="category-box">{category}</span>
                  ))}</div>
                  <div className="title">{elem.title}</div>
                  <div className="content" dangerouslySetInnerHTML={{ __html: elem.content }}>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        ))}
    </div>
  )

}

export default PostsList;

