import { SelectedPage } from '@/types';
import { ReactNode } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    children: ReactNode;
}

const Link = ({ 
    page, 
    selectedPage,
    setSelectedPage, children }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-white" : ""}
    transition duration-500 hover:text-black`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}>
        {children}
    </AnchorLink>
  )
}

export default Link