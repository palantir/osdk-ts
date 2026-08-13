import{j as r,M as s}from"./iframe-CYhZfT3_.js";import{P as p}from"./pdf-viewer-B7c8WMa5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpT-FPMx.js";import"./preload-helper-DuW2ZL9O.js";import"./PdfViewer-uGz1yZRo.js";import"./index-Bsk-T9AU.js";import"./BasePdfViewer-6fL2gWtc.js";import"./BasePdfViewer.module.css-CkhYOQkh.js";import"./PdfViewerAnnotationLayer-DgEDW9ko.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZlwyhWz.js";import"./PdfViewerOutlineSidebar-D1Jhz-GQ.js";import"./PdfViewerSidebarHeader-DuY4AjTS.js";import"./useBaseUiId-DZSo-im9.js";import"./useControlled-Cx72k2R7.js";import"./CompositeRoot-CSNPC3NB.js";import"./CompositeItem-CqWJQP_Z.js";import"./ToolbarRootContext-C__wJlPO.js";import"./composite-BPx_h-nk.js";import"./svgIconContainer-BpN9N_JA.js";import"./PdfViewerSearchBar-ByNpbKiM.js";import"./chevron-up-blLxE7vk.js";import"./chevron-down-DkFotZE7.js";import"./cross-BJdfjTua.js";import"./PdfViewerSidebar-D_FWxcUQ.js";import"./index-BrJQ0JzU.js";import"./index-BKmbfABs.js";import"./index-BthbUhg9.js";import"./PdfViewerToolbar-BonpUuwf.js";import"./Button-B7yZuVYQ.js";import"./chevron-right-17dyxsXU.js";import"./Input-kdaFhJQC.js";import"./search-CgpKnjTm.js";import"./spin-BljA92-6.js";import"./error-DWSHrAom.js";import"./withOsdkMetrics-BU-eC2Yy.js";import"./makeExternalStore-BbuDQhcx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
