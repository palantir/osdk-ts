import{j as r,M as s}from"./iframe-VuQ6RwPt.js";import{P as p}from"./pdf-viewer-DPhn9Dmq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BU8uOCk8.js";import"./preload-helper-CKk4SWoC.js";import"./PdfRenderer-BWuCuiPJ.js";import"./index-DoQA3n1t.js";import"./PdfViewer-BN2fNbhl.js";import"./PdfViewer.module.css-tJ5PUAS0.js";import"./PdfViewerAnnotationLayer-DE3oV0Tw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Kn3GTYkP.js";import"./PdfViewerOutlineSidebar-B7MocpTZ.js";import"./PdfViewerSidebarHeader-CCBT2gzb.js";import"./useBaseUiId-CUrW8lhI.js";import"./useControlled-B6bXDO-c.js";import"./CompositeRoot-BI4fTPtK.js";import"./CompositeItem-4quomPQq.js";import"./ToolbarRootContext-D4igm7OB.js";import"./composite-BV-FC-Kn.js";import"./svgIconContainer-D23zCiti.js";import"./PdfViewerSearchBar-BFZZOtdV.js";import"./chevron-up-BvC98Grk.js";import"./chevron-down-AuVDMi2f.js";import"./cross-Ca9m439o.js";import"./PdfViewerSidebar-02iEZeqK.js";import"./index-CCszNCm4.js";import"./index-CCcuDDdO.js";import"./index-tfKKNQzN.js";import"./PdfViewerToolbar-DJTA5A_v.js";import"./Button-Cn_l3szX.js";import"./chevron-right-CYVhbPW3.js";import"./Input-K3IP_uN7.js";import"./search-Def4Uy4S.js";import"./spin-Dow6K1hw.js";import"./error-Ci9Amk-Q.js";import"./withOsdkMetrics-DMhqF5dw.js";import"./makeExternalStore-DaowcOFP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
