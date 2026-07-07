import{j as r,M as s}from"./iframe-DyXIXGAR.js";import{P as p}from"./pdf-viewer-C2ZPup2F.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSBxJYWE.js";import"./preload-helper-DPUGA4_w.js";import"./PdfRenderer-B3fzP62R.js";import"./index-D_z_GSL5.js";import"./PdfViewer-DZLivJh9.js";import"./PdfViewer.module.css-CWFWkTwv.js";import"./PdfViewerAnnotationLayer-pD41X9QN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aVpiVfCm.js";import"./PdfViewerOutlineSidebar-DKck5T9k.js";import"./PdfViewerSidebarHeader-BVbXsC8S.js";import"./useBaseUiId-Bex4jiwR.js";import"./useControlled-DiZvw_qP.js";import"./CompositeRoot-DfquTMAq.js";import"./CompositeItem-BDWwkTG_.js";import"./ToolbarRootContext-Bgq9ZztY.js";import"./composite-BlnldHGd.js";import"./svgIconContainer-CyG8huw5.js";import"./PdfViewerSearchBar-COROg5kI.js";import"./chevron-up-CpnvI6Pk.js";import"./chevron-down-CKmtchEU.js";import"./cross-DcoLII47.js";import"./PdfViewerSidebar-Btu8vers.js";import"./index-CcvHXuEm.js";import"./index-BK-KP2l0.js";import"./index-BNyU16np.js";import"./PdfViewerToolbar-DQGwG_Ws.js";import"./Button-C3GbEyJU.js";import"./chevron-right-C8qDTMkQ.js";import"./Input-Dyc_Hx0U.js";import"./search-gYTl5Wxg.js";import"./spin-BSLz1Z9Q.js";import"./error-BXWdOUIw.js";import"./withOsdkMetrics-Hrkwbp5U.js";import"./makeExternalStore-CX4MZXW6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
