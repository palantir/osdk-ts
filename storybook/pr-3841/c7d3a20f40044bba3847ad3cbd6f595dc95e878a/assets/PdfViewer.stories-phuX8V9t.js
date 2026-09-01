import{j as r,M as s}from"./iframe-DkOKI-zj.js";import{P as p}from"./pdf-viewer-DuSwVvnn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZmxo_C6.js";import"./preload-helper-BedFcYWj.js";import"./PdfViewer-Do2CjEoW.js";import"./index-D48E-jGx.js";import"./BasePdfViewer-CP2YQAN6.js";import"./BasePdfViewer.module.css-CUazTaud.js";import"./PdfViewerAnnotationLayer-D3f05btr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C36orAOb.js";import"./PdfViewerOutlineSidebar-lvo91qDR.js";import"./PdfViewerSidebarHeader-WVWmV4jV.js";import"./useBaseUiId-hIsI1Ivz.js";import"./useControlled-B-VxAfVU.js";import"./CompositeRoot-B6QF2nsl.js";import"./CompositeItem-B4iJlHXi.js";import"./ToolbarRootContext-CK3JrOY-.js";import"./composite-D6LFofvV.js";import"./svgIconContainer-DdqlG__h.js";import"./PdfViewerSearchBar-malwpi2m.js";import"./chevron-up-Da7cRTGm.js";import"./chevron-down-CL9C1vsy.js";import"./cross-BAQJRB0k.js";import"./PdfViewerSidebar-Ccd23ftA.js";import"./index-i7VgI47A.js";import"./index-Cul3U-EW.js";import"./index-BzBoChRE.js";import"./PdfViewerToolbar-xid8uuSl.js";import"./Button-BECGNN6S.js";import"./chevron-right-D81EA2MB.js";import"./Input-CkTh5rVe.js";import"./search-C0Wwv3jH.js";import"./spin-C_xspSug.js";import"./error-CK17bhMI.js";import"./withOsdkMetrics-CQ-W79bx.js";import"./makeExternalStore-AOqR8Y_j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
