import{j as r,M as s}from"./iframe-BnmParoh.js";import{P as p}from"./pdf-viewer-PSzs1aoC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClVg6yH-.js";import"./preload-helper-Cvy_vUUf.js";import"./PdfRenderer-CJ3cqzWG.js";import"./index-DCgasJ8a.js";import"./PdfViewer-CI_34Rkg.js";import"./PdfViewer.module.css-CTuhymb2.js";import"./PdfViewerAnnotationLayer-DtrHe-8s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B2KtbyeW.js";import"./PdfViewerOutlineSidebar-DUNtxV7X.js";import"./PdfViewerSidebarHeader-n05jVAhZ.js";import"./useBaseUiId-puuRtNOw.js";import"./useControlled-vDaQHP2_.js";import"./CompositeRoot-B-XIX_Sc.js";import"./CompositeItem-QiZ2YQX0.js";import"./ToolbarRootContext-D9HpIQbP.js";import"./composite-DREzLeH0.js";import"./svgIconContainer-DBDDFCwx.js";import"./PdfViewerSearchBar-WystqIV1.js";import"./chevron-up-RgdKufLk.js";import"./chevron-down-IaQfVpn8.js";import"./cross-mwjl5l3K.js";import"./PdfViewerSidebar-QO-zHIR4.js";import"./index-CW9_cB-q.js";import"./index-DlGr10DU.js";import"./index-DZ4b_GdU.js";import"./PdfViewerToolbar-B-RTvHGB.js";import"./Button-D0fUI8oS.js";import"./chevron-right-DUKxGGhd.js";import"./Input-BqrRRG8Z.js";import"./search-BKxgLIR1.js";import"./spin-Do7q4kM9.js";import"./error-CBf2M0qd.js";import"./withOsdkMetrics-DKcGj9-N.js";import"./makeExternalStore-qCm8NC8u.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
