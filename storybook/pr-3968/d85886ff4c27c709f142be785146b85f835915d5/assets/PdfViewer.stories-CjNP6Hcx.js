import{j as r,M as s}from"./iframe-DwvgFPBy.js";import{P as p}from"./pdf-viewer-0lMlsppO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-q4powPUq.js";import"./preload-helper-CtrM-3nz.js";import"./PdfViewer-DXRhhCV_.js";import"./index-ChfnPNU9.js";import"./BasePdfViewer-DQC88UCp.js";import"./BasePdfViewer.module.css-Bx3nt1Hn.js";import"./PdfViewerAnnotationLayer-CZJDdJu8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFULP-nl.js";import"./PdfViewerOutlineSidebar-ebXnhtg-.js";import"./PdfViewerSidebarHeader-ZuwYpnZZ.js";import"./useBaseUiId-CHF1IBcr.js";import"./useControlled-De5DdgKM.js";import"./CompositeRoot-aEykZQye.js";import"./CompositeItem-DAydT348.js";import"./ToolbarRootContext-CV_vZDG6.js";import"./composite-DuoDUKUH.js";import"./svgIconContainer-BgKykxWQ.js";import"./PdfViewerSearchBar-DtRPKLQU.js";import"./chevron-up-CmQXEiiE.js";import"./chevron-down-OGN5YYQ1.js";import"./cross-C1oe8vnK.js";import"./PdfViewerSidebar-D78LF4Qz.js";import"./index-C2pnKJHd.js";import"./index-DUsIeEWR.js";import"./index-DngtPiIB.js";import"./PdfViewerToolbar-xT2eQ0eF.js";import"./Button-C57imQCz.js";import"./chevron-right-AytnaI70.js";import"./Input-DlFD1yhx.js";import"./search--SWXDnoj.js";import"./spin-CjIh-9Jt.js";import"./error-BqWzkB-Q.js";import"./withOsdkMetrics-qh2Z3PSD.js";import"./makeExternalStore-DVeA--Ja.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
