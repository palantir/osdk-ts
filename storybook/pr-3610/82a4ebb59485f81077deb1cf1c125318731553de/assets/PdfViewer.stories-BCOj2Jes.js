import{j as r,M as s}from"./iframe-BpTTav6E.js";import{P as p}from"./pdf-viewer-CglTgzJ5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D5tkaJX-.js";import"./preload-helper-Df5e5mO9.js";import"./PdfRenderer-BatxbUp-.js";import"./index-DnNqScuN.js";import"./PdfViewer-Zj0VEM5C.js";import"./PdfViewer.module.css-BAft8rEp.js";import"./PdfViewerAnnotationLayer-Bl4BS0ij.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CaL_1Gls.js";import"./PdfViewerOutlineSidebar-DY5iMZq5.js";import"./PdfViewerSidebarHeader-B2G0ksND.js";import"./useBaseUiId-C1P880zF.js";import"./useControlled-DS6Fb4ZV.js";import"./CompositeRoot-D5DApjRM.js";import"./CompositeItem-D0nFRiE2.js";import"./ToolbarRootContext-B02kdYfC.js";import"./composite-B5LqX7jj.js";import"./svgIconContainer-xDffmDyE.js";import"./PdfViewerSearchBar-sVGxOCac.js";import"./chevron-up-BAU_Xo1Q.js";import"./chevron-down-DP6F4-Rl.js";import"./cross-M_pIfQOv.js";import"./PdfViewerSidebar-DBayaqsL.js";import"./index-mRA8IDTq.js";import"./index-BrWuRadK.js";import"./index-DEB-hcmS.js";import"./PdfViewerToolbar-CxBfWaqC.js";import"./Button-BuaxEZSl.js";import"./chevron-right-Bk4qpAOu.js";import"./Input-D-Jo2YKE.js";import"./search-DRXiIi1S.js";import"./spin-DnX3UEnu.js";import"./error-C7YY6FkK.js";import"./withOsdkMetrics-B5wLpKbu.js";import"./makeExternalStore-B07NB1OM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
