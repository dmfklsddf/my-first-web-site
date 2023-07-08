const express = require('express');
const app = express();

// 유저 등록 실패
app.post('/api/users', (req, res) => {
    const { username, email, password, name, birthday } = req.body;
  
    if (!username) {
      return res.status(400).json({
        error: {
          type: "ValidationError",
          message: "username is required."
        }
      });
    }
  
    if (!email) {
      return res.status(400).json({
        error: {
          type: "ValidationError",
          message: "email is required."
        }
      });
    }
  
    if (!isValidEmailFormat(email)) {
      return res.status(400).json({
        error: {
          type: "ValidationError",
          message: "not in email format."
        }
      });
    }
  
    if (!password) {
      return res.status(400).json({
        error: {
          type: "ValidationError",
          message: "password is required."
        }
      });
    }
  
    if (!name) {
      return res.status(400).json({
        error: {
          type: "ValidationError",
          message: "name is required."
        }
      });
    }
  
    if (!birthday) {
      return res.status(400).json({
        error: {
          type: "ValidationError",
          message: "birthday is required."
        }
      });
    }
  
    // 중복 체크
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(404).json({
        error: {
          type: 'ValidationError',
          message: 'username is duplicated.'
        }
      });
    }
  
    const existingEmail = users.find(user => user.email === email);
    if (existingEmail) {
      return res.status(404).json({
        error: {
          type: 'ValidationError',
          message: 'email is duplicated.'
        }
      });
    }
  
    // 새로운 유저 생성
    const newUser = {
      id: users.length + 1,
      username,
      email,
      password,
      name,
      birthday
    };
  
    // 유저 배열에 추가
    users.push(newUser);
  
    // 성공적인 응답
    res.status(200).json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      name: newUser.name,
      birthday: newUser.birthday
    });
  });
  
  app.listen(300, () => {
    console.log('서버가 302 포트에서 실행 중입니다.');
  });
