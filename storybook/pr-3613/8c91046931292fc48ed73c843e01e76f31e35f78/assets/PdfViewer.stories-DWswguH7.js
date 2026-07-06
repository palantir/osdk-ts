import{j as r,M as s}from"./iframe-Cu_KTnnP.js";import{P as p}from"./pdf-viewer-B9JhaQwz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-De7lh75G.js";import"./preload-helper-CST8YKaX.js";import"./PdfRenderer-DcTm3AV7.js";import"./index-DCmiLcEH.js";import"./PdfViewer-DcpDHSFg.js";import"./PdfViewer.module.css-rcViYt8r.js";import"./PdfViewerAnnotationLayer-DjuE849L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Da4kk7XN.js";import"./PdfViewerOutlineSidebar-CgcFxRDs.js";import"./PdfViewerSidebarHeader-CfsXKoGU.js";import"./useBaseUiId-DQ1i1HvP.js";import"./useControlled-C_o7ozFW.js";import"./CompositeRoot-rTFCaMmN.js";import"./CompositeItem-D7qlHE3e.js";import"./ToolbarRootContext-BIcM9TO3.js";import"./composite-CCPiVe2a.js";import"./svgIconContainer-CIbJAvzW.js";import"./PdfViewerSearchBar-ByD2dCyp.js";import"./chevron-up-BpDtiULX.js";import"./chevron-down-7Mwq2lEl.js";import"./cross-DhwoQ3Cs.js";import"./PdfViewerSidebar-DsrpN9Ol.js";import"./index-oyR97XSn.js";import"./index-CWNoOFpl.js";import"./index-Dd-rIXPz.js";import"./PdfViewerToolbar-CXN7txpY.js";import"./Button-nPFPMaQF.js";import"./chevron-right-C8MdKxD4.js";import"./Input-DCSfEZTZ.js";import"./search-DTXooeDv.js";import"./spin-GB1qx8FS.js";import"./error-BHN40zNs.js";import"./withOsdkMetrics-DROh4esD.js";import"./makeExternalStore-CVVblFMU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
