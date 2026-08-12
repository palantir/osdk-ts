import{j as r,M as s}from"./iframe-BUQyUD8m.js";import{P as p}from"./pdf-viewer-DOn8VFrt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWNJ9vOJ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BoGWatbc.js";import"./index-BICsXjCE.js";import"./PdfViewer-DqIfvM1Q.js";import"./PdfViewer.module.css-CvXo38qX.js";import"./PdfViewerAnnotationLayer-DS1fJiZz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CC0aD4tc.js";import"./PdfViewerOutlineSidebar-Cy9pmzVR.js";import"./PdfViewerSidebarHeader-oSq-NGQp.js";import"./useBaseUiId-U_k4td6p.js";import"./useControlled-CPowlOFs.js";import"./CompositeRoot-Cx_7hEKB.js";import"./CompositeItem-iT1BpgJw.js";import"./ToolbarRootContext-CxUHg0mL.js";import"./composite-CELzk-qp.js";import"./svgIconContainer-o4oAXi-V.js";import"./PdfViewerSearchBar-Br6ZdD7u.js";import"./chevron-up-DAAEefnk.js";import"./chevron-down-DiBQFFuK.js";import"./cross-1uLQRGRH.js";import"./PdfViewerSidebar-C71LDP3k.js";import"./index-CvJx8Lxg.js";import"./index-BurFCGWb.js";import"./index-4mhiFuK4.js";import"./PdfViewerToolbar-NDEkggyR.js";import"./Button-DEbL0EP0.js";import"./chevron-right-BxyDro7w.js";import"./Input-CtsEUXGl.js";import"./search-DagSNO5e.js";import"./spin-bCloEDMt.js";import"./error-TXaSC1XE.js";import"./withOsdkMetrics-Pgtowb3-.js";import"./makeExternalStore-7rJI6eRL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
