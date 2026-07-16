import{j as r,M as s}from"./iframe-BQVGbu2k.js";import{P as p}from"./pdf-viewer-BvhY_4TO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8bPRiJ6.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-C4XiCowN.js";import"./index-UjJLQ6cm.js";import"./PdfViewer-C4ulS86p.js";import"./PdfViewer.module.css-DSkwUVC-.js";import"./PdfViewerAnnotationLayer-H-6sB3X3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXtYP4b5.js";import"./PdfViewerOutlineSidebar-Dew4yt-7.js";import"./PdfViewerSidebarHeader-tme4Mv46.js";import"./useBaseUiId-ITjE-Rop.js";import"./useControlled-jw0vZUxO.js";import"./CompositeRoot-DU21DKzc.js";import"./CompositeItem-BDrCuzn_.js";import"./ToolbarRootContext-BOIrYkCq.js";import"./composite-DWUjzrFv.js";import"./svgIconContainer-DtRLntwQ.js";import"./PdfViewerSearchBar-DuPxotcB.js";import"./chevron-up-ez-AA-kS.js";import"./chevron-down-BeSKiCuv.js";import"./cross-BY7NjonN.js";import"./PdfViewerSidebar-BySMdb-5.js";import"./index-B6njuCdz.js";import"./index-C2Nrwejt.js";import"./index-aze0ecBd.js";import"./PdfViewerToolbar-D8Sdq9lE.js";import"./Button-BlwOAbpp.js";import"./chevron-right-BZAWsPkb.js";import"./Input-CTofJ1Il.js";import"./search-yNRsiLRX.js";import"./spin-_D2f6MeR.js";import"./error-DfudzLdK.js";import"./withOsdkMetrics-iKiCFPY5.js";import"./makeExternalStore-rvCXuzIs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
