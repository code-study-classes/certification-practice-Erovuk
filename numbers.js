function calculateDistance(x1, x2) {
  return Math.abs(x1 - x2);
}

export { calculateDistance };

function calculateSegmentProduct(A, B, C) {
  return Math.abs((A - C) * (B - C));
}
export { calculateSegmentProduct };

function calculateKilobytes(fileSizeInBytes) {
  return Math.floor(fileSizeInBytes / 1024);
}
export { calculateKilobytes };
