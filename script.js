const postForm = document.getElementById('postForm');
const postList = document.querySelector('.post-list');

postForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 기본 폼 제출 동작 막기

  const titleInput = postForm.elements['title'];
  const contentInput = postForm.elements['content'];

  const title = titleInput.value;
  const content = contentInput.value;

  // 새로운 게시글 요소 생성
  const newPost = document.createElement('li');
  newPost.classList.add('post');

  const newPostTitle = document.createElement('h2');
  newPostTitle.classList.add('post-title');
  newPostTitle.textContent = title;

  const newPostContent = document.createElement('p');
  newPostContent.classList.add('post-content');
  newPostContent.textContent = content;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = '삭제';

  newPost.appendChild(newPostTitle);
  newPost.appendChild(newPostContent);
  newPost.appendChild(deleteButton);

  // 새로운 게시글을 게시글 목록에 추가
  postList.appendChild(newPost);

  // 폼 입력값 초기화
  titleInput.value = '';
  contentInput.value = '';

  // 서버에 게시글 데이터 전송
  fetch('/createPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('게시글 작성에 실패했습니다.');
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// 게시글 삭제 함수
const deletePost = (postElement) => {
  postElement.remove();
};

// 삭제 버튼 클릭 이벤트 처리
postList.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('.delete-button');
  if (deleteButton) {
    const postElement = deleteButton.closest('.post');
    deletePost(postElement);

    const postId = postElement.dataset.id;
    fetch(`/deletePost/${postId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('게시글 삭제에 실패했습니다.');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
});