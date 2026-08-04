import{j as r,M as s}from"./iframe-B28z8hIY.js";import{P as p}from"./pdf-viewer-DfEI4oqk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYgaxlC2.js";import"./preload-helper-D8qOl9Xf.js";import"./PdfRenderer-CZ6YiHVr.js";import"./index-DMpY9C2v.js";import"./PdfViewer-BnQZ8MKq.js";import"./PdfViewer.module.css-HrsKMiAE.js";import"./PdfViewerAnnotationLayer-B6y0PLph.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFRMYTqG.js";import"./PdfViewerOutlineSidebar-DXJLdODS.js";import"./PdfViewerSidebarHeader-ujUvxrGL.js";import"./useBaseUiId-DM58hJy6.js";import"./useControlled-ss5L4whE.js";import"./CompositeRoot-BJvRvEVM.js";import"./CompositeItem-Bq1q5tVI.js";import"./ToolbarRootContext-D22XPhTr.js";import"./composite-DNMsan99.js";import"./svgIconContainer-Dhm8X-BV.js";import"./PdfViewerSearchBar-CL971Z7o.js";import"./chevron-up-Cr8AKZI4.js";import"./chevron-down-D_GWy34J.js";import"./cross-CDkShHPW.js";import"./PdfViewerSidebar-h6Yvkitk.js";import"./index-BZgkCUQe.js";import"./index-djAwGKCo.js";import"./index-Bq3ZgDfN.js";import"./PdfViewerToolbar-46Wbl48H.js";import"./Button-uH6gdAsd.js";import"./chevron-right-PeHymVb2.js";import"./Input-DcxMr_KP.js";import"./search-CmPRdAAA.js";import"./spin-DMhqCrOQ.js";import"./error-CObZLwnt.js";import"./withOsdkMetrics-GTEGqRPt.js";import"./makeExternalStore-Dcx7-1vD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
