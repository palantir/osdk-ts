import{j as r,M as s}from"./iframe-CTuVWhxi.js";import{P as p}from"./pdf-viewer-B_-Ml1e1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BT29Wbd1.js";import"./preload-helper-C5f8MMsA.js";import"./PdfRenderer-BgP0OjFb.js";import"./index-pTof7JYZ.js";import"./PdfViewer-IkMyq7Nl.js";import"./PdfViewer.module.css-DQtWrL2G.js";import"./PdfViewerAnnotationLayer-CPiyzWJq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHd1sGjX.js";import"./PdfViewerOutlineSidebar-DVxFQE_5.js";import"./PdfViewerSidebarHeader-NXzqEl4u.js";import"./useBaseUiId-DE-xcgG4.js";import"./useControlled-ulluTzXP.js";import"./CompositeRoot-U1w_Tx-4.js";import"./CompositeItem-DQ4PmIbl.js";import"./ToolbarRootContext-CMHyw-yh.js";import"./composite-Bw1G9Kye.js";import"./svgIconContainer-BKWJam_3.js";import"./PdfViewerSearchBar-B9M5d3CC.js";import"./chevron-up-C9-3ga72.js";import"./chevron-down-v0A8ScL7.js";import"./cross-6rGq7VMg.js";import"./PdfViewerSidebar-Dr046uCw.js";import"./index-LF3Syxin.js";import"./index-BW4DslJD.js";import"./index-DD8TBGw5.js";import"./PdfViewerToolbar-CkJNsGkg.js";import"./Button-5J6F3z6F.js";import"./chevron-right-CHHGKsSR.js";import"./Input-De2G7Z6K.js";import"./search-CxRV-GkA.js";import"./spin-BfW2-qBW.js";import"./error-cZVWPVml.js";import"./withOsdkMetrics-BZmuG9a2.js";import"./makeExternalStore-BHoCWoeW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
