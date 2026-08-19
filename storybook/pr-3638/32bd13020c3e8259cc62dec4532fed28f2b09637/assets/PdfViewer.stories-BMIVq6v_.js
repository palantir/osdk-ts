import{j as r,M as s}from"./iframe-DMCinZdR.js";import{P as p}from"./pdf-viewer-Csr3JS2z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClSarC8R.js";import"./preload-helper-BCg2fv9s.js";import"./PdfViewer-B6zzpETi.js";import"./index-Cn1vMB8x.js";import"./BasePdfViewer-mM4f1gAb.js";import"./BasePdfViewer.module.css-BwD4rIp7.js";import"./PdfViewerAnnotationLayer-DB8SE3cf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ByGEPGsS.js";import"./PdfViewerOutlineSidebar-uevSE3al.js";import"./PdfViewerSidebarHeader-AcRN37zy.js";import"./useBaseUiId-BeT3oypJ.js";import"./useControlled-DU_OOF2s.js";import"./CompositeRoot-Bh1-Q7yS.js";import"./CompositeItem-zAhJ8rlm.js";import"./ToolbarRootContext-Bgke2_pO.js";import"./composite-yv0I3xy5.js";import"./svgIconContainer-De7fNnjX.js";import"./PdfViewerSearchBar-DAtoK5w0.js";import"./chevron-up-iVagFQai.js";import"./chevron-down-Brw6_9zU.js";import"./cross-CcPjSvKf.js";import"./PdfViewerSidebar-ZqQaIebO.js";import"./index-GmGknXw_.js";import"./index-YxjRsNBV.js";import"./index-DvMnSwXX.js";import"./PdfViewerToolbar-D9mVSz-T.js";import"./Button-DPfft23P.js";import"./chevron-right-DOug2deT.js";import"./Input-wY3__TYn.js";import"./search-CjEQMDkw.js";import"./spin-DZCasvXg.js";import"./error-3Qx0C84K.js";import"./withOsdkMetrics-DZCo0Bwa.js";import"./makeExternalStore-DypcUv4D.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
