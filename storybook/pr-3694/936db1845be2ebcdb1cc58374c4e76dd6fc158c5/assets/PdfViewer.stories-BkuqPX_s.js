import{j as r,M as s}from"./iframe-iKRdyAbr.js";import{P as p}from"./pdf-viewer-DEb-53PW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D55BbaAf.js";import"./preload-helper-DVTmALjq.js";import"./PdfRenderer-A85WGWCI.js";import"./index-C2n8TGAO.js";import"./PdfViewer-C4cWt5lq.js";import"./PdfViewer.module.css-D3hjLszu.js";import"./PdfViewerAnnotationLayer-DjAQnoV1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CD107VIP.js";import"./PdfViewerOutlineSidebar-CJxqfC0V.js";import"./PdfViewerSidebarHeader-DugTp4aD.js";import"./useBaseUiId-DuUa_hc_.js";import"./useControlled-5vKOO904.js";import"./CompositeRoot-BgJeD7GB.js";import"./CompositeItem-CaECQ_4V.js";import"./ToolbarRootContext-417TxmOR.js";import"./composite-BmLc-Elc.js";import"./svgIconContainer-CNPfWT_A.js";import"./PdfViewerSearchBar-HYozXdaV.js";import"./chevron-up-CxZTDm3x.js";import"./chevron-down-BDeoM4Nk.js";import"./cross-DZwGj8TX.js";import"./PdfViewerSidebar-4voX0B4m.js";import"./index-BXqtYAVA.js";import"./index-CXUpj6H9.js";import"./index-D-6utWIs.js";import"./PdfViewerToolbar-BdB1KU9-.js";import"./Button-D7T6F8Hw.js";import"./chevron-right-BNtPkd67.js";import"./Input-CUl0DuD9.js";import"./search-WZ4NTqVw.js";import"./spin-MF87vdFJ.js";import"./error-DPjZwhx_.js";import"./withOsdkMetrics-DDxC3Viq.js";import"./makeExternalStore-BxufXohf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
