import{j as r,M as s}from"./iframe-CV7MwmCP.js";import{P as p}from"./pdf-viewer-CU9PLjN3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CkKsMTnP.js";import"./preload-helper-DaalMKrO.js";import"./PdfViewer-BFHlPQZT.js";import"./index-CcmSo4f0.js";import"./BasePdfViewer-W_XJDk8E.js";import"./BasePdfViewer.module.css-Bd7M0iJa.js";import"./PdfViewerAnnotationLayer-DoCcfe9V.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-K-bPXgYE.js";import"./PdfViewerOutlineSidebar-CMRyZBaf.js";import"./PdfViewerSidebarHeader-DWvKIEI4.js";import"./useBaseUiId-D02gbCJt.js";import"./useControlled-B_AlXpDe.js";import"./CompositeRoot-DJoFDgZC.js";import"./CompositeItem-DeeqYyog.js";import"./ToolbarRootContext-m0BDUoDq.js";import"./composite-C5wlKwIo.js";import"./svgIconContainer-BUwlxwM3.js";import"./PdfViewerSearchBar-CQXJbfq4.js";import"./chevron-up-CWQyaSWz.js";import"./chevron-down-DSa8oKzx.js";import"./cross-BCKmMZfz.js";import"./PdfViewerSidebar-Cqi1uMuZ.js";import"./index-BT2TFY4S.js";import"./index-Cbmw9Aiw.js";import"./index-DZAiGofL.js";import"./PdfViewerToolbar-CfAp8i29.js";import"./Button-DL3cpirA.js";import"./chevron-right-CeUnF3yh.js";import"./Input-LBPH7NI5.js";import"./search-ZA-JuIRw.js";import"./spin-CYyT1yx4.js";import"./error-CMXtHiOW.js";import"./withOsdkMetrics-B-y4GUW2.js";import"./makeExternalStore-D2__KQ0O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
