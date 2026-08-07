import{j as r,M as s}from"./iframe-CsyA0Bys.js";import{P as p}from"./pdf-viewer-DI_fP_OY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dq5AcpLa.js";import"./preload-helper-KfZ568TX.js";import"./PdfRenderer-Ocll9AWo.js";import"./index-BxyPqXWo.js";import"./PdfViewer-B0NZm5D9.js";import"./PdfViewer.module.css-E2hhDM04.js";import"./PdfViewerAnnotationLayer-C2tDn4jr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BTn-T8IF.js";import"./PdfViewerOutlineSidebar-D0b9gOz5.js";import"./PdfViewerSidebarHeader-Ct21iFV_.js";import"./useBaseUiId-DvYZt6lA.js";import"./useControlled-Bo2Cmprh.js";import"./CompositeRoot-rzTBS7Rr.js";import"./CompositeItem-CL1_i0UZ.js";import"./ToolbarRootContext-zz45WkNS.js";import"./composite-BqX-duXl.js";import"./svgIconContainer-DaiSunt0.js";import"./PdfViewerSearchBar-9sDmzzZQ.js";import"./chevron-up-CmrZGH6_.js";import"./chevron-down-Dfm6xDjd.js";import"./cross-w7PsKmF1.js";import"./PdfViewerSidebar-BH3S8VNc.js";import"./index-BnVBTYNX.js";import"./index-BgAZAXfa.js";import"./index--UUGPORc.js";import"./PdfViewerToolbar-CHwpMgFz.js";import"./Button-6-1YrzTD.js";import"./chevron-right-xgpHFgjV.js";import"./Input-CRzWdgdg.js";import"./search-45t1HcTK.js";import"./spin-Cko5jS8B.js";import"./error-B7vEDe1J.js";import"./withOsdkMetrics-CoF3qvtY.js";import"./makeExternalStore-CjIFX2gB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
