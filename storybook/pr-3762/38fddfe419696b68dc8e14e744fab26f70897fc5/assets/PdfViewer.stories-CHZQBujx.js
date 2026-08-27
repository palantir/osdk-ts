import{j as r,M as s}from"./iframe-BcdGDu9j.js";import{P as p}from"./pdf-viewer-C7QTWwIe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1opx7jv.js";import"./preload-helper-CMbSo1WN.js";import"./PdfViewer-BBLCUQex.js";import"./index-CV-Cj0Fr.js";import"./BasePdfViewer-XPP9MqOK.js";import"./BasePdfViewer.module.css-xl0QB-Si.js";import"./PdfViewerAnnotationLayer-DLonSQJD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbEvDpDo.js";import"./PdfViewerOutlineSidebar-DmIb8e9F.js";import"./PdfViewerSidebarHeader-DuamYH7_.js";import"./useBaseUiId-DuyHfeNj.js";import"./useControlled-DXehS_Ds.js";import"./CompositeRoot-RXsp29Pt.js";import"./CompositeItem-D98IS09u.js";import"./ToolbarRootContext-BRDqWHEt.js";import"./composite-FZbs1kn9.js";import"./svgIconContainer-dXK4wDtR.js";import"./PdfViewerSearchBar-BjXa-5zR.js";import"./chevron-up-Ckxyzlru.js";import"./chevron-down-DIIoHKL4.js";import"./cross-HX620Mow.js";import"./PdfViewerSidebar-CxNK-qEN.js";import"./index-Cz3Lv1z4.js";import"./index-kWczGDq0.js";import"./index-Bf3lveVK.js";import"./PdfViewerToolbar-5ocKQC8X.js";import"./Button-BxGbP4Tj.js";import"./chevron-right-CCeUWpwW.js";import"./Input-DBRGGeXT.js";import"./search-CVgCtTip.js";import"./spin-BwR1mdOQ.js";import"./error-0GjEwwWq.js";import"./withOsdkMetrics-CesyT9oD.js";import"./makeExternalStore-DW1w7Bj0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
