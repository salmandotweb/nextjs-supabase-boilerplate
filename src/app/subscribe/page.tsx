import getActiveProductsWithPrices from "../../../actions/getActiveProductsWithPrices";

const Page = async () => {
	const getActiveProducts = await getActiveProductsWithPrices();
	return (
		<div>
			{getActiveProducts?.map((product) => {
				return <div key={product.id}>{product.name}</div>;
			})}
		</div>
	);
};

export default Page;
