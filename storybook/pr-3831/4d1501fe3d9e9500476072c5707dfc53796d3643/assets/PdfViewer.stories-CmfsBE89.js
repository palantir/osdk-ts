import{j as r,M as s}from"./iframe-B_zElg-B.js";import{P as p}from"./pdf-viewer-B0inS5uB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQ_OEg4Z.js";import"./preload-helper-DRQoOE0T.js";import"./PdfRenderer-BMg21F6O.js";import"./index-Y0pbVALd.js";import"./PdfViewer-BsLmdOC9.js";import"./PdfViewer.module.css-B20Dn52r.js";import"./PdfViewerAnnotationLayer-DljoRja4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4uydjavv.js";import"./PdfViewerOutlineSidebar-Cg_AAmu7.js";import"./PdfViewerSidebarHeader-DrmWl6kv.js";import"./useBaseUiId-C39aF9XL.js";import"./useControlled-6dtWCE0B.js";import"./CompositeRoot-GwqgGIHe.js";import"./CompositeItem-BVhfnvWC.js";import"./ToolbarRootContext-Cy1n_T1N.js";import"./composite-0kNuzYvp.js";import"./svgIconContainer-CUDghfka.js";import"./PdfViewerSearchBar-yI11k7G2.js";import"./chevron-up-B1q_s0mr.js";import"./chevron-down--uAY4t4Y.js";import"./cross-AjEzGA8V.js";import"./PdfViewerSidebar-mZWU5pps.js";import"./index-Cnqy7EOL.js";import"./index-Cixqsfx9.js";import"./index-C6L5_3LK.js";import"./PdfViewerToolbar-DegO1Tuz.js";import"./Button-Ct7hm6nC.js";import"./chevron-right-CQsXP4dX.js";import"./Input-CYBD-BHU.js";import"./search-D4GHHRcy.js";import"./spin-BvtfZq-e.js";import"./error-Ckw62m6f.js";import"./withOsdkMetrics-BBrkQJAI.js";import"./makeExternalStore-B-Aw5Aa5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
