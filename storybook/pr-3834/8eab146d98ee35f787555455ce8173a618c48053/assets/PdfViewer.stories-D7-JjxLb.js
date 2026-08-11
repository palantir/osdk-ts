import{j as r,M as s}from"./iframe-5Z3i0E9X.js";import{P as p}from"./pdf-viewer-BY8HsaOs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dz1ODMHy.js";import"./preload-helper-CxXp5K4w.js";import"./PdfViewer-BSddbTNM.js";import"./index-BfhbkjSI.js";import"./BasePdfViewer-Dp0GsPWK.js";import"./BasePdfViewer.module.css-Cxp_8DVc.js";import"./PdfViewerAnnotationLayer-DTst9rCE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWGHn-Io.js";import"./PdfViewerOutlineSidebar-BbZeV1ej.js";import"./PdfViewerSidebarHeader-BzCgP8fV.js";import"./useBaseUiId-BlRYUEsQ.js";import"./useControlled-Q_YoD09k.js";import"./CompositeRoot-36xfHZjO.js";import"./CompositeItem-DT5prC13.js";import"./ToolbarRootContext-CleLhimn.js";import"./composite-CSBuVBSk.js";import"./svgIconContainer-DvyPNWZq.js";import"./PdfViewerSearchBar-8qbSUBtj.js";import"./chevron-up-BLmqI1Bx.js";import"./chevron-down-CA1gmqiz.js";import"./cross-DZCL8gCN.js";import"./PdfViewerSidebar-Do-RURF2.js";import"./index-DX-aKmrv.js";import"./index-BPvT0TAi.js";import"./index-lKVM4LMn.js";import"./PdfViewerToolbar-Du-3Nj4m.js";import"./Button-MShjPJp1.js";import"./chevron-right-BLvrZepP.js";import"./Input-Bt5W6Bbn.js";import"./search-D1X78FHj.js";import"./spin-Oro8H7rW.js";import"./error-JfXpK5Qu.js";import"./withOsdkMetrics-nuv42wTk.js";import"./makeExternalStore-yqMU8E9S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
