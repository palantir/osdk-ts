import{j as r,M as s}from"./iframe-DV_FvNkW.js";import{P as p}from"./pdf-viewer-C40QhuDU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-nL4GIR2p.js";import"./preload-helper-BArELN5X.js";import"./PdfRenderer-CKP_bja5.js";import"./index-BLvj8uzS.js";import"./PdfViewer-BeV7BnlQ.js";import"./PdfViewer.module.css-BkL5ebrp.js";import"./PdfViewerAnnotationLayer-BeA7F3rH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uIr_RH-A.js";import"./PdfViewerOutlineSidebar-rz5_n0Ot.js";import"./PdfViewerSidebarHeader-BCRMLF_7.js";import"./useBaseUiId-DZEvNQMB.js";import"./useControlled-CjcZvg90.js";import"./CompositeRoot-DWx1oNRS.js";import"./CompositeItem-B9cGFmy6.js";import"./ToolbarRootContext-DhlEIOBQ.js";import"./composite-GUdKrYKt.js";import"./svgIconContainer-CK52f1Bh.js";import"./PdfViewerSearchBar-DXPzXmm8.js";import"./chevron-up-n5NxO0yG.js";import"./chevron-down-CZeNdi1s.js";import"./cross-JLut_rtX.js";import"./PdfViewerSidebar-CR9tqF_g.js";import"./index-DJXI62-C.js";import"./index-D2s-C-iU.js";import"./index-DUDZNy0X.js";import"./PdfViewerToolbar-BoUIPDpQ.js";import"./Button-CDeNX6hI.js";import"./chevron-right-DEPrboiG.js";import"./Input-WondKUmM.js";import"./search-1jaslfQq.js";import"./spin-CHkPRfI7.js";import"./error-BkuU0fxo.js";import"./withOsdkMetrics-CaJhDKNf.js";import"./makeExternalStore-BAiQukHm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
