import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';

const InquiryPage = () => {
  const [inquiryData, setInquiryData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInquiryData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validate = () => {
    const tempErrors = {};
    if (!inquiryData.name) tempErrors.name = 'お名前は必須です。';
    if (!inquiryData.email) tempErrors.email = 'メールアドレスは必須です。';
    if (!inquiryData.message) tempErrors.message = '本文は必須です。';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      alert('送信しました');
      setInquiryData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='App'>
      <header className="header-App">
        <Link to="/" className="link">Blog</Link>
        <Link to="/inquiry" className="link">お問い合わせ</Link>
      </header>

      <div className="inquiry">
        <h1>問合わせフォーム</h1>
        <form id="myForm" onSubmit={handleSubmit}>
          <div className="formItem">
              <label>
              <dl>
                <dt>お名前</dt>
                <div className="text">
                  <dd>
                    <input
                    type="text"
                    id="name"
                    maxLength="30"
                    value={inquiryData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  </dd>
                  {errors.name && <span>{errors.name}</span>}
                </div>
                </dl>
                </label>
                
            <div className="label">
              <label>
                <dl>
                <dt>メールアドレス</dt>
                <div className="text">
                  <dd>
                    <input
                    type="text"
                    id="email"
                    value={inquiryData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  </dd>
                  {errors.email && <span>{errors.email}</span>}
                </div>
                </dl>
                </label>
            </div>
            <div className="label">
              <label>
                <dl>
                  <dt>本文</dt>
              <div className="text">
              <dd>
                <textarea
                  type="text"
                  id="message"
                  maxLength="500"
                  value={inquiryData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows="10"
                />
                </dd>
                {errors.message && <span>{errors.message}</span>}
              </div>
              </dl>
              </label>
            </div>
          </div>
          <div className="btn">
          <input type="submit" value="送信" disabled={isSubmitting} />
          <input type="reset" value="クリア" onClick={() => setInquiryData({ name: '', email: '', message: '' })} disabled={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryPage;