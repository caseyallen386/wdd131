let counter = localStorage.getItem('counter'),
    numbReviewsSpan = document.getElementById('numb-reviews');

    

if (counter == null) {
    localStorage.setItem('counter', 1);
    numbReviewsSpan.textContent = 1;
} else {

    counter++;
    localStorage.setItem( 'counter', counter);
    numbReviewsSpan.textContent = counter;
}