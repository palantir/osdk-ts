import{j as r,M as s}from"./iframe-BSUZxh-9.js";import{P as p}from"./pdf-viewer-CoBcBs0g.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DAnQmSNz.js";import"./preload-helper-BhicQgxj.js";import"./PdfRenderer-BBw1Cr9e.js";import"./index-PZ02iCA_.js";import"./PdfViewer-CmpqWPTP.js";import"./PdfViewer.module.css-CyeaXEoH.js";import"./PdfViewerAnnotationLayer-Cl_2L54b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZmfDCZnh.js";import"./PdfViewerOutlineSidebar--IL4zKle.js";import"./PdfViewerSidebarHeader-Q9r29o6N.js";import"./useBaseUiId-CDKqUQr4.js";import"./useControlled-CoF5fTAt.js";import"./CompositeRoot-B9i2FyEo.js";import"./CompositeItem-CdjXHz2a.js";import"./ToolbarRootContext-BHZuK8Kw.js";import"./composite-DEKiG8Z3.js";import"./svgIconContainer-DjMnKwvc.js";import"./PdfViewerSearchBar-BuF1TJCg.js";import"./chevron-up-Bqfc3Kut.js";import"./chevron-down-DOiBGOW0.js";import"./cross-C18nhb5p.js";import"./PdfViewerSidebar-C334N4ct.js";import"./index-BTU-MtEl.js";import"./index-k6doTGvs.js";import"./index-DmJ1u2c6.js";import"./PdfViewerToolbar-3HRh9-3U.js";import"./Button-IuSyIF4u.js";import"./chevron-right-ocqBJ34Z.js";import"./Input-BpSByKf4.js";import"./search-CZUb2qBT.js";import"./spin-DkplpJrZ.js";import"./error-95LyalOl.js";import"./withOsdkMetrics-CxSOL3gI.js";import"./makeExternalStore-BlYL4sto.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
