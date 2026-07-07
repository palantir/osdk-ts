import{j as r,M as s}from"./iframe-D3CKr5be.js";import{P as p}from"./pdf-viewer-kDmtT7Dm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BXR6kQOI.js";import"./preload-helper-B5awx7sB.js";import"./PdfRenderer-DofWcc50.js";import"./index-DT_OOulh.js";import"./PdfViewer-BoaWllNI.js";import"./PdfViewer.module.css-B175AHJT.js";import"./PdfViewerAnnotationLayer-c9LpnR7B.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpXNACg4.js";import"./PdfViewerOutlineSidebar-TilyR75d.js";import"./PdfViewerSidebarHeader-CAoeLNfu.js";import"./useBaseUiId-BB2zq_sK.js";import"./useControlled-BYRQcG_V.js";import"./CompositeRoot-CV56PP05.js";import"./CompositeItem-vhDEoWF0.js";import"./ToolbarRootContext-BtDfLObj.js";import"./composite-GGrmPfDF.js";import"./svgIconContainer-LyTG78IX.js";import"./PdfViewerSearchBar-BL71jgZa.js";import"./chevron-up-CxMmJZvU.js";import"./chevron-down-Dd-yNw3n.js";import"./cross-DBwblYeB.js";import"./PdfViewerSidebar-DWw39QzT.js";import"./index-BKki-K1q.js";import"./index-B7l8vleV.js";import"./index-kbn_uatS.js";import"./PdfViewerToolbar-ZD-laOlw.js";import"./Button-PqUdWvif.js";import"./chevron-right-Jmfb0x_K.js";import"./Input-CE27sVF9.js";import"./search-OpReGLSF.js";import"./spin-hoAypZ8Y.js";import"./error-G5Oywtmt.js";import"./withOsdkMetrics-C90IKuPC.js";import"./makeExternalStore-CB7b6DBP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
