import{j as r,M as s}from"./iframe-CDGAWL5z.js";import{P as p}from"./pdf-viewer-Ue7_Nk4_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2ydBPKf_.js";import"./preload-helper-CI5YRKwA.js";import"./PdfRenderer-CliFkRou.js";import"./index-3MCsyJen.js";import"./PdfViewer-DDWLKRoq.js";import"./PdfViewer.module.css-BRunEXVg.js";import"./PdfViewerAnnotationLayer-Hd7qf6QA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9303DBGM.js";import"./PdfViewerOutlineSidebar-Pwo_0jM3.js";import"./PdfViewerSidebarHeader-BsteUopp.js";import"./useBaseUiId-DY77c4-A.js";import"./useControlled-xutsfVXO.js";import"./CompositeRoot-150sVoJl.js";import"./CompositeItem-Cl4JUDwX.js";import"./ToolbarRootContext-CTDwZ0pE.js";import"./composite-BFqrbf78.js";import"./svgIconContainer-Dcej3m5n.js";import"./PdfViewerSearchBar-CvCGhMXw.js";import"./chevron-up-BfVCD6QC.js";import"./chevron-down-dvsoYA_H.js";import"./cross-BeVSOrEe.js";import"./PdfViewerSidebar-DAs4AQ64.js";import"./index-CLEKU3H0.js";import"./index-BUnuXFxA.js";import"./index-CZEvu-cD.js";import"./PdfViewerToolbar-kX3V4fNJ.js";import"./Button-XNbmfuiS.js";import"./chevron-right-BMInuMqB.js";import"./Input-B1WQ9LTD.js";import"./search-BrgQI2y6.js";import"./spin-hJ6_37JW.js";import"./error-q7YHjSp-.js";import"./withOsdkMetrics-BT43AOFX.js";import"./makeExternalStore-ql6Iw7cR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
