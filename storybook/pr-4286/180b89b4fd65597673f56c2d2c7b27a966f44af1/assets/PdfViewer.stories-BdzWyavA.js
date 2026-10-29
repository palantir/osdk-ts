import{j as r,M as s}from"./iframe-IwlSs7RL.js";import{P as p}from"./pdf-viewer-dramTYI0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B0GLsXum.js";import"./preload-helper-BSkCOlkQ.js";import"./PdfViewer-CKleNfUl.js";import"./index-DubGe8n8.js";import"./BasePdfViewer-yzglnOyA.js";import"./BasePdfViewer.module.css-Dyp2rnhI.js";import"./PdfViewerAnnotationLayer-BoR-oZHR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVtKKwJB.js";import"./PdfViewerOutlineSidebar-BQQuXPxl.js";import"./PdfViewerSidebarHeader-CPyz30Lv.js";import"./useBaseUiId-C6iBuDel.js";import"./useControlled-DHwVcrm_.js";import"./CompositeRoot-B1eb18Ue.js";import"./CompositeItem-Co7hhhjf.js";import"./ToolbarRootContext-C2NTNe0y.js";import"./composite-BhDLSWJq.js";import"./svgIconContainer-CxRFzvkj.js";import"./PdfViewerSearchBar-CEL_GK9f.js";import"./chevron-up-ymAIul9l.js";import"./chevron-down-DkOqeyC-.js";import"./cross-QYKhi7EM.js";import"./PdfViewerSidebar-Cw2vBvga.js";import"./index-Bu0grvIG.js";import"./index-Dtiq40Ku.js";import"./index-rVQQDG8n.js";import"./PdfViewerToolbar-B9S-c72E.js";import"./Button-v4BAXuzD.js";import"./chevron-right-B_To7F27.js";import"./Input-DEK2jxOA.js";import"./search-B6kXKBbQ.js";import"./spin-BzxAwAe3.js";import"./error-IBUuPrgD.js";import"./withOsdkMetrics-DC0QMqM3.js";import"./makeExternalStore-x7dSpV5j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
