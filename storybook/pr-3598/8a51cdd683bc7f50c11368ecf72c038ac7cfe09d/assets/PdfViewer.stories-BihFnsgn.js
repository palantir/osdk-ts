import{j as r,M as s}from"./iframe-Cxvam0C5.js";import{P as p}from"./pdf-viewer-DZRuQBDx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Da4jKF0N.js";import"./preload-helper-Cg7_K448.js";import"./PdfRenderer-BbefekWg.js";import"./index-C2gRybHp.js";import"./PdfViewer-fo5uJbVq.js";import"./PdfViewer.module.css-C852qLfd.js";import"./PdfViewerAnnotationLayer-D0ONytTe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DF_wau5g.js";import"./PdfViewerOutlineSidebar-kNavq7hV.js";import"./PdfViewerSidebarHeader-Dwn2TD1o.js";import"./useBaseUiId-Cjlu4K-G.js";import"./useControlled-BxPCKOxM.js";import"./CompositeRoot-CDO_3Y1W.js";import"./CompositeItem-CibJohdN.js";import"./ToolbarRootContext-Cgqy4FZi.js";import"./composite-ByR5A3kp.js";import"./svgIconContainer-D3zv1LcV.js";import"./PdfViewerSearchBar-DL0deYSt.js";import"./chevron-up-Bv2waakQ.js";import"./chevron-down-CKaY6Jum.js";import"./cross-D_Gwc5hO.js";import"./PdfViewerSidebar-CZm3DN5W.js";import"./index-DosNoob4.js";import"./index-BgBRz9_h.js";import"./index-BmpxsyXZ.js";import"./PdfViewerToolbar-C5ScPfX4.js";import"./Button-DzaMyFaf.js";import"./chevron-right-CgBp49Mn.js";import"./Input-pSgyxzxr.js";import"./minus-CKWGH5R7.js";import"./search-jdB6_71l.js";import"./spin-DL3BNHDv.js";import"./error-W3xJRcOo.js";import"./withOsdkMetrics-D7_Oig26.js";import"./makeExternalStore-IfU_uMXx.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
