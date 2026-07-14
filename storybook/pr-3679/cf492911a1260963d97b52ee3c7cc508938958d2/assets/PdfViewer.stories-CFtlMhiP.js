import{j as r,M as s}from"./iframe-D-LDqwFV.js";import{P as p}from"./pdf-viewer-CvCSxSFm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CWKpjkER.js";import"./preload-helper-CQgjpoET.js";import"./PdfRenderer-4BkcgrKX.js";import"./index-CDUltvKd.js";import"./PdfViewer-BN67qC-o.js";import"./PdfViewer.module.css-DzRzNWmr.js";import"./PdfViewerAnnotationLayer-B9PTJ1eM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtTPxuNL.js";import"./PdfViewerOutlineSidebar-CZtTUmWa.js";import"./PdfViewerSidebarHeader-BEwugmE1.js";import"./useBaseUiId-IB9AIj0E.js";import"./useControlled-CqgLyap4.js";import"./CompositeRoot-DlRAR5qu.js";import"./CompositeItem-BwEwnpvu.js";import"./ToolbarRootContext-DabkRgUu.js";import"./composite-DcNZJmK6.js";import"./svgIconContainer-Dil5nr73.js";import"./PdfViewerSearchBar-C8MTxOmX.js";import"./chevron-up-bmtbUnh8.js";import"./chevron-down-cBxLir_w.js";import"./cross-CglMTmlH.js";import"./PdfViewerSidebar-CTavXB74.js";import"./index-nLq2NWR7.js";import"./index-D2AFFczo.js";import"./index-BOBRfhg4.js";import"./PdfViewerToolbar-Boy3YJ0w.js";import"./Button-Cf09MQ3n.js";import"./chevron-right-GC7i78TP.js";import"./Input-9ImZUvVS.js";import"./search-ujkrvjg4.js";import"./spin-BT8YmM2E.js";import"./error-C0LfW5Cp.js";import"./withOsdkMetrics-Dt7kn6iD.js";import"./makeExternalStore-CwOQofhM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
