import{j as r,M as s}from"./iframe-BYDd13Gq.js";import{P as p}from"./pdf-viewer-Cdi5lUZW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNLmWbE3.js";import"./preload-helper-CRTbv9f1.js";import"./PdfRenderer-Cmug3SA8.js";import"./index-DAt4uNWn.js";import"./PdfViewer-RfH-8sLp.js";import"./PdfViewer.module.css-DWqX1Hnn.js";import"./PdfViewerAnnotationLayer-CUzBvMJY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgOKQMQ6.js";import"./PdfViewerOutlineSidebar-04Pi4Vj1.js";import"./PdfViewerSidebarHeader-Bae6Iv-y.js";import"./useBaseUiId-B7zoNiex.js";import"./useControlled-DKVNuIG7.js";import"./CompositeRoot-C69X-Jf8.js";import"./CompositeItem-CxIk05xP.js";import"./ToolbarRootContext-BFhORt-N.js";import"./composite-DAzdDn9M.js";import"./svgIconContainer-BvVBQY0M.js";import"./PdfViewerSearchBar-ByR9EWHL.js";import"./chevron-up-DzyW1j1c.js";import"./chevron-down-CMlArBeW.js";import"./cross-BwMj07Lv.js";import"./PdfViewerSidebar-CykoWn8p.js";import"./index-Cmm7LrQU.js";import"./index-C44qydix.js";import"./index-BehHqcOB.js";import"./PdfViewerToolbar-B742mVyB.js";import"./Button-DogeI-Te.js";import"./chevron-right-DltXiOdr.js";import"./Input-BTOVlKzv.js";import"./search-BLYcXVNY.js";import"./spin-CP4lj_vk.js";import"./error-BO5I4Xtc.js";import"./withOsdkMetrics-B8xuGbT0.js";import"./makeExternalStore-DK8pW9uJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
