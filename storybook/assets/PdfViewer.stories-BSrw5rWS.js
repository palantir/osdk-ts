import{j as r,M as s}from"./iframe-nzWsAB7h.js";import{P as p}from"./pdf-viewer-D77ma9j2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BucfC-Ou.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-B_tc-alz.js";import"./index-C62Qnstq.js";import"./PdfViewer-BZQ62XgN.js";import"./PdfViewer.module.css-BMY612OW.js";import"./PdfViewerAnnotationLayer-BgW6Wn2R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BW7KmEDE.js";import"./PdfViewerOutlineSidebar-CaW12H-H.js";import"./PdfViewerSidebarHeader-DOkgtkSL.js";import"./useBaseUiId-CjURCOWJ.js";import"./useControlled-GpOQEggi.js";import"./CompositeRoot-Ca0kd85y.js";import"./CompositeItem-CSA9IZiB.js";import"./ToolbarRootContext-B9M-jVGp.js";import"./composite-1p3cab6M.js";import"./svgIconContainer-CDWAsZcw.js";import"./PdfViewerSearchBar-B4vmp_TO.js";import"./chevron-up-Bj6C97x_.js";import"./chevron-down-DOio5weU.js";import"./cross-dfhKNnu6.js";import"./PdfViewerSidebar-D-X12ZHv.js";import"./index-CQECUmSh.js";import"./index-Wzzn5B3O.js";import"./index-ButhXHVJ.js";import"./PdfViewerToolbar-CWkuR81C.js";import"./Button-BZS_x_Dk.js";import"./chevron-right-DG4SBxFj.js";import"./Input-DISJCG28.js";import"./search-D4mU7Zsy.js";import"./spin-BoIx3q7N.js";import"./error-BpMsbtqe.js";import"./withOsdkMetrics-Ow8gWUYh.js";import"./makeExternalStore-B-xKD1vG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
