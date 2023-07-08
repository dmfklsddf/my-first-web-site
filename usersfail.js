const express = require('express');
const app = express();

// 유저 정보 수
let users = [
  {
    id: 1,
    username: 'john',
    email: 'test1@example.com',
    password: 'password123',
    name: 'John Doe',
    birthday: '1990-01-01'
  }
];


app.post('/api/users', (req, res) => {
  const { username, email, password, name, birthday } = req.body;

  // 필수 입력값 체크
  if (!username) {
    return res.status(400).json({
      error: {
        type: 'BAD_REQUEST',
        message: 'username is blank.'
      }
    });
  }

  if (!email) {
    return res.status(400).json({
      error: {
        type: 'BAD_REQUEST',
        message: 'email is blank.'
      }
    });
  }

  if (!isValidEmailFormat(email)) {
    return res.status(400).json({
      error: {
        type: 'BAD_REQUEST',
        message: 'not in email format.'
      }
    });
  }

  if (!password) {
    return res.status(400).json({
      error: {
        type: 'BAD_REQUEST',
        message: 'password is incorrect.'
      }
    });
  }

  if (!name) {
    return res.status(400).json({
      error: {
        type: 'BAD_REQUEST',
        message: 'name is blank.'
      }
    });
  }

  if (!birthday) {
    return res.status(400).json({
      error: {
        type: 'BAD_REQUEST',
        message: 'birthday is blank.'
      }
    });
  }

  // 중복 체크
  const existingUsername = users.find(user => user.username === username);
  if (existingUsername) {
    return res.status(409).json({
      error: {
        type: 'ValidationError',
        message: 'username is duplicated.'
      }
    });
  }

  const existingEmail = users.find(user => user.email === email);
  if (existingEmail) {
    return res.status(409).json({
      error: {
        type: 'ValidationError',
        message: 'email is duplicated.'
      }
    });
  }

});

app.listen(302, () => {
  console.log('서버가 302 포트에서 실행 중입니다.');
});
