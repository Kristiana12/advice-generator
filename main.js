const adviceBtn = document.querySelector('.advice-btn');
const blockquote = document.querySelector('.advice-para');

const displayId = (id) => {
  const idNumber = document.getElementById('id-nr');
  idNumber.textContent = id;
};

const displayAdvice = (quote) => {
  blockquote.textContent = quote;
};

const displayError = (msg) => {
  blockquote.textContent = msg;
  blockquote.classList.add('error');
};

//Fetching data - error Handling
const getData = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Something went wrong! Error: ${error.message}. Please refresh the page`
        );
      return response.json();
    })
    .then((res) => {
      const id = res.slip?.id;
      const advice = res.slip?.advice;
      displayId(id);
      displayAdvice(advice);
    })
    .catch((err) =>
      displayError(
        `Something went wrong! Error: ${err.message}. Please refresh the page`
      )
    );
};

getData();
adviceBtn.addEventListener('click', getData);
