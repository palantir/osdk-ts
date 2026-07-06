import{j as r,M as s}from"./iframe-DcDxDXPh.js";import{P as p}from"./pdf-viewer-sjp0F6SM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BXl__BKJ.js";import"./preload-helper-BJ_iPk25.js";import"./PdfRenderer-DX0kvBGa.js";import"./index-CEdBBQfQ.js";import"./PdfViewer-B4w9zKyk.js";import"./PdfViewer.module.css-CrefNLZV.js";import"./PdfViewerAnnotationLayer-C7LQPG6h.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-AnbKuU.js";import"./PdfViewerOutlineSidebar-Ctn6FheV.js";import"./PdfViewerSidebarHeader-DkipVKJT.js";import"./useBaseUiId-CJV4f8ir.js";import"./useControlled-BOSZXyc3.js";import"./CompositeRoot-Cnz3C0z-.js";import"./CompositeItem-EY_8vSU6.js";import"./ToolbarRootContext-DuPFC5xg.js";import"./composite-BV8flE8-.js";import"./svgIconContainer-DmQcC8TZ.js";import"./PdfViewerSearchBar-BuKid6s7.js";import"./chevron-up-CMu-TcRN.js";import"./chevron-down-GHr7mfww.js";import"./cross-DLkj6s4G.js";import"./PdfViewerSidebar-C-yW44kF.js";import"./index-CQYalOHm.js";import"./index-Bo7bFw7e.js";import"./index-Bd2fH6T1.js";import"./PdfViewerToolbar-BgTcvWJQ.js";import"./Button-x-QMq-Ld.js";import"./chevron-right-9Bi0FS9J.js";import"./Input-C74RgTJ1.js";import"./search-BIJAhPAv.js";import"./spin-D2FUDBGm.js";import"./error-BoT5VSIl.js";import"./withOsdkMetrics-4iii51WK.js";import"./makeExternalStore-CdCSrcFn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
