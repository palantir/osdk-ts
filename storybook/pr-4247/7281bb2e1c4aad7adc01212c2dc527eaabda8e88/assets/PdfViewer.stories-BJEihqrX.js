import{j as r,M as s}from"./iframe-Bfa633nI.js";import{P as p}from"./pdf-viewer-5rX7yUw1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Sx0qPyy5.js";import"./preload-helper-S8ArRewN.js";import"./PdfViewer-CfhyNqxD.js";import"./index-CAFX3a2o.js";import"./BasePdfViewer-g28jOl28.js";import"./BasePdfViewer.module.css-DB2MjBJn.js";import"./PdfViewerAnnotationLayer-CVv8GWwL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hvGNAUKT.js";import"./PdfViewerOutlineSidebar-B8ecsGlo.js";import"./PdfViewerSidebarHeader-DWaMPeYw.js";import"./useBaseUiId-DkL2EsGI.js";import"./useControlled-DE-SX_fd.js";import"./CompositeRoot-GHWxNL93.js";import"./CompositeItem-BHvcBU4g.js";import"./ToolbarRootContext-rfZwmAj4.js";import"./composite-MyhD4oE7.js";import"./svgIconContainer-CMg2uk3-.js";import"./PdfViewerSearchBar-Gcot_-mn.js";import"./chevron-up-aN-TKgNu.js";import"./chevron-down-sNl64qaM.js";import"./cross-CO8lPM-Y.js";import"./PdfViewerSidebar-C4gwldon.js";import"./index-BnocMrsR.js";import"./index-CyqiMZNC.js";import"./index-g_La0Psk.js";import"./PdfViewerToolbar-Cmlk2dhS.js";import"./Button-bQTkGamX.js";import"./chevron-right-B810oKZt.js";import"./Input-vSvt0OGa.js";import"./search-DBXxF15B.js";import"./spin-CRAtCeZG.js";import"./error-jmH2Pe7J.js";import"./withOsdkMetrics-BKztbHSk.js";import"./makeExternalStore-D8-WR8za.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
