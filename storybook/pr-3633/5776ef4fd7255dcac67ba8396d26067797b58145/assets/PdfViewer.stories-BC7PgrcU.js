import{j as r,M as s}from"./iframe-C-iT7w4k.js";import{P as p}from"./pdf-viewer-CtIPAS8_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DfBrBCAF.js";import"./preload-helper-vg_g2PU1.js";import"./PdfRenderer-B6q8LugC.js";import"./index-BcvTpDLz.js";import"./PdfViewer-CBrI3ymG.js";import"./PdfViewer.module.css-B9-XZL1F.js";import"./PdfViewerAnnotationLayer-DxPi4AmM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cv79oc4B.js";import"./PdfViewerOutlineSidebar-CYGXK-QI.js";import"./PdfViewerSidebarHeader-AR8RmBzf.js";import"./useBaseUiId-BJ-1OMTm.js";import"./useControlled-DIdw599V.js";import"./CompositeRoot-elgrCnev.js";import"./CompositeItem-Vq_k8cXg.js";import"./ToolbarRootContext-CIPU4Dcj.js";import"./composite-C0bwRDPE.js";import"./svgIconContainer-CgP6IBxf.js";import"./PdfViewerSearchBar-C9BZ14qe.js";import"./chevron-up-D_0kaKZu.js";import"./chevron-down-By4uoNUN.js";import"./cross-CU94BJkZ.js";import"./PdfViewerSidebar-DF0xu_Ho.js";import"./index-CDjPIzPn.js";import"./index-BS4XLLOI.js";import"./index-DvUCCHGa.js";import"./PdfViewerToolbar-DOZDDaEt.js";import"./Button-Dax5y9Ey.js";import"./chevron-right-CD58xoAi.js";import"./Input-QB8cqiXh.js";import"./search-Bo_0IVHL.js";import"./spin-CZ6-8AKL.js";import"./error-BlpxqpIu.js";import"./withOsdkMetrics-uEINst_o.js";import"./makeExternalStore-Do5c9HL5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
