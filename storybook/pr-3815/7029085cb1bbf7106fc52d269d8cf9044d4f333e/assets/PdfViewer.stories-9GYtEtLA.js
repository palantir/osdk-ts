import{j as r,M as s}from"./iframe-BrodOdVa.js";import{P as p}from"./pdf-viewer-CXq9sNWL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rUm3cx43.js";import"./preload-helper-BtXh37L-.js";import"./PdfRenderer-CY1R_7-Y.js";import"./index-nUEOyMBU.js";import"./PdfViewer-Cg7d5ErT.js";import"./PdfViewer.module.css-CHWIK_jQ.js";import"./PdfViewerAnnotationLayer-C-o_h_Kv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PYcSW-zU.js";import"./PdfViewerOutlineSidebar-DCkse9fV.js";import"./PdfViewerSidebarHeader-CWGgMEjb.js";import"./useBaseUiId-BTSlrQJt.js";import"./useControlled-Cs7ltDfx.js";import"./CompositeRoot-COozFa_m.js";import"./CompositeItem-BiidShqS.js";import"./ToolbarRootContext-Ch6E_QUO.js";import"./composite-B1APNlh4.js";import"./svgIconContainer-B4AqVu0w.js";import"./PdfViewerSearchBar-Cwn7njb9.js";import"./chevron-up-B7qMuFb_.js";import"./chevron-down-CncSp1oW.js";import"./cross-BpGLYQ9Z.js";import"./PdfViewerSidebar-CfXIa-BL.js";import"./index-CVc025-m.js";import"./index-c-nuxmn_.js";import"./index-BvXrNTm7.js";import"./PdfViewerToolbar-eOAqH5eX.js";import"./Button-TfoAXQA0.js";import"./chevron-right-C4eBKDZn.js";import"./Input-iiNc2naG.js";import"./search-DqsOFw0-.js";import"./spin-DEMbioDb.js";import"./error-DFX2T5hJ.js";import"./withOsdkMetrics-CdZtg9n6.js";import"./makeExternalStore-C91wvf2v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
