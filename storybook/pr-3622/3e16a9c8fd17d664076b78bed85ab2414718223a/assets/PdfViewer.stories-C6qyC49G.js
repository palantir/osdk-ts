import{j as r,M as s}from"./iframe-eqI2Tp6U.js";import{P as p}from"./pdf-viewer-D6_abjOG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CE_nycHx.js";import"./preload-helper-C854kg2c.js";import"./PdfRenderer-DvvLGhAX.js";import"./index-BQvj20dN.js";import"./PdfViewer-_WAF2VKc.js";import"./PdfViewer.module.css-BTCfG-L7.js";import"./PdfViewerAnnotationLayer-CR_HATuK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CekVyuU0.js";import"./PdfViewerOutlineSidebar-C6-zSGzw.js";import"./PdfViewerSidebarHeader-FM1GsXMS.js";import"./useBaseUiId-BUPOa5yP.js";import"./useControlled-CvWZUFGS.js";import"./CompositeRoot-OuXjMgww.js";import"./CompositeItem-Dh86pUX-.js";import"./ToolbarRootContext-DQKwC3ay.js";import"./composite-ynT6IuNJ.js";import"./svgIconContainer-CceqgUJ5.js";import"./PdfViewerSearchBar-CNnqsmc8.js";import"./chevron-up-BLU74TuF.js";import"./chevron-down-DESWDvR5.js";import"./cross-BwZn1LQT.js";import"./PdfViewerSidebar-nzcf1qvu.js";import"./index-CkexdKE9.js";import"./index-CZ3HCvN9.js";import"./index-BbGLmSZs.js";import"./PdfViewerToolbar-PdM5XQGF.js";import"./Button-B8Q21Qnn.js";import"./chevron-right-BFDHrpjq.js";import"./Input-C5vJD5Vp.js";import"./search-BTDUraC3.js";import"./spin-CNYMQ0Ej.js";import"./error-HIwS0nVv.js";import"./withOsdkMetrics-CEwxpbuR.js";import"./makeExternalStore-Bl270xTs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
