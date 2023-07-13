const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// 정적 파일 제공
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

// 게시글 데이터
const postTitle = '게시글 제목';
const postContent = '게시글 내용';

// 게시글 업데이트 요청 처리
app.post('/updatePost', (req, res) => {
  const { title, content } = req.body;

  // 게시글 내용과 제목 업데이트
  postTitle = title;
  postContent = content;

  // 응답 전송
  res.sendStatus(200);
});

// 게시글 데이터 제공
app.get('/getPost', (req, res) => {
  const postData = {
    title: postTitle,
    content: postContent
  };

  // JSON 형태로 게시글 데이터 응답
  res.json(postData);
});

// 게시글 삭제 요청 처리
app.delete('/deletePost', (req, res) => {
    // 게시글 초기화
    postTitle = '';
    postContent = '';

    // 응답 전송
    res.sendStatus(200);
});  

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});