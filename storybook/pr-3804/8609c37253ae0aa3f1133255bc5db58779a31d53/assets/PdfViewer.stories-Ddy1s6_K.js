import{j as r,M as s}from"./iframe-emwkUmZM.js";import{P as p}from"./pdf-viewer-3l5CouNj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BoLT4wND.js";import"./preload-helper-DhG5IP-3.js";import"./PdfRenderer-B-WJ_K4d.js";import"./index-Bv42s2zx.js";import"./PdfViewer-B-lUnEZs.js";import"./PdfViewer.module.css-2TM25nVI.js";import"./PdfViewerAnnotationLayer-ppB4Do5I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-COwWRHt9.js";import"./PdfViewerOutlineSidebar-DrDd0t7c.js";import"./PdfViewerSidebarHeader-ee-6_htQ.js";import"./useBaseUiId-DGMkXjWr.js";import"./useControlled-gdvUMTCG.js";import"./CompositeRoot-WKeT6E3s.js";import"./CompositeItem-XANTgkhJ.js";import"./ToolbarRootContext-BDzdBlDv.js";import"./composite-qf_al3LL.js";import"./svgIconContainer-BZwxzAZ9.js";import"./PdfViewerSearchBar-DADTn6Sw.js";import"./chevron-up-CXoXhvt1.js";import"./chevron-down-CXaya3J3.js";import"./cross-DNRJKzx5.js";import"./PdfViewerSidebar-DFNUie7K.js";import"./index-8JQvc2yz.js";import"./index-CztgCydP.js";import"./index-Cr7IeRYZ.js";import"./PdfViewerToolbar-Ax3nknDf.js";import"./Button-Ceu8mR34.js";import"./chevron-right-DY3J7n7o.js";import"./Input-DvYk7O5S.js";import"./search-aahFShus.js";import"./spin-CwZ6fNVY.js";import"./error-DMYyebeG.js";import"./withOsdkMetrics-DIvrEbIJ.js";import"./makeExternalStore-D62X0CAn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
