import{j as r,M as s}from"./iframe-CTpEiklg.js";import{P as p}from"./pdf-viewer-Cfm67vQS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BYnDv3Rf.js";import"./preload-helper-HjgRIjnU.js";import"./PdfRenderer-DswBbW30.js";import"./index-DATAnOu4.js";import"./PdfViewer-CRSxKHYQ.js";import"./PdfViewer.module.css-mNfz3PKk.js";import"./PdfViewerAnnotationLayer-BOb4Y40A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QO_-QUhW.js";import"./PdfViewerOutlineSidebar-CZRYhWNb.js";import"./PdfViewerSidebarHeader-np94k7jn.js";import"./useBaseUiId-BcsqHrcW.js";import"./useControlled-sCDcn-eS.js";import"./CompositeRoot-xFcoraMt.js";import"./CompositeItem-Cv93BoTy.js";import"./ToolbarRootContext-DGQzkc9X.js";import"./composite-CZSd3WEH.js";import"./svgIconContainer-CJyYhQD8.js";import"./PdfViewerSearchBar-m7RLopB-.js";import"./chevron-up-MjlC633m.js";import"./chevron-down-D0wNoYA6.js";import"./cross-BxFgownq.js";import"./PdfViewerSidebar-CE6Y3jug.js";import"./index-BuetERLU.js";import"./index-BnSLvptt.js";import"./index-m0dcwGiE.js";import"./PdfViewerToolbar-DUO3u8WQ.js";import"./Button-Bs7RHCAx.js";import"./chevron-right-BDVxek-s.js";import"./Input-L37JoD2W.js";import"./search-BpimWbbi.js";import"./spin-6WkOou8w.js";import"./error-RWgNzzUN.js";import"./withOsdkMetrics-ArOoGBh3.js";import"./makeExternalStore-l9Y-9YjF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
