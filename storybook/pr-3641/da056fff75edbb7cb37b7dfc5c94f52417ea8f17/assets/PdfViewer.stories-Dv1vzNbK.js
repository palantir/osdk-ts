import{j as r,M as s}from"./iframe-DjWEGpk8.js";import{P as p}from"./pdf-viewer-eciMK-et.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BsBFE27I.js";import"./preload-helper-BAHRqZH1.js";import"./PdfRenderer-Dp7AWMH3.js";import"./index-B0J2oloL.js";import"./PdfViewer-Fo6bMUsy.js";import"./PdfViewer.module.css-CEHuqVaT.js";import"./PdfViewerAnnotationLayer-D-_X5UhM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW8bTbtQ.js";import"./PdfViewerOutlineSidebar-DOYGd-zQ.js";import"./PdfViewerSidebarHeader-DqPMRInL.js";import"./useBaseUiId-C6DI0XE1.js";import"./useControlled-KCs2l9tZ.js";import"./CompositeRoot-uel9rH6_.js";import"./CompositeItem-B4cf-cNw.js";import"./ToolbarRootContext-DxpLqVDl.js";import"./composite-BULlram9.js";import"./svgIconContainer-ChJBE8wb.js";import"./PdfViewerSearchBar-BqVViUFC.js";import"./chevron-up-CesD0sOk.js";import"./chevron-down-Cd8NUspS.js";import"./cross-1GRRH7fD.js";import"./PdfViewerSidebar-BHNtYQG2.js";import"./index-D_5VaQZ7.js";import"./index-CTG58gzT.js";import"./index-BujzDHnP.js";import"./PdfViewerToolbar-Bjuo3uKz.js";import"./Button-27VpsVpI.js";import"./chevron-right-6joMdZu_.js";import"./Input-NTx547BW.js";import"./search-BkB5KxBe.js";import"./spin-CjG_ytcP.js";import"./error-w3xuhRXw.js";import"./withOsdkMetrics-B5E9_Z7n.js";import"./makeExternalStore-4k5CuekG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
