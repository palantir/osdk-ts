import{j as r,M as s}from"./iframe-D3BrmG1-.js";import{P as p}from"./pdf-viewer-Bpj6xacd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCAubOv3.js";import"./preload-helper-noM8pYub.js";import"./PdfRenderer-Ba-qiqgX.js";import"./index-CWn8kxs9.js";import"./PdfViewer-DucWzzqx.js";import"./PdfViewer.module.css-CqsuClWG.js";import"./PdfViewerAnnotationLayer-0Ys1RFur.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-w_0emepz.js";import"./PdfViewerOutlineSidebar-OPKGj2CL.js";import"./PdfViewerSidebarHeader-CvSlYLXh.js";import"./useBaseUiId-BaPY3QBz.js";import"./useControlled-bbU_YmzA.js";import"./CompositeRoot-sDxl1Y0z.js";import"./CompositeItem-Cm3zFYGd.js";import"./ToolbarRootContext-B8ZXSrIZ.js";import"./composite-B3-stUHV.js";import"./svgIconContainer-CsFnx5wo.js";import"./PdfViewerSearchBar-C20S4zoZ.js";import"./chevron-up-BL9ReMex.js";import"./chevron-down-rAhx4X-e.js";import"./cross-CPpNbOts.js";import"./PdfViewerSidebar-DcQMCyII.js";import"./index-B45_tq2x.js";import"./index-Ce1f_LAk.js";import"./index-DO-nQfhk.js";import"./PdfViewerToolbar-BK6NI9c8.js";import"./Button-Dk4RR9yn.js";import"./chevron-right-BcWgTxL_.js";import"./Input-DEUS6lRw.js";import"./search-Di8PTnT5.js";import"./spin-D7qNQaX5.js";import"./error-BCzhFG07.js";import"./withOsdkMetrics-CVvrSjhi.js";import"./makeExternalStore-BdOTM5Tx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
