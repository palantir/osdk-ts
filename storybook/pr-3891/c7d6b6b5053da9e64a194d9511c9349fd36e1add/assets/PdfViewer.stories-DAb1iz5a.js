import{j as r,M as s}from"./iframe-Ct96tLEP.js";import{P as p}from"./pdf-viewer-DJOHxXhh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BWaau_ny.js";import"./preload-helper-BzXm-lWo.js";import"./PdfViewer-C6T6QMvY.js";import"./index-BrLV5Brk.js";import"./BasePdfViewer-Bd1UMjGh.js";import"./BasePdfViewer.module.css-8xFl6NA3.js";import"./PdfViewerAnnotationLayer-CHBTGm0U.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CWtZ2iOF.js";import"./PdfViewerOutlineSidebar-BFhDsSGG.js";import"./PdfViewerSidebarHeader-nwhzF1F3.js";import"./useBaseUiId-DlPo7HoM.js";import"./useControlled-BrUHVbre.js";import"./CompositeRoot-CGofSR4S.js";import"./CompositeItem-ofC_tm6k.js";import"./ToolbarRootContext-COQSoUvI.js";import"./composite-ClWDPy_Z.js";import"./svgIconContainer-YyohibIC.js";import"./PdfViewerSearchBar-y_fJ76qT.js";import"./chevron-up-Bwi9aOqG.js";import"./chevron-down-3x8blo3k.js";import"./cross-njCgeQQ_.js";import"./PdfViewerSidebar-CIoRe0jk.js";import"./index-BQUZFKJ4.js";import"./index-n7zQzqGm.js";import"./index-CFGgbOOg.js";import"./PdfViewerToolbar-BluYAZ8-.js";import"./Button--zxmfjhO.js";import"./chevron-right-BUwtUf27.js";import"./Input-BjRTRl1y.js";import"./search-gcuSrwrj.js";import"./spin-iGAQH5sJ.js";import"./error-9UY90i-J.js";import"./withOsdkMetrics-BTh75wtd.js";import"./makeExternalStore-DsptzOqM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
