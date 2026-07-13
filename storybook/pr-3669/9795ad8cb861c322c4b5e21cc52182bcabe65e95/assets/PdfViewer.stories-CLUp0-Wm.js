import{j as r,M as s}from"./iframe-B58nOH3w.js";import{P as p}from"./pdf-viewer-r9CFZUUt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DSiZslkA.js";import"./preload-helper-USapLSCa.js";import"./PdfRenderer-NIuEcoAw.js";import"./index-DOZq4Nf6.js";import"./PdfViewer-Dv4oi0SE.js";import"./PdfViewer.module.css-CbAU31Jn.js";import"./PdfViewerAnnotationLayer-DRTsZwyC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXbwwO6j.js";import"./PdfViewerOutlineSidebar-BwQv1K3P.js";import"./PdfViewerSidebarHeader-DWuTF-N3.js";import"./useBaseUiId-DIjqosEe.js";import"./useControlled-Ci_r0JjH.js";import"./CompositeRoot-Dhp7iU40.js";import"./CompositeItem-CYpH_Oj6.js";import"./ToolbarRootContext-B3AWpRJU.js";import"./composite-BTUagR_l.js";import"./svgIconContainer-DGWvjRiM.js";import"./PdfViewerSearchBar-BRwLKfYy.js";import"./chevron-up-BK-Z6UsE.js";import"./chevron-down-C6W6J5P0.js";import"./cross-CpiknFZf.js";import"./PdfViewerSidebar-CHvss1NB.js";import"./index-DZH5jSGD.js";import"./index-BdW4SvKX.js";import"./index-DQfXbhII.js";import"./PdfViewerToolbar-CZPxQ8VQ.js";import"./Button-Bn3eOMbk.js";import"./chevron-right-jm3_UrEU.js";import"./Input-Ky8lOJ0y.js";import"./search-CCBdM2yc.js";import"./spin-DUvBWRuk.js";import"./error-H4f42mvW.js";import"./withOsdkMetrics-CPjS5Ta7.js";import"./makeExternalStore-BNAkx2eX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
