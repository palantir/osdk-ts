import{j as r,M as s}from"./iframe-SQbFhZ3c.js";import{P as p}from"./pdf-viewer-bY556iOY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ci7yw86b.js";import"./preload-helper-Bk8HE262.js";import"./PdfViewer-BVgKz5cj.js";import"./index-DFG7WYoY.js";import"./BasePdfViewer-DDMPAMjI.js";import"./BasePdfViewer.module.css-Xi16gsFv.js";import"./PdfViewerAnnotationLayer-ClDyC0Fr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PiH7h3j-.js";import"./PdfViewerOutlineSidebar-DFC6yJlD.js";import"./PdfViewerSidebarHeader-CQTxJ1Uu.js";import"./useBaseUiId-48FpeFM-.js";import"./useControlled-D7ywdRLy.js";import"./CompositeRoot-CT3Ip4A4.js";import"./CompositeItem-Ddktyv2i.js";import"./ToolbarRootContext-BzTAPp2U.js";import"./composite-A_HFMc3o.js";import"./svgIconContainer-DpbMU5PI.js";import"./PdfViewerSearchBar-BzOfJxtU.js";import"./chevron-up-CT6GxE1g.js";import"./chevron-down-BXSL_Za9.js";import"./cross-DUHf3Xi-.js";import"./PdfViewerSidebar-RFszj3_I.js";import"./index-B7SqLSeR.js";import"./index-DhCXsyWo.js";import"./index-DMJ3tVV7.js";import"./PdfViewerToolbar-CYnIgMPf.js";import"./Button-CFQTwDbl.js";import"./chevron-right-CeD7ClJ1.js";import"./Input-egVrdWvR.js";import"./search-Dv1CXcia.js";import"./spin-D3OIESEt.js";import"./error-cnAgyc_T.js";import"./withOsdkMetrics-C4ZNcPUI.js";import"./makeExternalStore-BRt0pXTA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
