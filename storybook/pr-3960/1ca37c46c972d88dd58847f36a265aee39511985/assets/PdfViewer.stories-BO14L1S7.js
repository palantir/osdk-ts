import{j as r,M as s}from"./iframe-NaI848Pw.js";import{P as p}from"./pdf-viewer-DKA3SoJD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BevqVQ0d.js";import"./preload-helper-Da-cK7y6.js";import"./PdfViewer-BfHuwms7.js";import"./index-ByD4yBnp.js";import"./BasePdfViewer-CiW12tNC.js";import"./BasePdfViewer.module.css-Dmx2DMn5.js";import"./PdfViewerAnnotationLayer-BcMsJpvI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtMCFuEM.js";import"./PdfViewerOutlineSidebar-Rx_hSQpL.js";import"./PdfViewerSidebarHeader-CmFTZ2tz.js";import"./useBaseUiId-1fZcoCV9.js";import"./useControlled-DJRTNEAD.js";import"./CompositeRoot-2QU8AYPf.js";import"./CompositeItem-Ci20bb3i.js";import"./ToolbarRootContext-wPP71u3n.js";import"./composite-C-xyZ2AO.js";import"./svgIconContainer-ByuHBSGQ.js";import"./PdfViewerSearchBar-CATqpRnn.js";import"./chevron-up-BaGph6J4.js";import"./chevron-down-Cd6DrKf8.js";import"./cross-DZQZ8aN4.js";import"./PdfViewerSidebar-DUOo_CLn.js";import"./index-C7BYYXHx.js";import"./index-DK-1aFjN.js";import"./index-uEx2XW2m.js";import"./PdfViewerToolbar-lSXk2o4z.js";import"./Button-C5kZ5tdC.js";import"./chevron-right-CodSR72c.js";import"./Input-CiWsOGB4.js";import"./search-BU5VoOWM.js";import"./spin-B4GXn-FA.js";import"./error-DzctpUji.js";import"./withOsdkMetrics-Bsb41CEs.js";import"./makeExternalStore-BKziC80i.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
