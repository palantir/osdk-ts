import{j as r,M as s}from"./iframe-BX2djs1n.js";import{P as p}from"./pdf-viewer-B2IdVCid.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ctv1D00O.js";import"./preload-helper-hVm1bQeY.js";import"./PdfRenderer-iJ9Zh52b.js";import"./index-B9jmPLST.js";import"./PdfViewer-CipX3UEN.js";import"./PdfViewer.module.css-Cuc9YS11.js";import"./PdfViewerAnnotationLayer-Bo6W9Fn7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-NgUqIYfV.js";import"./PdfViewerOutlineSidebar-DQZcmPAD.js";import"./PdfViewerSidebarHeader-aDVkl-_1.js";import"./useBaseUiId-BWPkie-N.js";import"./useControlled-BSC0C-xX.js";import"./CompositeRoot-DrqosrRJ.js";import"./CompositeItem-DgYN0Pe2.js";import"./ToolbarRootContext-ntjKxxJl.js";import"./composite-DyJ2axhs.js";import"./svgIconContainer-DQabYsmJ.js";import"./PdfViewerSearchBar-ASk-wSP7.js";import"./chevron-up-C8cyisJG.js";import"./chevron-down-B5T3s_bk.js";import"./cross-CW7i9eUS.js";import"./PdfViewerSidebar-Cm1vypnd.js";import"./index-B-r10tKF.js";import"./index-Veb86PcG.js";import"./index-BjGEWd6s.js";import"./PdfViewerToolbar-BrtbU3dv.js";import"./Button-CHDLG2_C.js";import"./chevron-right-BqDFpH01.js";import"./Input-5JT_Fa9T.js";import"./search-XN3WBCJt.js";import"./spin-BJFWSFa2.js";import"./error-A3g6IGlp.js";import"./withOsdkMetrics-DLJus_Y-.js";import"./makeExternalStore-C-3siswC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
