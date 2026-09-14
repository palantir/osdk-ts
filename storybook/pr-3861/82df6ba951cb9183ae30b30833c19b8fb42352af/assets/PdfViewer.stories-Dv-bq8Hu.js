import{j as r,M as s}from"./iframe-D3x4g0gw.js";import{P as p}from"./pdf-viewer-BvX5QXW9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bn1SX-rx.js";import"./preload-helper-DpKiFXQE.js";import"./PdfViewer-Ie_IrTCF.js";import"./index-DmJVhxkC.js";import"./BasePdfViewer-DiMnTZje.js";import"./BasePdfViewer.module.css-CQsOZOl-.js";import"./PdfViewerAnnotationLayer-CmDbXPOQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pW4O-s2q.js";import"./PdfViewerOutlineSidebar-B4p6Cyu1.js";import"./PdfViewerSidebarHeader-BNhNgvyU.js";import"./useBaseUiId-Cza7NB65.js";import"./useControlled-u8Kd9MbQ.js";import"./CompositeRoot-deDqMk6G.js";import"./CompositeItem-C81j0gfv.js";import"./ToolbarRootContext-D-JTlGY6.js";import"./composite-CbVzOtkL.js";import"./svgIconContainer-Ch07AZiN.js";import"./PdfViewerSearchBar-UqxQPFEi.js";import"./chevron-up-DgNf9jm_.js";import"./chevron-down-F1u7ETIP.js";import"./cross-noZD8yCQ.js";import"./PdfViewerSidebar-CohlEd-t.js";import"./index-CdtIJVqT.js";import"./index-BFwtMTR7.js";import"./index-CHX_y3YQ.js";import"./PdfViewerToolbar-C4xXbXyn.js";import"./Button-waIQuOK_.js";import"./chevron-right-CVwy8LAz.js";import"./Input-D7XVlSnc.js";import"./search-Vpq8vYa6.js";import"./spin-B5ZPu_Yg.js";import"./error-EOjqK743.js";import"./withOsdkMetrics-q2ysVhnq.js";import"./makeExternalStore-B-EBN1-5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
