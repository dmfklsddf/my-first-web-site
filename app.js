const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = [];
const transactions = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 회원가입 기능
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // 회원 정보를 생성하여 배열에 추가
  users.push({ username, password });

  res.status(201).json({ message: '회원가입이 완료되었습니다.' });
});

// 로그인 기능
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 사용자 정보를 배열에서 찾기
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: '로그인 성공!' });
  } else {
    res.status(401).json({ message: '로그인 실패. 유효하지 않은 사용자 정보입니다.' });
  }
});

// 프로필 작성 기능
app.post('/profile', (req, res) => {
    const { username, nickname } = req.body;
  
    // 사용자 정보를 배열에서 찾기
    const user = users.find(u => u.username === username);
  
    if (user) {
      // 사용자의 프로필 정보 업데이트
      user.nickname = nickname;
  
      res.json({ message: '프로필 작성이 완료되었습니다.' });
    } else {
      res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }
  });


//서버
const port = 3000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행중입니다.`);
});