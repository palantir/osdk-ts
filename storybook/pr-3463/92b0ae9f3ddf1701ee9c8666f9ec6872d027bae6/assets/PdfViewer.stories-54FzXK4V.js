import{j as r,M as s}from"./iframe-Bj1MEzZt.js";import{P as p}from"./pdf-viewer-DhJfnISf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBuWkZu6.js";import"./preload-helper-D1FTf2If.js";import"./PdfRenderer-BkitpqyJ.js";import"./index-DeSLIOWc.js";import"./PdfViewer-DQFjXTSH.js";import"./PdfViewer.module.css-DoyJVMFF.js";import"./PdfViewerAnnotationLayer-CIHQUTkR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8G1gQMW.js";import"./PdfViewerOutlineSidebar-p3rrL7Cy.js";import"./PdfViewerSidebarHeader-ZIi4E3mT.js";import"./useBaseUiId-BqpIS-F-.js";import"./useControlled-BsXhHg9D.js";import"./CompositeRoot-Br5bhIiu.js";import"./CompositeItem-lYV_12NC.js";import"./ToolbarRootContext-rh9b1pH4.js";import"./composite-Bi6Cj2uF.js";import"./svgIconContainer-DlmzthC9.js";import"./PdfViewerSearchBar-C44VUHc8.js";import"./chevron-up-SDwlIyNj.js";import"./chevron-down-CgyuwAZ7.js";import"./cross-0IJmXpL8.js";import"./PdfViewerSidebar-VAgmnjB0.js";import"./index-D22cm5dM.js";import"./index-XZ5d8N__.js";import"./index-CX0fm6C9.js";import"./PdfViewerToolbar-BYOGto5E.js";import"./Button-Bxx-3lnA.js";import"./chevron-right-CjJiiJNy.js";import"./Input-BjZAvpMy.js";import"./search-kif-7SC4.js";import"./spin-CPE4rgYO.js";import"./error-I_yYOMPz.js";import"./withOsdkMetrics-BQyhZxiE.js";import"./makeExternalStore-CO194rEb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
