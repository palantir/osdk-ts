import{j as r,M as s}from"./iframe-D12e5Yf9.js";import{P as p}from"./pdf-viewer-BO0dRogo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9f7rTF-v.js";import"./preload-helper-34QCnBMF.js";import"./PdfViewer-j4jTbHdE.js";import"./index-O4zTr8Ld.js";import"./BasePdfViewer-keBCfZ5v.js";import"./BasePdfViewer.module.css-CRnb9FM_.js";import"./PdfViewerAnnotationLayer-4DvETLMw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dy-wklmq.js";import"./PdfViewerOutlineSidebar-DGN2rI_H.js";import"./PdfViewerSidebarHeader-pj5ZV7En.js";import"./useBaseUiId-s740CplR.js";import"./useControlled-ID5WarEe.js";import"./CompositeRoot-CZB6kDMp.js";import"./CompositeItem-BNcuqAtd.js";import"./ToolbarRootContext-DNlY1kW_.js";import"./composite-BD8updFS.js";import"./svgIconContainer-B0rntCL0.js";import"./PdfViewerSearchBar-CV3Gvoey.js";import"./chevron-up-DeSfXNKn.js";import"./chevron-down-BHFsOBbt.js";import"./cross-Cs_yM80q.js";import"./PdfViewerSidebar-CGS1cLzO.js";import"./index-idqsRB9k.js";import"./index-Hw5856rK.js";import"./index-GyhMgPa-.js";import"./PdfViewerToolbar-CT7mmrgx.js";import"./Button-D5sAducB.js";import"./chevron-right-D8eebYc5.js";import"./Input-dW8Zs2Bg.js";import"./search-D5rTLbi7.js";import"./spin-DUc9ul88.js";import"./error-DMTSuwww.js";import"./withOsdkMetrics-B58QGQVF.js";import"./makeExternalStore-HCjLV6k-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
