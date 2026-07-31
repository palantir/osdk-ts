import{j as r,M as s}from"./iframe-J2J3YjE0.js";import{P as p}from"./pdf-viewer-7nydl0Ln.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-N1r2uHIE.js";import"./preload-helper-DSYd8WXZ.js";import"./PdfRenderer-C2xSsLLj.js";import"./index-BE32fXoe.js";import"./PdfViewer-CQWpenAy.js";import"./PdfViewer.module.css-B6GZ6HHD.js";import"./PdfViewerAnnotationLayer-3M8m1fXI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3jZsvrz.js";import"./PdfViewerOutlineSidebar-CiZEOSqr.js";import"./PdfViewerSidebarHeader-CnkaMjXM.js";import"./useBaseUiId-B5sE9yG5.js";import"./useControlled-DPJfrFUK.js";import"./CompositeRoot-CHQoyo_o.js";import"./CompositeItem-fqkCbF8k.js";import"./ToolbarRootContext-DjaLauMl.js";import"./composite-lU6DBoNY.js";import"./svgIconContainer-DBFfWUAc.js";import"./PdfViewerSearchBar-CLl8VgKL.js";import"./chevron-up-DCC666Iz.js";import"./chevron-down-BIUs-Nx1.js";import"./cross-BUvQ63LS.js";import"./PdfViewerSidebar-DChCnxBe.js";import"./index-CpYQjE-4.js";import"./index-Cm0SXZ2J.js";import"./index-CIPMrj_t.js";import"./PdfViewerToolbar-hOzv3oFy.js";import"./Button-DUn4JLDk.js";import"./chevron-right-BbAAz6i4.js";import"./Input-Cf887hhU.js";import"./search-BPhUZmyj.js";import"./spin-ClYR-YsO.js";import"./error-BkUEB81u.js";import"./withOsdkMetrics-BiH7dj1l.js";import"./makeExternalStore-DXZk6z9e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
