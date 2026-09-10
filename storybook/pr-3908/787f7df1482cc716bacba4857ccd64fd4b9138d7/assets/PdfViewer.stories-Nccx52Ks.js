import{j as r,M as s}from"./iframe-DF9DX5mw.js";import{P as p}from"./pdf-viewer-DwWckeVg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DC0MXp-V.js";import"./preload-helper-DVnQ6duR.js";import"./PdfViewer-VwWoac7J.js";import"./index-BmuLmEaC.js";import"./BasePdfViewer-BbX3SchY.js";import"./BasePdfViewer.module.css-DnfuBeF3.js";import"./PdfViewerAnnotationLayer-ClU03A1p.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuHrcxuC.js";import"./PdfViewerOutlineSidebar-Dlgj20H-.js";import"./PdfViewerSidebarHeader-DU7eEjZB.js";import"./useBaseUiId-Z5YEKe02.js";import"./useControlled-CD5ggXKk.js";import"./CompositeRoot-CmRSkQS-.js";import"./CompositeItem-MLQ_GRVe.js";import"./ToolbarRootContext-Cv5YqZmZ.js";import"./composite-DOTEZs57.js";import"./svgIconContainer-BnUXZNAT.js";import"./PdfViewerSearchBar-BNxtKkGr.js";import"./chevron-up-DPV2hUsw.js";import"./chevron-down-YPHBShAj.js";import"./cross-CNVJX-R0.js";import"./PdfViewerSidebar-rec3fZ9o.js";import"./index-CME9wlOT.js";import"./index-C_Rqkv-M.js";import"./index-BougzNP_.js";import"./PdfViewerToolbar-D11c2lGW.js";import"./Button-fzptvapi.js";import"./chevron-right-CzBjljxo.js";import"./Input-XPtGFq-8.js";import"./search-C_UKWj2f.js";import"./spin-DHc3mk9S.js";import"./error-CX7q-MIV.js";import"./withOsdkMetrics-YJ6vrnTW.js";import"./makeExternalStore-DZe_6606.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
