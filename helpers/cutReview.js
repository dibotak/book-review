function cutReview(review) {
  if (review.length < 50) {
    return review;
  }
  let crop = review.substr(0, 40);
  crop += '...'
  return crop;
}

module.exports = cutReview;