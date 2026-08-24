import{j as r,M as s}from"./iframe-ZcCW6_Wz.js";import{P as p}from"./pdf-viewer-b6fxVkrB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQz1yxBu.js";import"./preload-helper-BB_y-aog.js";import"./PdfViewer-CkAe4Wck.js";import"./index-DyeMh41W.js";import"./BasePdfViewer-xrNLJEt3.js";import"./BasePdfViewer.module.css-Brfr46dh.js";import"./PdfViewerAnnotationLayer-BziRs5Cz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B30On3A1.js";import"./PdfViewerOutlineSidebar-Bm2-WqC-.js";import"./PdfViewerSidebarHeader-Bh4kBYk6.js";import"./useBaseUiId-BpaZn96w.js";import"./useControlled-DiaTlfr8.js";import"./CompositeRoot-D-7orWoH.js";import"./CompositeItem-B_VWcRPv.js";import"./ToolbarRootContext-BqQcS-8Q.js";import"./composite-foIRj0KC.js";import"./svgIconContainer-0fT5nrJe.js";import"./PdfViewerSearchBar-Cs4_dYVp.js";import"./chevron-up-DW7TzWR5.js";import"./chevron-down-BAQtbrwT.js";import"./cross-wMIvDcbp.js";import"./PdfViewerSidebar-DBLy-W1x.js";import"./index-BJaF-zGC.js";import"./index-CBeU0MC7.js";import"./index-T8wYhAz8.js";import"./PdfViewerToolbar-Ci_Zcciy.js";import"./Button-Cm8wb-cw.js";import"./chevron-right-DTk1NYF7.js";import"./Input-Dpme7joy.js";import"./search-Bc3gx_gy.js";import"./spin-BH38svi-.js";import"./error-DOcHLiil.js";import"./withOsdkMetrics-C-7rZzkE.js";import"./makeExternalStore-BySX7A9V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
