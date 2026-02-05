'use client';

import { Pagination as AntPagination, ConfigProvider, theme } from 'antd';

export default function Pagination() {
  return (
    <div className="flex justify-center items-center py-8">
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          components: {
            Pagination: {
              itemActiveBg: '#818cf8',
              itemActiveColor: '#ffffff',
              itemActiveColorHover: '#ffffff',
              itemBg: 'rgba(0, 0, 0, 0)',
              colorPrimary: '#818cf8',
              colorText: '#818cf8',
            },
          },
        }}
      >
        <AntPagination 
            defaultCurrent={1} 
            total={50} 
            showSizeChanger={false} 
            style={{ fontWeight: 600 }}
        />
      </ConfigProvider>
    </div>
  );
}
