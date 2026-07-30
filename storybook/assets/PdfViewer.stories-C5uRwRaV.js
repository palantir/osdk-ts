import{j as r,M as s}from"./iframe-DPgxuER0.js";import{P as p}from"./pdf-viewer-PAVoeQxo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CPqPAVXV.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-CA5MNEpR.js";import"./index-CzdpyvEq.js";import"./PdfViewer-914F3bh-.js";import"./PdfViewer.module.css-Iyt8fCWA.js";import"./PdfViewerAnnotationLayer-DRTk2aqm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CGE1vz72.js";import"./PdfViewerOutlineSidebar-C_rSmI-j.js";import"./PdfViewerSidebarHeader-DizFzvyA.js";import"./useBaseUiId-Cm7I4H2e.js";import"./useControlled-s_RTodc2.js";import"./CompositeRoot-BxfVWErX.js";import"./CompositeItem-BfVRyH-B.js";import"./ToolbarRootContext-oAgSrQkI.js";import"./composite-Clt5qWfu.js";import"./svgIconContainer-DIzi4zOb.js";import"./PdfViewerSearchBar-Cmaf7UbH.js";import"./chevron-up-CHyuFcVd.js";import"./chevron-down-4z7FVQbP.js";import"./cross-BwNaZ3E7.js";import"./PdfViewerSidebar-CCn7ui3d.js";import"./index-SQJSmql8.js";import"./index-utaNrd3G.js";import"./index-d7FyALzm.js";import"./PdfViewerToolbar-DTU_jfJD.js";import"./Button-DEiS8xLS.js";import"./chevron-right-aPr4Kxrp.js";import"./Input-Fe8hZ5NZ.js";import"./search-W4SNOJCm.js";import"./spin-CPIK-9bM.js";import"./error-rSfsp2Ux.js";import"./withOsdkMetrics-C_HRjZ2a.js";import"./makeExternalStore-DacpQJm5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
