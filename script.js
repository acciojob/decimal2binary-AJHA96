function threeSum(n) {
let bin=0;
	let i=1;
	while(n>1){
		let rem=n%2;
		bin +=rem*i;
		i*=10;
		n/=2;
	}
  console.log(bin);
}

module.exports = threeSum;
