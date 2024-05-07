interface Param {
	price: number
	discount: number
	isInstallment: boolean
	months:number
}

const totalPrice = ({
	price,
	discount,
	isInstallment,
	months,
}: {
	price: number
	discount: number
	isInstallment:boolean
	months: number
}):number => {
	const discountPrice = price - (price * discount) / 100
	if (isInstallment) {
		return discountPrice / months
	} else {
		return discountPrice
	}
}

const price = totalPrice({
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12,
})
console.log(price) // 6250
