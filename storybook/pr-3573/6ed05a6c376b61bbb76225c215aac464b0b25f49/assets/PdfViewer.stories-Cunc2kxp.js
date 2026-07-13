import{j as r,M as s}from"./iframe-B-D95LRj.js";import{P as p}from"./pdf-viewer-DL0ww0U-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-eOUESWpH.js";import"./preload-helper-BoEJDNF1.js";import"./PdfRenderer-BfYLeJrU.js";import"./index-CZmdfbMD.js";import"./PdfViewer-FtTPiq_l.js";import"./PdfViewer.module.css-BVSXhAvf.js";import"./PdfViewerAnnotationLayer-CQqVDnqA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3mwHIfv.js";import"./PdfViewerOutlineSidebar-uiD1GMqX.js";import"./PdfViewerSidebarHeader-DNE4VoNS.js";import"./useBaseUiId-CyUKqdii.js";import"./useControlled-DCqqZ002.js";import"./CompositeRoot-C2jBPla5.js";import"./CompositeItem-DfaEvMdb.js";import"./ToolbarRootContext-BZ-d1uKy.js";import"./composite-CNZxyVvo.js";import"./svgIconContainer-DSIDTLuJ.js";import"./PdfViewerSearchBar-CoTccpjv.js";import"./chevron-up-CD_PIAf2.js";import"./chevron-down-BPh3aBWY.js";import"./cross-CDoBuNMo.js";import"./PdfViewerSidebar-nJSpfE2h.js";import"./index-CWRJWss2.js";import"./index-Caiqsi6O.js";import"./index-B6t0VlCk.js";import"./PdfViewerToolbar-DCTeZVwS.js";import"./Button-NjnlIlL7.js";import"./chevron-right-DLTTF7vr.js";import"./Input-DFuPwYjW.js";import"./search-mc9mHvRi.js";import"./spin-3eMZfavI.js";import"./error-DHWiYCtJ.js";import"./withOsdkMetrics-Bq0B2bvT.js";import"./makeExternalStore-CzDg85gr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
