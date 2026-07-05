import{j as r,M as s}from"./iframe-Dsxw0GBU.js";import{P as p}from"./pdf-viewer-pRhefOKr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bc9d2yx0.js";import"./preload-helper-BnwWVRsr.js";import"./PdfRenderer-C2k1y09e.js";import"./index-DPoeuhvQ.js";import"./PdfViewer-BpZO1-nQ.js";import"./PdfViewer.module.css-B3cJhycW.js";import"./PdfViewerAnnotationLayer-BFNq1Ock.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hutGUWRo.js";import"./PdfViewerOutlineSidebar-DtrxgVSB.js";import"./PdfViewerSidebarHeader-tMWR47Rb.js";import"./useBaseUiId-Dn2RBhnq.js";import"./useControlled-G8iNDU9Z.js";import"./CompositeRoot-CpnjsLQX.js";import"./CompositeItem-0WcUmr8Z.js";import"./ToolbarRootContext-Dspty5lB.js";import"./composite-DOVvnto0.js";import"./svgIconContainer-iLTT7Lnw.js";import"./PdfViewerSearchBar-B3bDd_S1.js";import"./chevron-up-CIEO49iL.js";import"./chevron-down-C7k0uR2B.js";import"./cross-CIuUI1ag.js";import"./PdfViewerSidebar-Cumy6HIw.js";import"./index-CFvaYR46.js";import"./index-BD0WDeZd.js";import"./index-CKGM5C8i.js";import"./PdfViewerToolbar-CN3wbcit.js";import"./Button-DQbdnJ3J.js";import"./chevron-right-BOupfq4z.js";import"./Input-CttQmBnh.js";import"./search-g4Lu9O_Q.js";import"./spin-BloxSISX.js";import"./error-DFm0ZNQQ.js";import"./withOsdkMetrics-B4qbEFAW.js";import"./makeExternalStore-X9ZU_bQ2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
