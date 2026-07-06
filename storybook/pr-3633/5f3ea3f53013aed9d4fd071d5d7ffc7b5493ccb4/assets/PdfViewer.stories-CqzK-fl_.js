import{j as r,M as s}from"./iframe-BEmkZ3ff.js";import{P as p}from"./pdf-viewer-CXslGWbE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CuvclSW1.js";import"./preload-helper-CNtzpMaq.js";import"./PdfRenderer-Bqr_juCB.js";import"./index-C4UFfi4B.js";import"./PdfViewer-hFN8ecLI.js";import"./PdfViewer.module.css-DX6E4nld.js";import"./PdfViewerAnnotationLayer-D0DrHaoP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-sVTSb6Lv.js";import"./PdfViewerOutlineSidebar-vvmG1ox-.js";import"./PdfViewerSidebarHeader-DRDoyPgm.js";import"./useBaseUiId-CEjFwGxk.js";import"./useControlled-CWNAEnN0.js";import"./CompositeRoot-BQL7RHXp.js";import"./CompositeItem-CAYXJML2.js";import"./ToolbarRootContext-DTLub2Sz.js";import"./composite-Bwd1Pcuu.js";import"./svgIconContainer-CNWOtq2C.js";import"./PdfViewerSearchBar-D9RyM3q9.js";import"./chevron-up-DVLb0Rp5.js";import"./chevron-down-BmFX2t00.js";import"./cross-BKrU6WHy.js";import"./PdfViewerSidebar-BLdZIC6j.js";import"./index-781EsoxY.js";import"./index-e9UuKvsn.js";import"./index-DrahqdEN.js";import"./PdfViewerToolbar-CsV6r9Af.js";import"./Button-Cyn2vX47.js";import"./chevron-right-CErxXfUG.js";import"./Input-DOxL2DIQ.js";import"./search-D5PjLpCP.js";import"./spin-BYctTv4P.js";import"./error-BhrLyymv.js";import"./withOsdkMetrics-CAQDnSyn.js";import"./makeExternalStore-BQ55cuhe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
