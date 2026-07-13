import{j as r,M as s}from"./iframe-Ot0GxjTr.js";import{P as p}from"./pdf-viewer-Cw9r5TCv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BKqnPkMN.js";import"./preload-helper-DFpNKA9O.js";import"./PdfRenderer-BPdQr_4X.js";import"./index-BRML9mit.js";import"./PdfViewer-BtiGtlOs.js";import"./PdfViewer.module.css-DeZdouSm.js";import"./PdfViewerAnnotationLayer-6FSGCN1M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-xsfOb2m5.js";import"./PdfViewerOutlineSidebar-DGG5oCvd.js";import"./PdfViewerSidebarHeader-BtYHoxgs.js";import"./useBaseUiId-DDlLKIgV.js";import"./useControlled-Vo5SReNb.js";import"./CompositeRoot-CLLmwH_-.js";import"./CompositeItem-B1d6nBsa.js";import"./ToolbarRootContext-CgP0PFgV.js";import"./composite-DP1JrpiD.js";import"./svgIconContainer-HicdYp2r.js";import"./PdfViewerSearchBar-CI9Dj4Jo.js";import"./chevron-up-Bx6V0NE4.js";import"./chevron-down-3bmQMyw7.js";import"./cross-CpYxlxRI.js";import"./PdfViewerSidebar-DTWZmUFN.js";import"./index-CflU78M4.js";import"./index-Ozw8qwYC.js";import"./index-CxN3dem-.js";import"./PdfViewerToolbar-DWDtEyGK.js";import"./Button-BF-MGMty.js";import"./chevron-right-DieP7ppP.js";import"./Input-VABQru-I.js";import"./search-Br1hTVDJ.js";import"./spin-MnAPR9lT.js";import"./error-FTyzIopn.js";import"./withOsdkMetrics-DUE0eKfQ.js";import"./makeExternalStore-1z_XAK9i.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
