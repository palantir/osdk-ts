import{j as r,M as s}from"./iframe-Bb7nZlGl.js";import{P as p}from"./pdf-viewer-DDJ_-oXg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-TOPm2wGg.js";import"./preload-helper-5_2IOymj.js";import"./PdfRenderer-DSoRLYEu.js";import"./index-Ds72fwLq.js";import"./PdfViewer-BLqmerIG.js";import"./PdfViewer.module.css-Bvj54fCL.js";import"./PdfViewerAnnotationLayer-BcvItdgw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dw80RNvJ.js";import"./PdfViewerOutlineSidebar-CbZG7rjy.js";import"./PdfViewerSidebarHeader-BdWINa8d.js";import"./useBaseUiId-gkexnSBj.js";import"./useControlled-DB1jFnZJ.js";import"./CompositeRoot-DqsuTyOm.js";import"./CompositeItem-C4TcP1sN.js";import"./ToolbarRootContext-C-Jy6dbc.js";import"./composite-B2CTevqe.js";import"./svgIconContainer-vUElkusf.js";import"./PdfViewerSearchBar-DMw-ETYJ.js";import"./chevron-up-DTUDKb2p.js";import"./chevron-down-5D_xsBS1.js";import"./cross-BbGuk08-.js";import"./PdfViewerSidebar-BIPK0Uox.js";import"./index-DcZR_HTv.js";import"./index-COCL-ZTE.js";import"./index-Dfd0f2n1.js";import"./PdfViewerToolbar-BwUFYH3V.js";import"./Button-B4bVBPgy.js";import"./chevron-right-BAdjcRrZ.js";import"./Input-xAYKVEpU.js";import"./search-bXEtlzR1.js";import"./spin-DGbhlbYX.js";import"./error-lsghjmGP.js";import"./withOsdkMetrics-DRtLXghB.js";import"./makeExternalStore-Dp2HdhKw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
