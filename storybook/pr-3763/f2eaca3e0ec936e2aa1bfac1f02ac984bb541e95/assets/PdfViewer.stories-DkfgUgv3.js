import{j as r,M as s}from"./iframe-B7MJ_I4S.js";import{P as p}from"./pdf-viewer-DSVhQ7Fc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CMpaEtx-.js";import"./preload-helper-Cov2K-k_.js";import"./PdfViewer-BD-6Nscc.js";import"./index-C9xfkj2b.js";import"./BasePdfViewer-CCYREyTg.js";import"./BasePdfViewer.module.css-lGDN8awW.js";import"./PdfViewerAnnotationLayer-B5SUUt_s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DIg6c1Ov.js";import"./PdfViewerOutlineSidebar-B9HhBdae.js";import"./PdfViewerSidebarHeader-CRc1AY1v.js";import"./useBaseUiId-DV-TM7_o.js";import"./useControlled-CXNm2xWR.js";import"./CompositeRoot-DlMiUBwe.js";import"./CompositeItem-4qcJnRqN.js";import"./ToolbarRootContext-BhG2wJHB.js";import"./composite-KA45R7op.js";import"./svgIconContainer-DK_hyPcz.js";import"./PdfViewerSearchBar-CvwKJHl7.js";import"./chevron-up-BclO7WjC.js";import"./chevron-down-CsWhq03e.js";import"./cross-BTDYOKg8.js";import"./PdfViewerSidebar-RHEg5MI7.js";import"./index-DJVv4RIW.js";import"./index-CZX5DcZe.js";import"./index-XczBWBXZ.js";import"./PdfViewerToolbar-P0UlDRML.js";import"./Button-BFw5rIiu.js";import"./chevron-right-BF_q5MwO.js";import"./Input-DOi3h0W_.js";import"./search-Cf_AT2nS.js";import"./spin-BtWj3Uh7.js";import"./error-BDRA02ra.js";import"./withOsdkMetrics-hrRyl2Up.js";import"./makeExternalStore-D-74d3Y_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
