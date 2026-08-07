import{j as r,M as s}from"./iframe-C-Y1wjJM.js";import{P as p}from"./pdf-viewer-Csba6W3K.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DK7fHzGE.js";import"./preload-helper-b8tFyS_a.js";import"./PdfRenderer-DiAXQdba.js";import"./index-palz5mvc.js";import"./PdfViewer-D050AUqP.js";import"./PdfViewer.module.css-Cf99cW_0.js";import"./PdfViewerAnnotationLayer-C7Majaz_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BhUYrPSY.js";import"./PdfViewerOutlineSidebar-ZZQZ5_r0.js";import"./PdfViewerSidebarHeader-Bt6qaN7i.js";import"./useBaseUiId-CxDbvFq6.js";import"./useControlled-DwK6H2wz.js";import"./CompositeRoot-CvUJt-5F.js";import"./CompositeItem-Uzh8PcHE.js";import"./ToolbarRootContext-BChtM849.js";import"./composite-Cckq2u_r.js";import"./svgIconContainer-W7Zl3wV8.js";import"./PdfViewerSearchBar-BITywe4A.js";import"./chevron-up-fuMUgu9k.js";import"./chevron-down-BLSDTvXr.js";import"./cross-jR8r3tka.js";import"./PdfViewerSidebar-BA9kVbzj.js";import"./index-CtCSipxk.js";import"./index-DKGXCLet.js";import"./index-C8gKOTgg.js";import"./PdfViewerToolbar-DU3CyCrh.js";import"./Button-DH9ybcSz.js";import"./chevron-right-CoqNIXvx.js";import"./Input-m5wtd4u0.js";import"./search-DvmlRYay.js";import"./spin-BhD2zIMk.js";import"./error-CD-IqKVS.js";import"./withOsdkMetrics-Dst4AoKO.js";import"./makeExternalStore-C-qCxaZl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
