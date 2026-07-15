import{j as r,M as s}from"./iframe-CxBuRuZT.js";import{P as p}from"./pdf-viewer-D-tB_H7O.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Blmv6KkM.js";import"./preload-helper-CKlLlV4L.js";import"./PdfRenderer-BzCDwi0k.js";import"./index-Dm1AhSPd.js";import"./PdfViewer-l7DFfPos.js";import"./PdfViewer.module.css-BRoRtqtf.js";import"./PdfViewerAnnotationLayer-CYN_tUvL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2i3ZoKY.js";import"./PdfViewerOutlineSidebar-hS0Gv6Dx.js";import"./PdfViewerSidebarHeader-mk3ckKwr.js";import"./useBaseUiId-B_g5EDL1.js";import"./useControlled-Cp0M8Tx1.js";import"./CompositeRoot-DEgeusRz.js";import"./CompositeItem-CsypoJ1W.js";import"./ToolbarRootContext-2U_PyGcG.js";import"./composite-DgJMS31U.js";import"./svgIconContainer-BN5I9dUw.js";import"./PdfViewerSearchBar-BRCWPmyr.js";import"./chevron-up-C-heytAI.js";import"./chevron-down-jocrG32E.js";import"./cross-eZd0XRRK.js";import"./PdfViewerSidebar-C-8sPIHM.js";import"./index-BkU9QJkZ.js";import"./index-PgXnUZ6T.js";import"./index-Bf9pteT-.js";import"./PdfViewerToolbar-CAVnNBKd.js";import"./Button-D6Lf0eZd.js";import"./chevron-right-DJZj51ZO.js";import"./Input-u_JFcwHL.js";import"./search-bomuUYil.js";import"./spin-JoEe_AZN.js";import"./error-BQE7CTFl.js";import"./withOsdkMetrics-C0xfDblt.js";import"./makeExternalStore-BD3oFxaN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
