import{j as r,M as s}from"./iframe-7zkNpsTb.js";import{P as p}from"./pdf-viewer-BDl7yCMs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-hhiBr0JU.js";import"./preload-helper-BcwadNu2.js";import"./PdfViewer-CHBZ3TNu.js";import"./index-D2Ps7yda.js";import"./BasePdfViewer-b6HQa6SK.js";import"./BasePdfViewer.module.css-C6N2ZRcO.js";import"./PdfViewerAnnotationLayer-3tZEV9aJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAW8hixQ.js";import"./PdfViewerOutlineSidebar-D7rzS3e2.js";import"./PdfViewerSidebarHeader-BK6IijnF.js";import"./useBaseUiId-KSlThZEb.js";import"./useControlled-CgLNclS7.js";import"./CompositeRoot-_klf7eT0.js";import"./CompositeItem-B9MRs6kj.js";import"./ToolbarRootContext-DK5I1UJe.js";import"./composite-BrxcTD8Y.js";import"./svgIconContainer-WZg9oowH.js";import"./PdfViewerSearchBar-FOVASGh6.js";import"./chevron-up--u-AHcXJ.js";import"./chevron-down-R1agRcMd.js";import"./cross-CuqDFG72.js";import"./PdfViewerSidebar-fYIHRbvE.js";import"./index-Bav8Bbwa.js";import"./index-CVa5QU3-.js";import"./index-DD_YShHf.js";import"./PdfViewerToolbar-WVnghrU1.js";import"./Button-CF1rIE6I.js";import"./chevron-right-DYbWgAyo.js";import"./Input-Qt7qv0fd.js";import"./search-LTMAICSm.js";import"./spin-Dl9SFnp8.js";import"./error-CKvp5L_L.js";import"./withOsdkMetrics-BuwNXHNi.js";import"./makeExternalStore-DZpAF_p8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
