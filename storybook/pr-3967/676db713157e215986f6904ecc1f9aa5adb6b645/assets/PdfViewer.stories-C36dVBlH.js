import{j as r,M as s}from"./iframe-Bosp4Kfk.js";import{P as p}from"./pdf-viewer-DR-8vr74.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BKNUNSIc.js";import"./preload-helper-ClWiB6VL.js";import"./PdfViewer-CplBYW-a.js";import"./index-C6XIr_j0.js";import"./BasePdfViewer-Bc7SOtpi.js";import"./BasePdfViewer.module.css-D38oQxQU.js";import"./PdfViewerAnnotationLayer-DBUycLsN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D04LTBNP.js";import"./PdfViewerOutlineSidebar-HBQxjZtX.js";import"./PdfViewerSidebarHeader-BBhYMV4T.js";import"./useBaseUiId-CYPagWj7.js";import"./useControlled-DTohw9V1.js";import"./CompositeRoot-iZusZ6Bn.js";import"./CompositeItem-BU4XWpDF.js";import"./ToolbarRootContext-Bz28bgEE.js";import"./composite-C0RZtlqO.js";import"./svgIconContainer-Qe3SZPH2.js";import"./PdfViewerSearchBar-CuPUAE1w.js";import"./chevron-up-C8Y6sDHc.js";import"./chevron-down-BmQ0fXj1.js";import"./cross-Dp0rkMBN.js";import"./PdfViewerSidebar-CsOlzWyJ.js";import"./index-Dez8kNJl.js";import"./index-D_IOkl0_.js";import"./index-Cq35IRn6.js";import"./PdfViewerToolbar-Bd2WAZOh.js";import"./Button-CieAMe_p.js";import"./chevron-right-EiwmGiEv.js";import"./Input-CGDWreR8.js";import"./search-BiUx3u5j.js";import"./spin-9HV7LFVt.js";import"./error-7C0gNJGe.js";import"./withOsdkMetrics-DRBPjASM.js";import"./makeExternalStore-KCU4dCkA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
