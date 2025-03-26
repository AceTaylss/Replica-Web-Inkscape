const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.height === '0px' || answer.style.height === '') {
      answer.style.height = answer.scrollHeight + 'px';
      question.classList.add('active');
    } else {
      answer.style.height = '0px';
      question.classList.remove('active');
    }
  });
});