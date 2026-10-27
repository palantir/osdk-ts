import{j as r,M as s}from"./iframe-DuF9ULT7.js";import{P as p}from"./pdf-viewer-BimglMS-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZuWM1I-.js";import"./preload-helper-kD_tsguj.js";import"./PdfViewer-CH5LQ9NH.js";import"./index-muXsy8in.js";import"./BasePdfViewer-QBUw4mc_.js";import"./BasePdfViewer.module.css-CQ1A9H6H.js";import"./PdfViewerAnnotationLayer-Dg4AkEKb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXMK4o_B.js";import"./PdfViewerOutlineSidebar-Dj1BO6kr.js";import"./PdfViewerSidebarHeader-BuQrB7U8.js";import"./useBaseUiId-toBz8Uh9.js";import"./useControlled-DjU5snnM.js";import"./CompositeRoot-DEZnosv4.js";import"./CompositeItem-lLhT8JrE.js";import"./ToolbarRootContext-4pjZNXLZ.js";import"./composite-B1SRd4gq.js";import"./svgIconContainer-Cg0DvcJX.js";import"./PdfViewerSearchBar-d3Awz-6N.js";import"./chevron-up-B6G1dmfK.js";import"./chevron-down-CaPJ8T2H.js";import"./cross-CWdW2uUC.js";import"./PdfViewerSidebar-QWTYREs7.js";import"./index-B-a6xU5p.js";import"./index-CQs0rdO8.js";import"./index-DaCqd03Q.js";import"./PdfViewerToolbar-C5IwIoQR.js";import"./Button-BZjuNt0h.js";import"./chevron-right-CsOE-aZO.js";import"./Input-Cz82mbXb.js";import"./search-BijdxR6R.js";import"./spin-C1pqDeAk.js";import"./error-BLlGlY0w.js";import"./withOsdkMetrics-BCYo5O_x.js";import"./makeExternalStore-BjN8YBiO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
