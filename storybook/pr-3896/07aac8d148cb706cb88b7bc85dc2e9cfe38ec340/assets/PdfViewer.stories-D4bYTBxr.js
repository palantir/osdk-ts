import{j as r,M as s}from"./iframe-CgO27IRu.js";import{P as p}from"./pdf-viewer-DQ0q3kif.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQQRkCyk.js";import"./preload-helper-BFaeybdJ.js";import"./PdfViewer-R-kCeBJN.js";import"./index-BYcjpIix.js";import"./BasePdfViewer-NleJjZ1p.js";import"./BasePdfViewer.module.css-BiS_AqRD.js";import"./PdfViewerAnnotationLayer-K2D6BbN-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Co4u2DLP.js";import"./PdfViewerOutlineSidebar-C71M1dUg.js";import"./PdfViewerSidebarHeader-CKv5I33L.js";import"./useBaseUiId-BO2BnfXi.js";import"./useControlled-DQw2ttEs.js";import"./CompositeRoot-BSlmzy40.js";import"./CompositeItem-DM5Ux4XM.js";import"./ToolbarRootContext-Dk5396e8.js";import"./composite-p801Jdqa.js";import"./svgIconContainer-DhCCLzjj.js";import"./PdfViewerSearchBar-0Vnryd5P.js";import"./chevron-up-DIxxI8Ue.js";import"./chevron-down-BHGyaEjN.js";import"./cross-7f4N_TUE.js";import"./PdfViewerSidebar-BWf_ymiq.js";import"./index-D4Z8a6hC.js";import"./index-D2mMtCtu.js";import"./index-BUqQhE-Z.js";import"./PdfViewerToolbar-C4O6cpcG.js";import"./Button-IqR8HyTq.js";import"./chevron-right-DG5OLctv.js";import"./Input-Dj3Aq0gE.js";import"./search-BsJeG7XA.js";import"./spin-BuY6Sw7J.js";import"./error-CvjVBbuk.js";import"./withOsdkMetrics-DT_01Uro.js";import"./makeExternalStore-BWlpa4eR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
