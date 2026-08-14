import{j as r,M as s}from"./iframe-BiqEJvqs.js";import{P as p}from"./pdf-viewer-CzXHualz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-CDTiP9.js";import"./preload-helper-CUf-Ejfa.js";import"./PdfViewer-e7RnaFnF.js";import"./index-UOIl6jYX.js";import"./BasePdfViewer-DX9mhrb2.js";import"./BasePdfViewer.module.css-BbLQlhPR.js";import"./PdfViewerAnnotationLayer-DMkl1ejK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-COzUEVOE.js";import"./PdfViewerOutlineSidebar-DuS8Z2Oi.js";import"./PdfViewerSidebarHeader-BcmNgCYn.js";import"./useBaseUiId-BfW20ii0.js";import"./useControlled-KybfaMD9.js";import"./CompositeRoot-0P0U3Pac.js";import"./CompositeItem-DGaDgjtW.js";import"./ToolbarRootContext-6CMk-K6X.js";import"./composite-69au3nWT.js";import"./svgIconContainer-DhtXEAG2.js";import"./PdfViewerSearchBar-9NNRDYbO.js";import"./chevron-up-BMELDAk0.js";import"./chevron-down-CbDtZ0Pe.js";import"./cross-J4n8RB05.js";import"./PdfViewerSidebar-CXE7qBYf.js";import"./index-BVNphcmg.js";import"./index-BEI0Rcxq.js";import"./index-BphVNaCP.js";import"./PdfViewerToolbar-CmD-ZX3b.js";import"./Button-BZ6TNGhX.js";import"./chevron-right-hxkQJM60.js";import"./Input-ED3AY7t3.js";import"./search-BBjG8S0f.js";import"./spin-XAhux6jL.js";import"./error-JdYnclCK.js";import"./withOsdkMetrics-BJrjEamM.js";import"./makeExternalStore-CbsSZTon.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
