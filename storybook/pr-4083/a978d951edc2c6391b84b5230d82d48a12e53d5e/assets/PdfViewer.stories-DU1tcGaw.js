import{j as r,M as s}from"./iframe-D-ZGqhox.js";import{P as p}from"./pdf-viewer-BvIrkjhB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ctBeM8x8.js";import"./preload-helper-BHmHhg6q.js";import"./PdfViewer-MB_aVqJn.js";import"./index-DMbZcvzJ.js";import"./BasePdfViewer-YR5iHOmU.js";import"./BasePdfViewer.module.css-DCBYipMJ.js";import"./PdfViewerAnnotationLayer-CDvu-M8w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcxlFQuP.js";import"./PdfViewerOutlineSidebar-BkRlL9IQ.js";import"./PdfViewerSidebarHeader-BMCCsRnG.js";import"./useBaseUiId-UHE7cq6V.js";import"./useControlled-DZViTlY6.js";import"./CompositeRoot-BOyjU3DD.js";import"./CompositeItem-BUGdCkRP.js";import"./ToolbarRootContext-C0KaRFai.js";import"./composite-BwjOgotZ.js";import"./svgIconContainer-DynaZTrl.js";import"./PdfViewerSearchBar-CRgUoo2M.js";import"./chevron-up-Bvk8StUb.js";import"./chevron-down-TA05iMki.js";import"./cross-C-5SE6cr.js";import"./PdfViewerSidebar-E6YR5HR7.js";import"./index-DtE8_iZZ.js";import"./index-LOlNiB8m.js";import"./index-BaNxBZm4.js";import"./PdfViewerToolbar-DVZ6D1xU.js";import"./Button-BX_hSGAP.js";import"./chevron-right-BS_SSOa9.js";import"./Input-Cb6mwwI7.js";import"./search-Df3zpGfV.js";import"./spin-CAsM2OKY.js";import"./error-I7Ps8uLh.js";import"./withOsdkMetrics-CNUwJgZ9.js";import"./makeExternalStore-BUNud_OP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
