import{j as r,M as s}from"./iframe-CWkABBma.js";import{P as p}from"./pdf-viewer-CJ-Z0iin.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DPejZ0oz.js";import"./preload-helper-DQRRuufD.js";import"./PdfRenderer-CHcUND0a.js";import"./index-3ehC8OdM.js";import"./PdfViewer-BSgygcHK.js";import"./PdfViewer.module.css-DAaQQONI.js";import"./PdfViewerAnnotationLayer-CTW0H1p8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeEunScZ.js";import"./PdfViewerOutlineSidebar-DkTxBVVh.js";import"./PdfViewerSidebarHeader-BHOwmiKX.js";import"./useBaseUiId-CPgz5i84.js";import"./useControlled-DYSGp6Q0.js";import"./CompositeRoot-C9d0-YCs.js";import"./CompositeItem-0Boub15Y.js";import"./ToolbarRootContext-BK7_v0HT.js";import"./composite-B06WlP90.js";import"./svgIconContainer-D5adoGHw.js";import"./PdfViewerSearchBar-CUjgN5Yo.js";import"./chevron-up-nL5BjdQD.js";import"./chevron-down-HsrWGWGQ.js";import"./cross-BGjCAIVz.js";import"./PdfViewerSidebar-BfdNUdM5.js";import"./index-CgKDqhfF.js";import"./index-gt44mxyL.js";import"./index-CtzvA1bZ.js";import"./PdfViewerToolbar-uo_BHAbd.js";import"./Button-CWqRBSs3.js";import"./chevron-right-YnZ28MwZ.js";import"./Input-CLhjhXb0.js";import"./search-B0C2G-JS.js";import"./spin-fGfT-9Y2.js";import"./error-DCDpRlQh.js";import"./withOsdkMetrics-B1J9h4Fq.js";import"./makeExternalStore-BC2H5EJJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
