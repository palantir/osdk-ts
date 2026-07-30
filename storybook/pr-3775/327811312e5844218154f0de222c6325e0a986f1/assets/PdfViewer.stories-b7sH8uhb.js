import{j as r,M as s}from"./iframe-Dt0Ahp7v.js";import{P as p}from"./pdf-viewer-IxdcrGyA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BqoKSpB4.js";import"./preload-helper-Csxsg529.js";import"./PdfRenderer-DqBBMZA-.js";import"./index-DKNyxDiu.js";import"./PdfViewer-COt9fgt6.js";import"./PdfViewer.module.css-CWVO1ppG.js";import"./PdfViewerAnnotationLayer-BiD5MXZV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CH-OlRQs.js";import"./PdfViewerOutlineSidebar-C4A_w7Sy.js";import"./PdfViewerSidebarHeader-DKWx6w3g.js";import"./useBaseUiId-CdwE49_c.js";import"./useControlled-LVr7DFLg.js";import"./CompositeRoot-BCEyzS5s.js";import"./CompositeItem-pKV5GE2B.js";import"./ToolbarRootContext-BdRkmkbo.js";import"./composite-RqLHFCRB.js";import"./svgIconContainer-CB7_PxJy.js";import"./PdfViewerSearchBar-BSw60sg8.js";import"./chevron-up-DBkdXpiA.js";import"./chevron-down-DNCAQpBE.js";import"./cross-DRzxKD9P.js";import"./PdfViewerSidebar-C_6gk3MW.js";import"./index-wINFjYfg.js";import"./index-DgQ3UFA5.js";import"./index-BrDzKhkc.js";import"./PdfViewerToolbar-x3qdGSUu.js";import"./Button-Du4-mwXs.js";import"./chevron-right-CguWwEjr.js";import"./Input-BG_Aon1B.js";import"./search-CMt_GG0Z.js";import"./spin-_fg-dlss.js";import"./error-DG09RTcC.js";import"./withOsdkMetrics-8vUC6id2.js";import"./makeExternalStore-BYkIgxdy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
