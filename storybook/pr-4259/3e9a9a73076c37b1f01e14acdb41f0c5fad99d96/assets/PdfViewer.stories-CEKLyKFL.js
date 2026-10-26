import{j as r,M as s}from"./iframe-DOyQxJvH.js";import{P as p}from"./pdf-viewer-C7HxI8iU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BB7w5kj6.js";import"./preload-helper-b99Wj4jj.js";import"./PdfViewer-yQtwlpzO.js";import"./index-DohetWl-.js";import"./BasePdfViewer-DNDYjj-M.js";import"./BasePdfViewer.module.css-Deosd6Gc.js";import"./PdfViewerAnnotationLayer-DH2QJP4K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qWzkaCw9.js";import"./PdfViewerOutlineSidebar-BTJjlorF.js";import"./PdfViewerSidebarHeader-Clpv_bqJ.js";import"./useBaseUiId-DieRYZnL.js";import"./useControlled-D5_WZpq_.js";import"./CompositeRoot-wSabjYIu.js";import"./CompositeItem-CClLQtRU.js";import"./ToolbarRootContext-CL9w8adf.js";import"./composite-ZJn0pY0h.js";import"./svgIconContainer-B_aagRLN.js";import"./PdfViewerSearchBar-B2vBnrLi.js";import"./chevron-up-C-SNZvwn.js";import"./chevron-down-CHciOX2j.js";import"./cross-Clcl0FW-.js";import"./PdfViewerSidebar-DjyBgQBE.js";import"./index-jxIBoeRQ.js";import"./index-BPvIlRyU.js";import"./index-Bj0URVYm.js";import"./PdfViewerToolbar-DoZv7pIS.js";import"./Button-Siw5hwdL.js";import"./chevron-right-Bj-wagne.js";import"./Input-1EVSbUy3.js";import"./search-CFvqb_6m.js";import"./spin-MkINCfA2.js";import"./error-CImoxm8w.js";import"./withOsdkMetrics-CkKOCKYX.js";import"./makeExternalStore-C8fED8Be.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
