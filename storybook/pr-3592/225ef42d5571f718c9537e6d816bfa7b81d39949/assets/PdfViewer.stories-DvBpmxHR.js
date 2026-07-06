import{j as r,M as s}from"./iframe-COgyXZaj.js";import{P as p}from"./pdf-viewer-ZYpDblIM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BjF8yGW_.js";import"./preload-helper-CURlSKHZ.js";import"./PdfRenderer-Dh5KNCxu.js";import"./index-BSe1gAIM.js";import"./PdfViewer-BrubhlCr.js";import"./PdfViewer.module.css-C4kL-qy0.js";import"./PdfViewerAnnotationLayer-DMDzZGvb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BilKL5tT.js";import"./PdfViewerOutlineSidebar-BplCJszl.js";import"./PdfViewerSidebarHeader-B9nnyqIH.js";import"./useBaseUiId-D-KMAuVb.js";import"./useControlled-D5pDpaVA.js";import"./CompositeRoot-DW8lqrEM.js";import"./CompositeItem-CNNF1fNB.js";import"./ToolbarRootContext-CXpmYfPq.js";import"./composite-thmUSTAt.js";import"./svgIconContainer-Do68B7yK.js";import"./PdfViewerSearchBar-nz9Jl2hm.js";import"./chevron-up-CoEizuDa.js";import"./chevron-down-0jNx_-as.js";import"./cross-D74AX7yW.js";import"./PdfViewerSidebar-BEySrnuA.js";import"./index-MJ9BTIR5.js";import"./index-DmgDY6Cg.js";import"./index-LHYsLpGJ.js";import"./PdfViewerToolbar-CPvBG20n.js";import"./Button-Cm1bW70f.js";import"./chevron-right-BIYVlgve.js";import"./Input-BDfzzD2g.js";import"./search-Bqrp4BB9.js";import"./spin-BN7teH5x.js";import"./error-ByUY1xnR.js";import"./withOsdkMetrics-DSz1qomi.js";import"./makeExternalStore-wMrSsfcR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
