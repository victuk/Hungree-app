import { useMemo, useState } from 'react';

import { Product } from '~/components/Product';
import ProductsSkeletonLoader from '~/components/ProductsSkeletonLoader';
import { SearchInput } from '~/components/SearchInput';
import { ErrorComponent } from '~/components/ui/ErrorComponent';
import { Loading } from '~/components/ui/Loading';
import { Wrapper } from '~/components/ui/Wrapper';
import { useGetAllProducts } from '~/lib/tanstack/queries';

export default function Home() {
  const [value, setValue] = useState('');
  const { data, isPending, isError, refetch } = useGetAllProducts();
  const onClear = () => setValue('');

  const filteredProduct = useMemo(() => {
    if (!value) return data?.products || [];
    return (
      data?.products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      ) || []
    );
  }, [data?.products, value]);
  const onChange = (value: string) => setValue(value);
  if (isError) {
    return <ErrorComponent onRefetch={refetch} />;
  }

  if (isPending) return <ProductsSkeletonLoader />;

  return (
    <Wrapper>
      <SearchInput onChange={onChange} value={value} onClear={onClear} />
      <Product data={filteredProduct} />
    </Wrapper>
  );
}