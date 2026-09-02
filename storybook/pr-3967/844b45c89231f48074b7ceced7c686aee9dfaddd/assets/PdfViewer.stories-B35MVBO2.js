import{j as r,M as s}from"./iframe-BDYkqvKe.js";import{P as p}from"./pdf-viewer-DcmBBB3U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BGmiGYiE.js";import"./preload-helper-C36rJOAe.js";import"./PdfViewer-BXR2DtqI.js";import"./index-BRka1pCh.js";import"./BasePdfViewer-B7qSOOyp.js";import"./BasePdfViewer.module.css-Ccqmwl5R.js";import"./PdfViewerAnnotationLayer-CkXk4-AT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSc3APvi.js";import"./PdfViewerOutlineSidebar-BBNUSm91.js";import"./PdfViewerSidebarHeader-BC745d2p.js";import"./useBaseUiId-UK_jdfAB.js";import"./useControlled-ByKl2Iuv.js";import"./CompositeRoot-hQme7DiO.js";import"./CompositeItem-CU4sB2os.js";import"./ToolbarRootContext-CxcdMdex.js";import"./composite-BODYGvTF.js";import"./svgIconContainer-CCyU9VHa.js";import"./PdfViewerSearchBar-vDwfEQSt.js";import"./chevron-up-Cwik0Otu.js";import"./chevron-down-DpmU34Wb.js";import"./cross-BjNcEcWu.js";import"./PdfViewerSidebar-KPkJXe2N.js";import"./index-DQIJwSCX.js";import"./index-F-0Lu3oA.js";import"./index-DMkY-4jo.js";import"./PdfViewerToolbar-UARv9hIC.js";import"./Button-CIPwZs7k.js";import"./chevron-right-sE91rae_.js";import"./Input-BR9BGUIw.js";import"./search-CSsyQg3w.js";import"./spin-CGmdgejP.js";import"./error-BUARWoS0.js";import"./withOsdkMetrics-BDaIIid_.js";import"./makeExternalStore-CG2NmNwS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
