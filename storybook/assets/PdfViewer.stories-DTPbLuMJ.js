import{j as r,M as s}from"./iframe-BzkjJtXX.js";import{P as p}from"./pdf-viewer-Co-AOkQn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-dwH0kttv.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-CfVEEmtV.js";import"./index-AuwQf2bm.js";import"./PdfViewer-BNdkmsUD.js";import"./PdfViewer.module.css-D3EsLRn2.js";import"./PdfViewerAnnotationLayer-CSO28xYt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8vMYEbi.js";import"./PdfViewerOutlineSidebar-CwaVdAg7.js";import"./PdfViewerSidebarHeader-CEjjgRFs.js";import"./useBaseUiId-DFOZAV_i.js";import"./useControlled-OeVvUN90.js";import"./CompositeRoot-CAg_pxRJ.js";import"./CompositeItem-B3mclHbn.js";import"./ToolbarRootContext-Dknw64cA.js";import"./composite-EGYekfRG.js";import"./svgIconContainer-D1C1D5iR.js";import"./PdfViewerSearchBar-ClieqHFv.js";import"./chevron-up-Bj02AKsa.js";import"./chevron-down-dI6_cRca.js";import"./cross-DrbLepVL.js";import"./PdfViewerSidebar-D8ZN_bga.js";import"./index-D9E1JzZD.js";import"./index-BVEHUPlm.js";import"./index-BVKF6jay.js";import"./PdfViewerToolbar-CbI7ltLR.js";import"./Button-eI1UM5MA.js";import"./chevron-right-C3Z4Ew2g.js";import"./Input-G4QBYjm1.js";import"./search-dvqk96LM.js";import"./spin-BK2RhgGJ.js";import"./error-BEAWV2A7.js";import"./withOsdkMetrics-BbYAXndz.js";import"./makeExternalStore-GNMsIj7m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
