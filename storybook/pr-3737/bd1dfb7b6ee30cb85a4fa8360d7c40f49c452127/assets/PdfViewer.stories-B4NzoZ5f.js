import{j as r,M as s}from"./iframe-iqQU8bOf.js";import{P as p}from"./pdf-viewer-B7eX5lDc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Der6M7ZF.js";import"./preload-helper-BsUPb6pd.js";import"./PdfRenderer-d3C5EK7O.js";import"./index-CqiIIsfb.js";import"./PdfViewer-CYIUvpxp.js";import"./PdfViewer.module.css-DCJjc_Qo.js";import"./PdfViewerAnnotationLayer-BaX7X7Th.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cze8OZG_.js";import"./PdfViewerOutlineSidebar-Cg4NwARL.js";import"./PdfViewerSidebarHeader-BeQwXG5Q.js";import"./useBaseUiId-CpmA_-bG.js";import"./useControlled-DJ8i4enG.js";import"./CompositeRoot-DluXf7EX.js";import"./CompositeItem-cDtNESeM.js";import"./ToolbarRootContext-BBwxdbAq.js";import"./composite-DdOT0bda.js";import"./svgIconContainer-BNsXYGV2.js";import"./PdfViewerSearchBar-IfalDN9H.js";import"./chevron-up-CPE5u950.js";import"./chevron-down-Clf6HxH4.js";import"./cross-BerI_bTK.js";import"./PdfViewerSidebar-IhKN6YIz.js";import"./index-CqkT5pyQ.js";import"./index-CGAj3FTo.js";import"./index-BTBXmSST.js";import"./PdfViewerToolbar-7_qVnJa2.js";import"./Button-DJTByFtP.js";import"./chevron-right-NFCUt9dy.js";import"./Input-BRlYFZYm.js";import"./search-CaykVUN2.js";import"./spin-7BsNtxfK.js";import"./error-BwFxT3aH.js";import"./withOsdkMetrics-b_xHbubF.js";import"./makeExternalStore-CKVk4GKk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
