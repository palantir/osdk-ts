import{j as r,M as s}from"./iframe-gVAmUTQg.js";import{P as p}from"./pdf-viewer-DY1ichzN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CmHLykqX.js";import"./preload-helper-3Sf5Feu3.js";import"./PdfRenderer-Dzw-LOMp.js";import"./index-BeeoVX-q.js";import"./PdfViewer-HTRjs7bg.js";import"./PdfViewer.module.css-raq8HPgA.js";import"./PdfViewerAnnotationLayer-DKtpAhOt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Mo22GaK9.js";import"./PdfViewerOutlineSidebar-D3Qr3cBG.js";import"./PdfViewerSidebarHeader-FQFw3O_r.js";import"./useBaseUiId-CHWfe0kM.js";import"./useControlled-CdRGPDPf.js";import"./CompositeRoot-CTNlP_dV.js";import"./CompositeItem-ieCqGqC2.js";import"./ToolbarRootContext-ByYznoe0.js";import"./composite-DuUe5pNY.js";import"./svgIconContainer-B4Z8Cc9p.js";import"./PdfViewerSearchBar-DtG9XzAZ.js";import"./chevron-up-rWfwUOcU.js";import"./chevron-down-C1g0o6pf.js";import"./cross-jlTg3KlE.js";import"./PdfViewerSidebar-C3jE9fCn.js";import"./index-CR2aVeKh.js";import"./index-J26Dm_pE.js";import"./index-G-6YzhfM.js";import"./PdfViewerToolbar-f2ld85T6.js";import"./Button-Dr-T1AFV.js";import"./chevron-right-BcpwpVVu.js";import"./Input-BkbQvjPR.js";import"./search-BaBEiFT5.js";import"./spin-DOPPdNGZ.js";import"./error-tp1IHQ0n.js";import"./withOsdkMetrics-F5cMDIFA.js";import"./makeExternalStore-DdyFijLM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
