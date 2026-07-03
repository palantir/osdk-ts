import{j as r,M as s}from"./iframe-2pngh1Rs.js";import{P as p}from"./pdf-viewer-DfF3u2Qy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DuhRH1v9.js";import"./preload-helper-CG8d724h.js";import"./PdfRenderer-Dy0D1bpE.js";import"./index-DoLrcSFS.js";import"./PdfViewer-VC2Ixg5z.js";import"./PdfViewer.module.css-CJplXL3f.js";import"./PdfViewerAnnotationLayer-CeiHgJt9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCiDPmNz.js";import"./PdfViewerOutlineSidebar-BNqqZwJ7.js";import"./PdfViewerSidebarHeader-CqWq-CzY.js";import"./useBaseUiId-D2X0nhPh.js";import"./useControlled-DKX0vwB-.js";import"./CompositeRoot-B1eQivZV.js";import"./CompositeItem-3UU-yOXx.js";import"./ToolbarRootContext-CBQFrsGy.js";import"./composite-FrGOJff3.js";import"./svgIconContainer-Dz9aGjPQ.js";import"./PdfViewerSearchBar-IKQNL6AA.js";import"./chevron-up-DQKaNRqx.js";import"./chevron-down-CZ7isOC9.js";import"./cross-QeX5l1qW.js";import"./PdfViewerSidebar-FhnE2uhG.js";import"./index-B1RupX0X.js";import"./index-B3lZ1DGZ.js";import"./index-BTbdItMS.js";import"./PdfViewerToolbar-CLzq_Wa0.js";import"./Button-CHBFkWEg.js";import"./chevron-right-dWwFgCnQ.js";import"./Input-pzJCWXrM.js";import"./search-D4EMTx6V.js";import"./spin-D6QPEt8F.js";import"./error-DU4AEtX8.js";import"./withOsdkMetrics-BRYLmxO3.js";import"./makeExternalStore-_p5KoIlo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
