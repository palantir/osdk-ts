import{j as r,M as s}from"./iframe-DYnAafHC.js";import{P as p}from"./pdf-viewer-iWTDXa7B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BMpVs1YH.js";import"./preload-helper-DxzTJo3W.js";import"./PdfRenderer-DMdxacQZ.js";import"./index-BVBrlxI_.js";import"./PdfViewer-BBjxgCW0.js";import"./PdfViewer.module.css-CRoQfwoF.js";import"./PdfViewerAnnotationLayer-CZPqyXhC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-dVnuQkac.js";import"./PdfViewerOutlineSidebar-BRAu5W2Y.js";import"./PdfViewerSidebarHeader-BIYLxPyy.js";import"./useBaseUiId-C30UVm3u.js";import"./useControlled-D5p76dJm.js";import"./CompositeRoot-BSCYepzJ.js";import"./CompositeItem-C15RAxHz.js";import"./ToolbarRootContext-1tPnZKjL.js";import"./composite-DvSsc2iv.js";import"./svgIconContainer-B6xn5S7Z.js";import"./PdfViewerSearchBar-CCPrVgf9.js";import"./chevron-up-C_JDmA7-.js";import"./chevron-down-DaZ61-db.js";import"./cross-wz_XfbtT.js";import"./PdfViewerSidebar-BHsxc3_l.js";import"./index-BgaFvTkb.js";import"./index-DRLt0VWN.js";import"./index-Bg-fPd7k.js";import"./PdfViewerToolbar-Ckn7Khla.js";import"./Button-ChSbeVDk.js";import"./chevron-right-BHnIJpd6.js";import"./Input-p8qmxPVX.js";import"./search-DYOcRf0h.js";import"./spin-Dg8OotpG.js";import"./error-B1scN5MD.js";import"./withOsdkMetrics-CYwW5Ya9.js";import"./makeExternalStore-DRaP3Ol2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
