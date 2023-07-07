const express = require('express');
const app = express();


app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    // 사용자 찾기
    const userIndex = users.findIndex(user => user.id === id);
  
    // 사용자가 존재하지 않으면 오류 응답
    if (userIndex === -1) {
      return res.status(404).json({
        error: {
          type: 'NotFoundError',
          message: 'User not found.'
        }
      });
    }
  
    // 사용자 삭제
    users.splice(userIndex, 1);
  
    // 성공적인 응답
    res.sendStatus(200);
  });

  app.listen(308, () => {
    console.log('서버가 302 포트에서 실행 중입니다.');
  });