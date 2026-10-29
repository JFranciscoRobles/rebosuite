// Rebosheets: the spreadsheet, on its sample workbook.

import { exportXlsx, sampleWorkbook } from '@rebosheets/core';
import { SheetsEditor } from '@rebosheets/react';
import { useMemo } from 'react';
import type { DemoProps } from './shared';

export default function SheetsDemo({ lang, dark }: DemoProps) {
  const xlsx = useMemo(() => exportXlsx(sampleWorkbook(lang)), [lang]);
  return <SheetsEditor xlsx={xlsx} name={lang === 'es' ? 'presupuesto.xlsx' : 'budget.xlsx'} locale={lang} theme={dark ? 'dark' : 'light'} style={{ height: '100%' }} />;
}
