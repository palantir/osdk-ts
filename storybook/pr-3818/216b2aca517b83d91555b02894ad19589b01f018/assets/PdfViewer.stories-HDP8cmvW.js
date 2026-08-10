import{j as r,M as s}from"./iframe-DLfRO3Lg.js";import{P as p}from"./pdf-viewer-DgoEX5bl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_O8bIPT.js";import"./preload-helper-Bdf9-Z3s.js";import"./PdfRenderer-B1hMmw68.js";import"./index-BqYFiItS.js";import"./PdfViewer-CPc86VZO.js";import"./PdfViewer.module.css-CGADuTcQ.js";import"./PdfViewerAnnotationLayer-D2QLbhlb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-PCM4-d.js";import"./PdfViewerOutlineSidebar-DS1Z-Oos.js";import"./PdfViewerSidebarHeader-BHyHQYFD.js";import"./useBaseUiId-Pd_dUfv7.js";import"./useControlled-D944oDES.js";import"./CompositeRoot-D6y0HBtR.js";import"./CompositeItem-BB7BEcYe.js";import"./ToolbarRootContext-BUhsl4O4.js";import"./composite-DjVE7iON.js";import"./svgIconContainer-D-_aLtNj.js";import"./PdfViewerSearchBar-DXFBUbfh.js";import"./chevron-up-BHkowm1-.js";import"./chevron-down-Ca7o4DzB.js";import"./cross-CwX8lo9D.js";import"./PdfViewerSidebar-X-mt67Va.js";import"./index-BT-0esWW.js";import"./index-BxNcLRzx.js";import"./index-CZtPOQqE.js";import"./PdfViewerToolbar-De8jU6b2.js";import"./Button-DIC9pYqS.js";import"./chevron-right-BO5p5IbO.js";import"./Input-CHaXSXBK.js";import"./search-B8OuVE4x.js";import"./spin-o73b4VA6.js";import"./error-2D9zNcfs.js";import"./withOsdkMetrics-3Zji6GBR.js";import"./makeExternalStore-BRKvb-bN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
