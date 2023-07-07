const express = require('express');
const app = express();

// POST /api/users 엔드포인트 처리
app.post('/api/users', (req, res) => {
  const { username, email, name, birthday } = req.body;

  const userId = saveUserToDatabase({ username, email, name, birthday });

  // 성공적인 응답 반환
  res.status(201)
    .location(`/api/users/${userId}`)
    .json({
      id: userId,
      username,
      email,
      name,
      birthday
    });
});

app.patch('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { username, email, name, birthday } = req.body;
  
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
app.listen(302, () => {
  console.log('서버가 302 포트에서 실행 중입니다.');
});