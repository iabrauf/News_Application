import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const NewsArticlesSkeleton = () => {
  return (
    <Stack spacing={1}>
      <div className="hidden tablet:block">
        <div className='flex justify-between items-center'>
          <Skeleton
            className="basis-1/2"
            variant="rectangular"
            width={600 ? 600 : 400}
            height={350}
            animation="wave"
          />
          <div className='flex flex-col basis-1/2 md:ml-5 justify-between'>
            <Skeleton variant="text" width={150} height={40} />
            <Skeleton variant="text" width={450} height={75} />
            <Skeleton width="50%" />
            <Skeleton width="100%" height={30} />
          </div>
        </div>
      </div>
      <div className='hidden tablet:block'>
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[...Array(6)].map((_, index) => (
            <div className="mb-16" key={index}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={250}
                animation="wave"
              />
              <div className="flex flex-col py-5">
                <Skeleton width="50%" />
                <Skeleton width="100%" height={30} />
                <Skeleton width="100%" height={30} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hide">
        <div className='grid md:grid-cols-2 gap-4 '>
          {[...Array(10)].map((_, index) => (
            <div className='mb-16' key={index}>
              <Skeleton
                variant='rectangular'
                width='100%'
                height={250}
                animation="wave"
              />
              <div className='flex flex-col py-5'>
                <Skeleton width='50%' />
                <Skeleton width='100%' height={30} />
                <Skeleton width='100%' height={30} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Stack>
  );
};

export default NewsArticlesSkeleton;
