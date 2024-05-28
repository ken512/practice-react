import React from 'react'
import './App.css'

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}

const PostsList = ({ src }) => {
  const maxLength = 65; //省略する際の最大文字数

  // '2023-09-11T09:00:00.000Z'を Dateオブジェクトに変換
  const date = new Date('2023-09-11T09:00:00.000Z');

  // 年、月、日を数値形式で表示するためのオプションで定義する
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  // `Date` オブジェクトをローカルの日付文字列に変換
  const dateString = date.toLocaleDateString('ja-JP', options);

  return (
    <div className="App">
      <header className="header-App">
        <a className="link" href='/'>Blog</a>
        <a className="link" href='/'>お問い合わせ</a>
      </header>

      {
        src.map((elem, index) => (
          <React.Fragment key={index}>
            <div className="posts-info">
              <ul >
                <li>
                  <a href='/'>
                    <div className="date">{elem.createdAt = (dateString)}</div>
                    <div className="programming-language">{elem.categories.map((category, idx) => (
                      <span key={idx} className="category-box">{category}</span>
                    ))}</div>
                    <div className="title">{elem.title}</div>
                    <div className="content">{truncateText(elem.content, maxLength).split('<br/>').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                          <br />
                      </React.Fragment>
                    ))}</div>
                  </a>
                </li>
              </ul>
            </div>
          </React.Fragment>
        ))}
    </div>
  )

}

export default PostsList;

