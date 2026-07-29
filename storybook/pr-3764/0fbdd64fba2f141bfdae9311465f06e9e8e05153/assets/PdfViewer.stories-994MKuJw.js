import{j as r,M as s}from"./iframe-EWNiSOlz.js";import{P as p}from"./pdf-viewer-CRewO-fx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3FMrcg4o.js";import"./preload-helper-DINoBAyp.js";import"./PdfRenderer-BLagdIM_.js";import"./index-J8uMkFcT.js";import"./PdfViewer-BkQnRugs.js";import"./PdfViewer.module.css-C102VWVD.js";import"./PdfViewerAnnotationLayer-B3nkYbmW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-jDK2RP_t.js";import"./PdfViewerOutlineSidebar-LjtGBsC3.js";import"./PdfViewerSidebarHeader-D6dkji0T.js";import"./useBaseUiId-CbA5EQtD.js";import"./useControlled-D0-X3QeL.js";import"./CompositeRoot-DlhTgFCK.js";import"./CompositeItem-BxLQcrHq.js";import"./ToolbarRootContext-E7FpR2J5.js";import"./composite-PBGFU2UH.js";import"./svgIconContainer-i8Q-3NvR.js";import"./PdfViewerSearchBar-hzO2V9tC.js";import"./chevron-up-CxS7uun7.js";import"./chevron-down-B_x7olCL.js";import"./cross-D8UDZUVl.js";import"./PdfViewerSidebar-BSCzwrkc.js";import"./index-K2vh5oUT.js";import"./index-9MkXRS7h.js";import"./index-D-TWmAa9.js";import"./PdfViewerToolbar-C0Dwdwg2.js";import"./Button-NJGcULYm.js";import"./chevron-right-5Cb59vpJ.js";import"./Input-BLbu68-y.js";import"./search-Ct4Cy4Cw.js";import"./spin-CX4RuqRb.js";import"./error-Bm5OuOKZ.js";import"./withOsdkMetrics-CgmzOPIb.js";import"./makeExternalStore-C-uT0tmI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
