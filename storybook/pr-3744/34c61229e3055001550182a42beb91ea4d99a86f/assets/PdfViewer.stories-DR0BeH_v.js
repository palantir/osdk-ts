import{j as r,M as s}from"./iframe-CC2lhQhY.js";import{P as p}from"./pdf-viewer-DjqHQYdR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DehQPcwN.js";import"./preload-helper-BGEdKx02.js";import"./PdfRenderer-DyVfXXF4.js";import"./index-DxrvvjMw.js";import"./PdfViewer-299ydE5k.js";import"./PdfViewer.module.css-BjRoOUtZ.js";import"./PdfViewerAnnotationLayer-DhPGF1lj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hBMMwGk-.js";import"./PdfViewerOutlineSidebar-BR3KK8qM.js";import"./PdfViewerSidebarHeader-BDNyHtRF.js";import"./useBaseUiId-CxU7p3iL.js";import"./useControlled-Sp81BiS-.js";import"./CompositeRoot-B1DIlpCN.js";import"./CompositeItem-CzQFGjti.js";import"./ToolbarRootContext-CvAXAcRN.js";import"./composite-B5KpWypz.js";import"./svgIconContainer-CemqUq4J.js";import"./PdfViewerSearchBar-BMo9UlCy.js";import"./chevron-up-4AKTqAdW.js";import"./chevron-down-CeE9KY4s.js";import"./cross-BobJNvWM.js";import"./PdfViewerSidebar-C41Ohj_7.js";import"./index-BVqzMWPJ.js";import"./index-B4bU-WIO.js";import"./index-G7k4NUeX.js";import"./PdfViewerToolbar-CoLpdTce.js";import"./Button-JlKjTSlm.js";import"./chevron-right-DTMGPSrn.js";import"./Input-BHBF2dwA.js";import"./search-D1VlmriO.js";import"./spin-BwHgOsrq.js";import"./error-wpAeIqc3.js";import"./withOsdkMetrics-D7Ls77C5.js";import"./makeExternalStore-DBYDyAtT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
