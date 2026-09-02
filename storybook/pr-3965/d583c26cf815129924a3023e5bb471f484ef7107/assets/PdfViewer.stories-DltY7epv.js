import{j as r,M as s}from"./iframe-CO-y4TdN.js";import{P as p}from"./pdf-viewer-CM18kWT4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-cC1CrWOj.js";import"./preload-helper-CjyFmI8K.js";import"./PdfViewer-BsFliD4P.js";import"./index-BvlbGIzZ.js";import"./BasePdfViewer-wV2XmtVW.js";import"./BasePdfViewer.module.css-Df0o_l-Q.js";import"./PdfViewerAnnotationLayer-CzVaFr1n.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiBXQyEp.js";import"./PdfViewerOutlineSidebar-ClYSDD3b.js";import"./PdfViewerSidebarHeader-Db3j8QlB.js";import"./useBaseUiId-JbgqorN2.js";import"./useControlled-C5lB0Y_-.js";import"./CompositeRoot-DnEmFwAJ.js";import"./CompositeItem-C9K9ap8i.js";import"./ToolbarRootContext-DhfbkfjQ.js";import"./composite-CpRI4cG_.js";import"./svgIconContainer-CndQfIvO.js";import"./PdfViewerSearchBar-CsXDyoOr.js";import"./chevron-up-d0dXiOae.js";import"./chevron-down-DcENhPxj.js";import"./cross-C5dLLhyh.js";import"./PdfViewerSidebar-8JpiD4If.js";import"./index-D0Bl1hu0.js";import"./index-Bpe4fXs9.js";import"./index-CokB0b6k.js";import"./PdfViewerToolbar-CrbfcKRW.js";import"./Button-B8DTN9QH.js";import"./chevron-right-DU0M2yJS.js";import"./Input-hfVPciHP.js";import"./search-Bc1itZDf.js";import"./spin-BgPMc8yi.js";import"./error-CwAmKxgu.js";import"./withOsdkMetrics-BplgaXU_.js";import"./makeExternalStore-DjtvJt2I.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
