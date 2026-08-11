import{j as r,M as s}from"./iframe-COjTwACd.js";import{P as p}from"./pdf-viewer-DPbpiitD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BGpzScbq.js";import"./preload-helper-3zoUuQg3.js";import"./PdfRenderer-DMBeFIm6.js";import"./index-BYBN_pM5.js";import"./PdfViewer-DyGo5aRs.js";import"./PdfViewer.module.css-CgkJIVov.js";import"./PdfViewerAnnotationLayer-Cdr7XtZ6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCWax_N6.js";import"./PdfViewerOutlineSidebar-B0vXzq9i.js";import"./PdfViewerSidebarHeader-CZbve3hh.js";import"./useBaseUiId-BHJRkAYu.js";import"./useControlled-Dm0Jzoa7.js";import"./CompositeRoot-BU9STS1i.js";import"./CompositeItem-BMvAHYYR.js";import"./ToolbarRootContext-BS68jFk4.js";import"./composite-Dw_TPpFp.js";import"./svgIconContainer-DB8O-WH_.js";import"./PdfViewerSearchBar-DIaUW2xT.js";import"./chevron-up-DJtFtCHb.js";import"./chevron-down-39gHaxC5.js";import"./cross-hWU4qN2Y.js";import"./PdfViewerSidebar-Ca0H-q_G.js";import"./index-Bt5nnrw-.js";import"./index-Cggo2yFx.js";import"./index-DpYQBSKi.js";import"./PdfViewerToolbar-DMV1WOC0.js";import"./Button-DKrxgkIM.js";import"./chevron-right-B_iktrBE.js";import"./Input-BDTIJBOH.js";import"./search-DODDfQXo.js";import"./spin-BsovWcxa.js";import"./error-CY-30sSF.js";import"./withOsdkMetrics-BuKYfzIS.js";import"./makeExternalStore-DW8okzVM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
