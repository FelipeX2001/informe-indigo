import React from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface ReportSectionData {
  id: string;
  title: string;
  content: string[];
  type?: 'list' | 'text' | 'cards';
  icon?: React.ReactNode;
}

export interface FinancialItem {
  name: string;
  category: string;
}