import{j as r,M as s}from"./iframe-Cw9nAJHw.js";import{P as p}from"./pdf-viewer-D70onj1Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cv9Jk7pg.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DXkq1feR.js";import"./index-C9NZ706V.js";import"./PdfViewer-D7FtpxVq.js";import"./PdfViewer.module.css-C_Wrqw0R.js";import"./PdfViewerAnnotationLayer-CNdRX2BR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSa3Ya3b.js";import"./PdfViewerOutlineSidebar-BwJHAKj_.js";import"./PdfViewerSidebarHeader-DrAcXGmh.js";import"./useBaseUiId-BdmbP2Th.js";import"./useControlled-DpXUPY6h.js";import"./CompositeRoot-BmsbXxXY.js";import"./CompositeItem-CFzVlRYW.js";import"./ToolbarRootContext-BhufIJhp.js";import"./composite-DfioEurU.js";import"./svgIconContainer-BeQlV-NB.js";import"./PdfViewerSearchBar-9KKXU399.js";import"./chevron-up-CtShxazI.js";import"./chevron-down-wb7CIeFV.js";import"./cross-DC9OR73d.js";import"./PdfViewerSidebar-DKWLBehQ.js";import"./index-D7Y8Yzf2.js";import"./index-DL9w9at2.js";import"./index-B4WhUvaf.js";import"./PdfViewerToolbar-QtiBgcVd.js";import"./Button-BXdkJeBS.js";import"./chevron-right-BIEFDov_.js";import"./Input-BP-w5iIg.js";import"./search-EiPBjO7o.js";import"./spin-c-PVg6_U.js";import"./error-B4eMuMy9.js";import"./withOsdkMetrics-C4R0qJmr.js";import"./makeExternalStore-pQyd7T6K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
