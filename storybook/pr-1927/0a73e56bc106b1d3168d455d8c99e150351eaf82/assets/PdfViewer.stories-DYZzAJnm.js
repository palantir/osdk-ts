import{j as r,M as s}from"./iframe-DWzyCbmQ.js";import{P as p}from"./pdf-viewer-Cu9P2dbH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6oYvJ5p.js";import"./preload-helper-2jyftVZw.js";import"./PdfRenderer-oNv8D6oV.js";import"./index-Cqwfu9kN.js";import"./PdfViewer-U3ANCQ1f.js";import"./PdfViewer.module.css-D9VQ1aBR.js";import"./PdfViewerAnnotationLayer-CNQh4IDG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bs3l_s9c.js";import"./PdfViewerOutlineSidebar-Cfc230n8.js";import"./PdfViewerSidebarHeader-C7QasbnQ.js";import"./useBaseUiId-b2rVpvoU.js";import"./useControlled-BLqnPlES.js";import"./CompositeRoot-DxQB53JF.js";import"./CompositeItem-Cg2la_5O.js";import"./ToolbarRootContext-CVS0gqd_.js";import"./composite-BeGq1JGD.js";import"./svgIconContainer-BK_aTV-8.js";import"./PdfViewerSearchBar-Dd4wPrxl.js";import"./chevron-up-DYoz7Pmt.js";import"./chevron-down-CbMtKpux.js";import"./cross-jZI8Hr1l.js";import"./PdfViewerSidebar-aXMmCVlK.js";import"./index-X_CuuTrt.js";import"./index-BMaMWApL.js";import"./index-DLztW5cy.js";import"./PdfViewerToolbar-B5J8ppEU.js";import"./Button-BSivVUu-.js";import"./chevron-right-DcTMsBJa.js";import"./Input-YoY-WOGN.js";import"./search-Bri7tWXH.js";import"./spin-D0vl7IRe.js";import"./error-CexwmIKl.js";import"./withOsdkMetrics-CvyFQccR.js";import"./makeExternalStore-B2gIhY2Q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
