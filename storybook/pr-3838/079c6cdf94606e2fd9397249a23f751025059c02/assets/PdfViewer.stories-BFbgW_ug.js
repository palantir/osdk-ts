import{j as r,M as s}from"./iframe-CIVlBFCn.js";import{P as p}from"./pdf-viewer-XPnmiMHr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BJXc2Smi.js";import"./preload-helper-B6mYsaJc.js";import"./PdfRenderer-DHtMnjwK.js";import"./index-BQi6Abil.js";import"./PdfViewer-B8FOeEzF.js";import"./PdfViewer.module.css-C9r2XB4h.js";import"./PdfViewerAnnotationLayer-DebNyg6I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeY-Pbar.js";import"./PdfViewerOutlineSidebar-B08Yhmdr.js";import"./PdfViewerSidebarHeader-DjLuAnY8.js";import"./useBaseUiId-Cyj56q5H.js";import"./useControlled-CGspBM4Z.js";import"./CompositeRoot-DEVGtBKs.js";import"./CompositeItem-BwbcMQJX.js";import"./ToolbarRootContext-DdrEfg7p.js";import"./composite-Bp56YB0B.js";import"./svgIconContainer-1xBmK96Z.js";import"./PdfViewerSearchBar-DYEb94xF.js";import"./chevron-up-BymIJtb2.js";import"./chevron-down-CtlSujAB.js";import"./cross-D3bCQtqo.js";import"./PdfViewerSidebar-COQQPBf4.js";import"./index-Drqb8xJR.js";import"./index-CUBWxZlW.js";import"./index-CzaD-4Ts.js";import"./PdfViewerToolbar-Cgpg3XiE.js";import"./Button-BpMxh17E.js";import"./chevron-right-B9IKQFiE.js";import"./Input-Cvm-JmhM.js";import"./search-Cs4QzOir.js";import"./spin-Dp2YDgSv.js";import"./error-CX8PxqwS.js";import"./withOsdkMetrics-DGOG8EuQ.js";import"./makeExternalStore-C4HMHwO7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
