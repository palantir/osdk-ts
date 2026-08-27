import{j as r,M as s}from"./iframe-h3cXleGN.js";import{P as p}from"./pdf-viewer-BkW8Vdeh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4out9M0.js";import"./preload-helper-BQEANbpx.js";import"./PdfViewer-cxibX2BR.js";import"./index-BDLfEa8e.js";import"./BasePdfViewer-csIS1rLk.js";import"./BasePdfViewer.module.css-PAKBH0in.js";import"./PdfViewerAnnotationLayer-C9_gAmIv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BOHta8PB.js";import"./PdfViewerOutlineSidebar-C2vE5Xhm.js";import"./PdfViewerSidebarHeader-C34NOQNa.js";import"./useBaseUiId-QnAE5tIH.js";import"./useControlled-eLMBNmJx.js";import"./CompositeRoot-CiD5hZGF.js";import"./CompositeItem-C-ehMRsr.js";import"./ToolbarRootContext-C2Gw-DxP.js";import"./composite-C4e_-FyQ.js";import"./svgIconContainer-Cgqw1YBP.js";import"./PdfViewerSearchBar-D6HOdmBO.js";import"./chevron-up-DXMYqfQo.js";import"./chevron-down-rZqsJyY-.js";import"./cross-BpOPwjmQ.js";import"./PdfViewerSidebar-Bi7l33n-.js";import"./index-CAJBKKlL.js";import"./index-k1u2DroK.js";import"./index-vao6BJxf.js";import"./PdfViewerToolbar-CtBZTzTY.js";import"./Button-DFiEOscG.js";import"./chevron-right-DdxrVecL.js";import"./Input-DMjR7I_H.js";import"./search-PbFTowl6.js";import"./spin-B91epf5M.js";import"./error-DtPjeO-n.js";import"./withOsdkMetrics-DXJIt81Q.js";import"./makeExternalStore-CiUy57je.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
