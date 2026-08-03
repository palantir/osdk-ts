import{j as r,M as s}from"./iframe-Bzybdyuo.js";import{P as p}from"./pdf-viewer-DkQXap4_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZCsHrim.js";import"./preload-helper-DvhPMCjI.js";import"./PdfRenderer-BICSMcDl.js";import"./index-C7I7uOuD.js";import"./PdfViewer-DKtwbkxN.js";import"./PdfViewer.module.css-CKPRsWIY.js";import"./PdfViewerAnnotationLayer-BFtdj1hx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeJll5rf.js";import"./PdfViewerOutlineSidebar-DNPGApuF.js";import"./PdfViewerSidebarHeader-DEATsloM.js";import"./useBaseUiId-LiIOLQsT.js";import"./useControlled-Dmv8kSAc.js";import"./CompositeRoot-CoK0pq7c.js";import"./CompositeItem-Dmbp9j_U.js";import"./ToolbarRootContext-DTWuY11i.js";import"./composite-BlLYhcU2.js";import"./svgIconContainer-CT7GuDuE.js";import"./PdfViewerSearchBar-m_FTHInp.js";import"./chevron-up-BBaKlUvL.js";import"./chevron-down-ChW0ZqRN.js";import"./cross-CE07U7-n.js";import"./PdfViewerSidebar-CLXpTWVX.js";import"./index-B9kV5q7Y.js";import"./index-gwzeuytQ.js";import"./index-DyzMZFsL.js";import"./PdfViewerToolbar-BwrUPJxe.js";import"./Button-BVoTv4hE.js";import"./chevron-right-BbOUo2gn.js";import"./Input-CdTlwUNA.js";import"./search-DvoFgpQI.js";import"./spin-Bp38YtkW.js";import"./error-DxO-v6dh.js";import"./withOsdkMetrics-BQraTyAY.js";import"./makeExternalStore-DPGXEAtz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
