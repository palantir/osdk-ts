import{j as r,M as s}from"./iframe-dax33wrH.js";import{P as p}from"./pdf-viewer-DepVetNi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-QHlYwm9v.js";import"./preload-helper--ptp1-jN.js";import"./PdfRenderer-BX5ty_hB.js";import"./index-DMMgfq7E.js";import"./PdfViewer-C4Qw0POl.js";import"./PdfViewer.module.css-URyy8YwA.js";import"./PdfViewerAnnotationLayer-BSuUiAIy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LZjZZZD-.js";import"./PdfViewerOutlineSidebar-CNbCnN6W.js";import"./PdfViewerSidebarHeader-DtQYK9kh.js";import"./useBaseUiId-CDrNLAhM.js";import"./useControlled-CGOZZZVV.js";import"./CompositeRoot-Z0-2H2EU.js";import"./CompositeItem--mSAHIOA.js";import"./ToolbarRootContext-XVRT1KGe.js";import"./composite-BKU8Rsyn.js";import"./svgIconContainer-BHtd-Y_f.js";import"./PdfViewerSearchBar-DX_xt8be.js";import"./chevron-up-BNj6ZjkR.js";import"./chevron-down-CJzM1_aP.js";import"./cross-CaIZLZrZ.js";import"./PdfViewerSidebar-BOUMtxJp.js";import"./index-D0C4uVvG.js";import"./index-CXweuEQF.js";import"./index-V0evU-dd.js";import"./PdfViewerToolbar-B8kLNaG9.js";import"./Button-CSmctVrW.js";import"./chevron-right-bymSeeYc.js";import"./Input-BKsap1VQ.js";import"./search-Ce8ONpd4.js";import"./spin-CK4AE1UW.js";import"./error-DTuR9zTq.js";import"./withOsdkMetrics-1TpuYbUB.js";import"./makeExternalStore-LkkdMXRm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
