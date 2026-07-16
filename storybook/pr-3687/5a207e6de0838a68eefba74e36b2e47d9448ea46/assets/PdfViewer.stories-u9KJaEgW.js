import{j as r,M as s}from"./iframe-6ZbAZg8X.js";import{P as p}from"./pdf-viewer-BNulY0vD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CaahoPKY.js";import"./preload-helper-B9k1kqSD.js";import"./PdfRenderer-DG33Fo1I.js";import"./index-BPjhFk1G.js";import"./PdfViewer-CDcpjEBU.js";import"./PdfViewer.module.css-aKb23Qad.js";import"./PdfViewerAnnotationLayer-D-32GYGb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CaUNeIDf.js";import"./PdfViewerOutlineSidebar-EwFTcDm_.js";import"./PdfViewerSidebarHeader-aGplAOMZ.js";import"./useBaseUiId-1RjQbkk7.js";import"./useControlled-DR6JEyhp.js";import"./CompositeRoot-Y2sc6rgG.js";import"./CompositeItem-0t0UZZXC.js";import"./ToolbarRootContext-vJ4xK0Ae.js";import"./composite-Cm8gTBce.js";import"./svgIconContainer-DUoRnlmE.js";import"./PdfViewerSearchBar-8MMIm2Ia.js";import"./chevron-up-Br4hbOjK.js";import"./chevron-down-8OHfQsqq.js";import"./cross-yCNc4byY.js";import"./PdfViewerSidebar-BAUhGPi9.js";import"./index-Cnsri6qn.js";import"./index-CBKFAKiV.js";import"./index-VjGHSA68.js";import"./PdfViewerToolbar-ChI5HTO8.js";import"./Button-BYZ8cIp_.js";import"./chevron-right-BytE53yb.js";import"./Input-z0TYPoN8.js";import"./search-CqSUGpEg.js";import"./spin-Pe0oxvoW.js";import"./error-DBNizHSO.js";import"./withOsdkMetrics-BBbdfsKr.js";import"./makeExternalStore-BpnrcJse.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
