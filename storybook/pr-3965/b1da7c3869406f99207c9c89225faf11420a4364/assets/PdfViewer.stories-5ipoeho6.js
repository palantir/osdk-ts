import{j as r,M as s}from"./iframe-BfGhSrhj.js";import{P as p}from"./pdf-viewer-BXCryk9E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DViB8IwZ.js";import"./preload-helper-vxwuBi5M.js";import"./PdfViewer-DCYC8MKh.js";import"./index-BpzGyY_9.js";import"./BasePdfViewer-ycxkHedQ.js";import"./BasePdfViewer.module.css-Do1C5A3O.js";import"./PdfViewerAnnotationLayer-X77f-ncD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DD-ysrKM.js";import"./PdfViewerOutlineSidebar-a5xYeG2v.js";import"./PdfViewerSidebarHeader-CK8_auB-.js";import"./useBaseUiId-Crf4zNct.js";import"./useControlled-Cqj-8esb.js";import"./CompositeRoot-DXDfiXKW.js";import"./CompositeItem-6BwZmfcB.js";import"./ToolbarRootContext-CcKAs7gU.js";import"./composite-BgMCZbwS.js";import"./svgIconContainer-B7iRS6fY.js";import"./PdfViewerSearchBar-Cd5WxPGV.js";import"./chevron-up-pR3W0lnx.js";import"./chevron-down-CkhCniF6.js";import"./cross-Bn7q8aps.js";import"./PdfViewerSidebar-CLG8VgVU.js";import"./index-D5LJWRJq.js";import"./index-Bi5q9Arz.js";import"./index-DXdjOqiL.js";import"./PdfViewerToolbar-NBRASkre.js";import"./Button-CF2oqfBr.js";import"./chevron-right-C7r6xNUO.js";import"./Input-BfWLU8Yl.js";import"./search-ByYdnjPp.js";import"./spin-CyCKkwex.js";import"./error-CBS_ohw_.js";import"./withOsdkMetrics-DtIhmsVW.js";import"./makeExternalStore-s41uljGH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
