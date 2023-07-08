const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/api/users', (req, res) => {
  const { username, email, password, name, birthday } = req.body;

  // 필수 정보가 비어있는 경우 오류 응답
  if (!username || !email || !password || !name || !birthday) {
    return res.status(400).json({ error: 'Required information is missing.' });
  }

  // 사용자 등록 
  res.status(201).json({ message: 'User registered successfully.' });
});

app.patch('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { username, email, newpassword, name, birthday } = req.body;

  // 사용자 찾기
  const user = users.find(user => user.id === id);

  // 사용자가 존재하지 않으면 오류 응답
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // 사용자 정보 업데이트
  if (username) {
    user.username = username;
  }
  if (email) {
    user.email = email;
  }
  if (newpassword) {
    user.password = newpassword;
  }
  if (name) {
    user.name = name;
  }
  if (birthday) {
    user.birthday = birthday;
  }

  // 업데이트된 사용자 정보 반환
  res.json(user);
});

// 서버 시작
app.listen(303, () => {
  console.log('서버가 302 포트에서 실행 중입니다.');
});
