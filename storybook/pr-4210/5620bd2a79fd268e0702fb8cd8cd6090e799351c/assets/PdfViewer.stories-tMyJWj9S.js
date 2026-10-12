import{j as r,M as s}from"./iframe-BONzVWWn.js";import{P as p}from"./pdf-viewer-D7bkwtT5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dg0G4-y1.js";import"./preload-helper-7aKcYg0W.js";import"./PdfViewer-CzTz7T2A.js";import"./index-CKzfCYwc.js";import"./BasePdfViewer-DQNrtu0k.js";import"./BasePdfViewer.module.css-Cc31IT2J.js";import"./PdfViewerAnnotationLayer-D1eje8fn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJH3RdTz.js";import"./PdfViewerOutlineSidebar-CjtHWFAy.js";import"./PdfViewerSidebarHeader-BcEQ4mY-.js";import"./useBaseUiId-BJIDGoJB.js";import"./useControlled-DfXv_ef9.js";import"./CompositeRoot-DxZhRY5Y.js";import"./CompositeItem-DSj43NsN.js";import"./ToolbarRootContext-BfDhsqcy.js";import"./composite-B6XHh7WQ.js";import"./svgIconContainer-BsJGio94.js";import"./PdfViewerSearchBar-DLerzGm5.js";import"./chevron-up-CbBFz0gR.js";import"./chevron-down-BlXmNLUg.js";import"./cross-OaYSvrNf.js";import"./PdfViewerSidebar-EYVWCTew.js";import"./index-oXf2-ktg.js";import"./index-BbYgoHFg.js";import"./index-D15FDZn2.js";import"./PdfViewerToolbar-DEcznxVc.js";import"./Button-BME0vzML.js";import"./chevron-right-6yYjRRFY.js";import"./Input-XtFGCQpB.js";import"./search-C37N2Xt5.js";import"./spin-DENwnryn.js";import"./error-DyHZRqpD.js";import"./withOsdkMetrics-CJnYGCPE.js";import"./makeExternalStore-B5wjJeG4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
