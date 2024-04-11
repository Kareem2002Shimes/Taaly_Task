'use client';
import { Pages, Routes } from '@/_constants/enums';
import Link from 'next/link';
import Icon, { SvgIconType } from '../Icon';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type Link = {
  href: string;
  title: string;
  icon: SvgIconType;
};
const SidebarContainer = function () {
  const pathname = usePathname();

  const links: Link[] = [
    {
      href: `/${Routes.ADMIN}`,
      title: 'Monitoring',
      icon: 'computer-desktop',
    },
    {
      href: `/${Routes.ADMIN}/${Pages.MATCHING}`,
      title: 'Matching',
      icon: 'users',
    },
    {
      href: `/${Routes.ADMIN}/${Pages.REPORTING}`,
      title: 'Reporting',
      icon: 'clipboard-document-list',
    },
    {
      href: `/${Routes.ADMIN}/${Pages.ORGANIZATIONS}`,
      title: 'Organizations',
      icon: 'building-library',
    },
    {
      href: `/${Routes.ADMIN}/${Pages.PROJECTS}`,
      title: 'Projects',
      icon: 'academic-cap',
    },
    {
      href: `/${Routes.ADMIN}/${Pages.LEARNING_TRACKS}`,
      title: 'Learing Tracks',
      icon: 'book-open',
    },
    {
      href: `/${Routes.ADMIN}/${Pages.SETTINGS}`,
      title: 'Settings',
      icon: 'settings',
    },
    {
      href: `/${Routes.ADMIN}/${Pages.HELP}`,
      title: 'Help',
      icon: 'question-mark-circle',
    },
  ];

  return (
    <ul className=' bg-base-color w-[267px] rounded-[16px] pt-[32px] pb-[100px] flex flex-col gap-4'>
      {links.map((link, i) => (
        <li key={i} className={i === links.length - 2 ? 'mt-[120px]' : ''}>
          <Link
            href={link.href}
            className={`hover:text-white gap-2 font-[500] flex py-3 px-4 hover:bg-primary group transition-all duration-200 mx-4 rounded-[8px] ${
              pathname === link.href ? 'text-white bg-primary' : 'text-heading'
            }`}
          >
            <Icon
              name={link.icon}
              className={`text-heading group-hover:text-white ${
                pathname === link.href ? 'text-white' : 'text-heading'
              }`}
            />
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarContainer;
