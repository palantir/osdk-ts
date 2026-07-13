import{j as r,M as s}from"./iframe-CbOWbGGw.js";import{P as p}from"./pdf-viewer-tL--T9Pd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYGkHso0.js";import"./preload-helper-DondZV2N.js";import"./PdfRenderer-tCh-aFUE.js";import"./index-CEPD03cF.js";import"./PdfViewer-CwTuN91z.js";import"./PdfViewer.module.css-DSCuwTeA.js";import"./PdfViewerAnnotationLayer-BCZ0co_J.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-K6LgfuXS.js";import"./PdfViewerOutlineSidebar-X1m4-FUN.js";import"./PdfViewerSidebarHeader-BpXefBjw.js";import"./useBaseUiId-BzNtixXq.js";import"./useControlled-BZd54yFi.js";import"./CompositeRoot-CkVxr023.js";import"./CompositeItem-CYtnWxmM.js";import"./ToolbarRootContext-c2HSNs2W.js";import"./composite-CKUgOMSc.js";import"./svgIconContainer-BhhXSaXd.js";import"./PdfViewerSearchBar-BOuT4eTU.js";import"./chevron-up-Ce4SkHfu.js";import"./chevron-down-CIpW-Tqv.js";import"./cross-DadtfeXK.js";import"./PdfViewerSidebar-LD9dOqdD.js";import"./index-D9Yqc0fn.js";import"./index-ByRc8Ngv.js";import"./index-3gvosMgp.js";import"./PdfViewerToolbar-DCzb2uGc.js";import"./Button-B9zOpaLB.js";import"./chevron-right-CZmh5wuR.js";import"./Input-BIktgYh6.js";import"./search-CjppIQIx.js";import"./spin-CbwOaeRm.js";import"./error-DXxRlpOL.js";import"./withOsdkMetrics-p9zjIMMx.js";import"./makeExternalStore-BANZXC9U.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
