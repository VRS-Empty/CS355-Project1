
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
});
