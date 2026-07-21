import{j as r,M as s}from"./iframe-UqajrsoW.js";import{P as p}from"./pdf-viewer-Czp3hOZ_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CihlzeM9.js";import"./preload-helper-CJeET2h7.js";import"./PdfRenderer-CRFk2LbO.js";import"./index-CmtgLUwj.js";import"./PdfViewer-Dn822Z8F.js";import"./PdfViewer.module.css-BZHpURp2.js";import"./PdfViewerAnnotationLayer-CMjIR0dI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BW-6juAQ.js";import"./PdfViewerOutlineSidebar-DKKceWKr.js";import"./PdfViewerSidebarHeader-Se2J70qu.js";import"./useBaseUiId-BrGGNUOY.js";import"./useControlled-DOab4WQ8.js";import"./CompositeRoot-BU_DaXE_.js";import"./CompositeItem-BRKTidf5.js";import"./ToolbarRootContext-BboH-vWC.js";import"./composite-3VJYau70.js";import"./svgIconContainer-D-2BiFCP.js";import"./PdfViewerSearchBar-UQPLF46x.js";import"./chevron-up-DnQg6bKW.js";import"./chevron-down-DpqJ-OwS.js";import"./cross-BuNElw2x.js";import"./PdfViewerSidebar-8gafGna3.js";import"./index-DsJuxyW3.js";import"./index-DRqKrb3w.js";import"./index-BOlhsimz.js";import"./PdfViewerToolbar-D2Lw_VZu.js";import"./Button-Bj7hMr0l.js";import"./chevron-right-CB93QKO0.js";import"./Input-CxFj4lrX.js";import"./search-BQFJJ_A5.js";import"./spin-9bRSFa7q.js";import"./error-ChPKflVB.js";import"./withOsdkMetrics-gY6Ov3av.js";import"./makeExternalStore-Cj14d6ni.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
