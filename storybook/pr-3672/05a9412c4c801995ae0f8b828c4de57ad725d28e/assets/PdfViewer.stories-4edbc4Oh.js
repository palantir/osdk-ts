import{j as r,M as s}from"./iframe-Dcyw3n0s.js";import{P as p}from"./pdf-viewer-D6EcxFoY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-8Pi41KVF.js";import"./preload-helper--DYYOvly.js";import"./PdfRenderer-BjuHXkjH.js";import"./index-BRAYEGnX.js";import"./PdfViewer-BAsoEC1q.js";import"./PdfViewer.module.css-DJa7bnbf.js";import"./PdfViewerAnnotationLayer-CHkmkTq4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8lFLH5x.js";import"./PdfViewerOutlineSidebar-C_DH_oVs.js";import"./PdfViewerSidebarHeader-0Cu2-hM1.js";import"./useBaseUiId-Bxpmo9et.js";import"./useControlled-CAIHNCIs.js";import"./CompositeRoot-PEzRCa1Y.js";import"./CompositeItem-suCt67I_.js";import"./ToolbarRootContext-CvnjVtFT.js";import"./composite-CXKQao9c.js";import"./svgIconContainer-CDrVOxgg.js";import"./PdfViewerSearchBar-8xrqzjqR.js";import"./chevron-up-BJO_32YJ.js";import"./chevron-down-DybwZNpw.js";import"./cross-BtW3RFRu.js";import"./PdfViewerSidebar-B2Nilomu.js";import"./index-BbXWi6RK.js";import"./index-DQSxhZzf.js";import"./index-D8Yt5RHp.js";import"./PdfViewerToolbar-B5Qqr9Z7.js";import"./Button-CEVHKDgx.js";import"./chevron-right-FOdnePxJ.js";import"./Input-CxW-U7dR.js";import"./search-NxpExqZW.js";import"./spin-C8JHHhMj.js";import"./error-vNzMi5l_.js";import"./withOsdkMetrics-B1X4SrC-.js";import"./makeExternalStore-CB1cXXB6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
