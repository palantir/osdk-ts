import{j as r,M as s}from"./iframe-Br9LRUXS.js";import{P as p}from"./pdf-viewer-so0_fVLS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DL80uQbH.js";import"./preload-helper-C_qrdcre.js";import"./PdfRenderer-iV8get2U.js";import"./index-CZz-vvhK.js";import"./PdfViewer-BNb6B4e4.js";import"./PdfViewer.module.css-2ERvdvvH.js";import"./PdfViewerAnnotationLayer-B0k7PnAL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DrhdQUDp.js";import"./PdfViewerOutlineSidebar-CzVYLhx3.js";import"./PdfViewerSidebarHeader-BzyDeau4.js";import"./useBaseUiId-BADWPJVf.js";import"./useControlled-zE00DqWa.js";import"./CompositeRoot-Z3Xxv-BZ.js";import"./CompositeItem-BUq-oaxe.js";import"./ToolbarRootContext-CYgMjT8_.js";import"./composite-BvtS-MCL.js";import"./svgIconContainer-Cw_Fe7ch.js";import"./PdfViewerSearchBar-DeKOBySB.js";import"./chevron-up-C3LX4sPo.js";import"./chevron-down-fhSKKc30.js";import"./cross-k5kdi8c7.js";import"./PdfViewerSidebar-B6MJaNHq.js";import"./index-BMxCDFSh.js";import"./index-BMkqW9Ai.js";import"./index-B05D-_kz.js";import"./PdfViewerToolbar-BtQILEzU.js";import"./Button-BwHiS4QI.js";import"./chevron-right-D9HrIKzE.js";import"./Input-B5eDlNiP.js";import"./search-CyHs5wWO.js";import"./spin-CqTrtaoI.js";import"./error-BYqIwzq6.js";import"./withOsdkMetrics-C5sh7xBo.js";import"./makeExternalStore-KBYueQvT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
