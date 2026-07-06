import{j as r,M as s}from"./iframe-DFoPknXU.js";import{P as p}from"./pdf-viewer-C0aB3Rcn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHE8YfEg.js";import"./preload-helper-P8RJdbRd.js";import"./PdfRenderer-CkqXEk09.js";import"./index-Crav-2Ze.js";import"./PdfViewer-BNYxj3Ip.js";import"./PdfViewer.module.css-CUaF7f9j.js";import"./PdfViewerAnnotationLayer-KTP7NQCF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bny7ID14.js";import"./PdfViewerOutlineSidebar-CqgC-gc9.js";import"./PdfViewerSidebarHeader-Dglxhc6W.js";import"./useBaseUiId-B5Di5_ER.js";import"./useControlled-DXLhnqRG.js";import"./CompositeRoot-GPHFsX-l.js";import"./CompositeItem-DotHPe8U.js";import"./ToolbarRootContext-MwQIDNFU.js";import"./composite-DfVs64wC.js";import"./svgIconContainer-DL62bZwE.js";import"./PdfViewerSearchBar-BRf5H5V9.js";import"./chevron-up-CanAYPLq.js";import"./chevron-down-Hrsc9QPw.js";import"./cross-C5mIiswO.js";import"./PdfViewerSidebar-aMh1ENhk.js";import"./index-BxUBQmT5.js";import"./index-vFeHJhls.js";import"./index-B4kgFmW1.js";import"./PdfViewerToolbar-9mSxhKnh.js";import"./Button-VEekTMI-.js";import"./chevron-right-DmWV2dld.js";import"./Input-Ddmrj3iK.js";import"./search-CH77HEFC.js";import"./spin-ChWT6mla.js";import"./error-BcnnJbxY.js";import"./withOsdkMetrics-CLGKFGT7.js";import"./makeExternalStore-fJE6jgN0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
