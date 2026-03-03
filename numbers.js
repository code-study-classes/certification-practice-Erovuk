// 1 задание

function calculateDistance(x1, x2) {
  return Math.abs(x1 - x2);
}

export { calculateDistance };

// 2 задание

function calculateSegmentProduct(A, B, C) {
  return Math.abs((A - C) * (B - C));
}
export { calculateSegmentProduct };

// 3 задание

function calculateKilobytes(fileSizeInBytes) {
  return Math.floor(fileSizeInBytes / 1024);
}
export { calculateKilobytes };
