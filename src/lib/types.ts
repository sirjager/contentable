export interface LayoutProps {
  children?: React.ReactNode;
  params?: any;
}

export interface PageProps {
  params: { slug?: string; tag?: string; username?: string; tableID?: string };
  searchParams?: any;
}
