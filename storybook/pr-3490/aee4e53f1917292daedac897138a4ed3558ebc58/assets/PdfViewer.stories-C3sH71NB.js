import{j as r,M as s}from"./iframe-4AGo0fHF.js";import{P as p}from"./pdf-viewer-BcYOQWDZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-t-bBKCO_.js";import"./preload-helper-BDAIYRA_.js";import"./PdfRenderer-B8VaKgX6.js";import"./index-rqNsdX2H.js";import"./PdfViewer-BDAj9seo.js";import"./PdfViewer.module.css-BGzDGHWv.js";import"./PdfViewerAnnotationLayer-BQ2kXDXc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuRHEm_2.js";import"./PdfViewerOutlineSidebar-Cs91bc8o.js";import"./PdfViewerSidebarHeader-9d_nIL-e.js";import"./useBaseUiId-d_edq7Dv.js";import"./useControlled-CsCWmXvE.js";import"./CompositeRoot-mnw4NqgC.js";import"./CompositeItem-CM84FkA3.js";import"./ToolbarRootContext-X15TOm6A.js";import"./composite-BDe51bb2.js";import"./svgIconContainer-DuDvRxIP.js";import"./PdfViewerSearchBar-BT7JdDPt.js";import"./chevron-up-CZ1cvJH0.js";import"./chevron-down-BL45Hv7R.js";import"./cross-B1_QLOud.js";import"./PdfViewerSidebar-BQ9j25x4.js";import"./index-J_OTmZ_H.js";import"./index-BLXYd6dz.js";import"./index-CaPMxUJ3.js";import"./PdfViewerToolbar-DD6vIcfq.js";import"./Button-D2xhFlGw.js";import"./chevron-right-B4li91CV.js";import"./Input-D2Q3J8aS.js";import"./search-ATPUGaQZ.js";import"./spin-CinNCdQP.js";import"./error-ikfBFfix.js";import"./withOsdkMetrics-BP43R-Ep.js";import"./makeExternalStore-CgN71ky-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
