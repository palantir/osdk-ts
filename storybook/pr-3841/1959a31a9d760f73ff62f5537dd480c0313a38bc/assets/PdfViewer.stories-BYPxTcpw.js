import{j as r,M as s}from"./iframe-C5mCK2PO.js";import{P as p}from"./pdf-viewer-CxH25cs4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHRfITbE.js";import"./preload-helper-B71-F3-E.js";import"./PdfViewer-1fORtFQZ.js";import"./index-x2FMdUXO.js";import"./BasePdfViewer-CQ0vPBzt.js";import"./BasePdfViewer.module.css-B2fu_-S2.js";import"./PdfViewerAnnotationLayer-Tqwb1NTi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BASu9lCU.js";import"./PdfViewerOutlineSidebar-CUysZkE7.js";import"./PdfViewerSidebarHeader-BS-QMKsb.js";import"./useBaseUiId-CRwAptA4.js";import"./useControlled-B76SscLe.js";import"./CompositeRoot-B6KlOQsY.js";import"./CompositeItem-CcgiUeN1.js";import"./ToolbarRootContext-Bjoxw1BG.js";import"./composite-DhwPvOlp.js";import"./svgIconContainer-jCGuJEaw.js";import"./PdfViewerSearchBar-CkBA-TAC.js";import"./chevron-up-CwaOz4xc.js";import"./chevron-down-DkRHA-R2.js";import"./cross-C2KqS3Pb.js";import"./PdfViewerSidebar-CfOoAJYR.js";import"./index-BYdvbw5G.js";import"./index-CXO1mTHj.js";import"./index-DqURmoPO.js";import"./PdfViewerToolbar-Bb6BTGgo.js";import"./Button-QzVHZwrk.js";import"./chevron-right-DWKJ9Lfd.js";import"./Input-ClKT9i6x.js";import"./search-QRaPLFIx.js";import"./spin-EWowC069.js";import"./error-9wJAHEot.js";import"./withOsdkMetrics-Cx5_Zqh1.js";import"./makeExternalStore-Dpr3oewV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
