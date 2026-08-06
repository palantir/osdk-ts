import{j as r,M as s}from"./iframe-DPcQ5jr3.js";import{P as p}from"./pdf-viewer-CdVtCd1S.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DUwdn7fq.js";import"./preload-helper-DaFFMXPg.js";import"./PdfRenderer-CcnbJKI4.js";import"./index-BszcYN5m.js";import"./PdfViewer-BK0S7NNW.js";import"./PdfViewer.module.css-CyAt2V82.js";import"./PdfViewerAnnotationLayer-B4qWMhZa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFE8T_oF.js";import"./PdfViewerOutlineSidebar-BRSHsTXZ.js";import"./PdfViewerSidebarHeader-DZ1mYT3s.js";import"./useBaseUiId-BfxjoMWT.js";import"./useControlled-DdUaVlhi.js";import"./CompositeRoot-BFcEPN85.js";import"./CompositeItem-DWSmEBV1.js";import"./ToolbarRootContext-DmbNoojd.js";import"./composite-cfOgAKY3.js";import"./svgIconContainer-knuh2bP-.js";import"./PdfViewerSearchBar-CQUYJH6u.js";import"./chevron-up-Bx6ORxij.js";import"./chevron-down-CMCQfOjD.js";import"./cross-Ex3v7yAY.js";import"./PdfViewerSidebar-FSCVSlC3.js";import"./index-m3p1lG2O.js";import"./index-Pgg50vLk.js";import"./index-D9X45JE7.js";import"./PdfViewerToolbar-Bauq_M7Z.js";import"./Button-C7yoanwN.js";import"./chevron-right-C2Amzcm_.js";import"./Input-D9StspzA.js";import"./search-B1p0IMpD.js";import"./spin-CpK_Cw5O.js";import"./error-68oFQ-J3.js";import"./withOsdkMetrics-Bg5F8JCY.js";import"./makeExternalStore-KDZTlrjP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
