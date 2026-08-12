import{j as r,M as s}from"./iframe-CFVb3Ps1.js";import{P as p}from"./pdf-viewer-KSH9VXpx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DOXsCb5B.js";import"./preload-helper-DUoBkcgp.js";import"./PdfRenderer-BDTHWzun.js";import"./index-j_9_-Knb.js";import"./PdfViewer-D_HpPS2u.js";import"./PdfViewer.module.css-oM0spCQV.js";import"./PdfViewerAnnotationLayer-DuuLetYN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CC6dTFvu.js";import"./PdfViewerOutlineSidebar-Bk60Qua3.js";import"./PdfViewerSidebarHeader-C1TZ2i0K.js";import"./useBaseUiId-CYUQh1eE.js";import"./useControlled-DrQ2fT0v.js";import"./CompositeRoot-dsbS3GGp.js";import"./CompositeItem-DCUGYySc.js";import"./ToolbarRootContext-AlgrHhlC.js";import"./composite-jNoK6z7Q.js";import"./svgIconContainer-BIq4W7rh.js";import"./PdfViewerSearchBar-ClDqbI69.js";import"./chevron-up-Ct2ZBCPc.js";import"./chevron-down-Bq_Zi3-5.js";import"./cross-F64g4juI.js";import"./PdfViewerSidebar-Id0WJ8me.js";import"./index-Chak816X.js";import"./index-PnPL-ngj.js";import"./index-BCwpvRKP.js";import"./PdfViewerToolbar-CGkrhCgt.js";import"./Button-YOYPucvk.js";import"./chevron-right-CBYsZ0A8.js";import"./Input-DrcYzl24.js";import"./search-dFaASQnw.js";import"./spin-C_M2mCtp.js";import"./error-BTpRUOI6.js";import"./withOsdkMetrics-BZU3mB8s.js";import"./makeExternalStore-D5L1QyPs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
