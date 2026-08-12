import{j as r,M as s}from"./iframe-BBEE1fcd.js";import{P as p}from"./pdf-viewer-Bq8PADvf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CKIH4r_m.js";import"./preload-helper-BxA6CJ-D.js";import"./PdfRenderer-CXRV7zDQ.js";import"./index-BD-kAubo.js";import"./PdfViewer-CV-UAbtv.js";import"./PdfViewer.module.css-CkLfwNE3.js";import"./PdfViewerAnnotationLayer-BINxeEXw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6MxqYKE.js";import"./PdfViewerOutlineSidebar-CufL8qv7.js";import"./PdfViewerSidebarHeader-3vK8rJ0b.js";import"./useBaseUiId-DA_UWaVl.js";import"./useControlled-B-EIx2lA.js";import"./CompositeRoot-OsxvXGXK.js";import"./CompositeItem-56QVPZAb.js";import"./ToolbarRootContext-BMnS3VWT.js";import"./composite-aN5etqXc.js";import"./svgIconContainer-CXhq7QF6.js";import"./PdfViewerSearchBar-CQcwKb4k.js";import"./chevron-up-DfRuWUkV.js";import"./chevron-down-By7dAtgj.js";import"./cross-Di1f7Jtb.js";import"./PdfViewerSidebar-CbYGsw7b.js";import"./index-Dj26UzNn.js";import"./index-CqSSuO0g.js";import"./index-BgH3bF5f.js";import"./PdfViewerToolbar-GYVnhieF.js";import"./Button-NXakGZes.js";import"./chevron-right-CpPdmiZK.js";import"./Input-DxM0pKmj.js";import"./search-CRkLehCt.js";import"./spin-Br6zorVk.js";import"./error-rupeo4en.js";import"./withOsdkMetrics-BNDO0u89.js";import"./makeExternalStore-DcP_Mz2E.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
