import{j as r,M as s}from"./iframe-DKbJD91Q.js";import{P as p}from"./pdf-viewer-C_1qTL9Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DDaUe52u.js";import"./preload-helper-DqUkcmYs.js";import"./PdfRenderer-Da_yWf0k.js";import"./index-Bngq8Vi1.js";import"./PdfViewer-B_8cgCAm.js";import"./PdfViewer.module.css-BSV_Twzp.js";import"./PdfViewerAnnotationLayer-DZuiLL6M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CmKpwSLs.js";import"./PdfViewerOutlineSidebar-B3bnYSz2.js";import"./PdfViewerSidebarHeader-BZSO_D-Y.js";import"./useBaseUiId-BYQ6OaKE.js";import"./useControlled-Cz4_lCzM.js";import"./CompositeRoot-DZVDDVaq.js";import"./CompositeItem-BeSf6rF_.js";import"./ToolbarRootContext-nYK4s239.js";import"./composite-B4mRtSK_.js";import"./svgIconContainer-4juTmAGa.js";import"./PdfViewerSearchBar-EwAeqw7U.js";import"./chevron-up-C0iTdjqN.js";import"./chevron-down-CO9asE2V.js";import"./cross-DbPHs0j6.js";import"./PdfViewerSidebar-BEP-Mu1u.js";import"./index-CpBu1bAg.js";import"./index-ClmDs36c.js";import"./index-qEUIoyPR.js";import"./PdfViewerToolbar-Czglj1oe.js";import"./Button-BKABdA37.js";import"./chevron-right-CvoOupM6.js";import"./Input-Cse94nI4.js";import"./search-BII4tWc4.js";import"./spin-BWtUAEPV.js";import"./error-5yLXSKBF.js";import"./withOsdkMetrics-CuRRWFHy.js";import"./makeExternalStore-B_vkRC4b.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
