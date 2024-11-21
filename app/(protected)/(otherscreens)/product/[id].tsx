import { useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';

import { BottomButtons } from '~/components/BottomButtons';
import { ProductDetail } from '~/components/ProductDetail';
import SkeletonLoader from '~/components/SkeletonLoader';
import { ErrorComponent } from '~/components/ui/ErrorComponent';
import { Loading } from '~/components/ui/Loading';
import { Wrapper } from '~/components/ui/Wrapper';
import { useGetSimilarProducts, useGetSingleProduct } from '~/lib/tanstack/queries';

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isPending, isError, refetch } = useGetSingleProduct(id);

  const {
    data: similar,
    isPending: isPendingSimilar,
    isError: isErrorSimilar,
    refetch: refetchSimilar,
  } = useGetSimilarProducts(data?.category!);
  // use to filter similar products and return a list of similar products that does not include the currently displayed single product
  const filterSimilarProduct = useMemo(() => {
    // if the data is not defined, return an empty array
    if (!data) return [];

    // if data is defined , we filter and return the products that do not match the id of the currently displayed product or if none is found just return an empty array so your code doesn't break

    return similar?.products.filter((product) => product.id !== data.id) || [];
    // these are what the useMemo is dependent on, each time any of them changes, it will change as well
  }, [data?.id, similar?.products]);
  const handleRefetch = () => {
    refetch();
    refetchSimilar();
  };
  if (isError || isErrorSimilar) return <ErrorComponent onRefetch={handleRefetch} />;

  // if (isPending || isPendingSimilar) return <Loading />;

  if (isPending || isPendingSimilar) return <SkeletonLoader />;

  return (
    <Wrapper>
      <ProductDetail product={data} similar={filterSimilarProduct} />
      <BottomButtons item={data} stock={data.stock} />
    </Wrapper>
  );
};

export default ProductDetails;
