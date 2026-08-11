import{j as r,M as s}from"./iframe-CMTZ0fe1.js";import{P as p}from"./pdf-viewer-CFgdV9v4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXTgKS8A.js";import"./preload-helper-CcoQ00to.js";import"./PdfRenderer-BaP34lTv.js";import"./index-Bh2d44Ht.js";import"./PdfViewer-DGNRFW7A.js";import"./PdfViewer.module.css-BtyqWoJ1.js";import"./PdfViewerAnnotationLayer-DEq2wSbf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MbBFFnXC.js";import"./PdfViewerOutlineSidebar-DLRmYxU1.js";import"./PdfViewerSidebarHeader-Bv11NlZQ.js";import"./useBaseUiId-DzzDh8hf.js";import"./useControlled-aZtd6HrX.js";import"./CompositeRoot-DOLt6qmr.js";import"./CompositeItem-BO_EAHEP.js";import"./ToolbarRootContext-G1neddYV.js";import"./composite-DZ5IyePu.js";import"./svgIconContainer-e3zlhnbG.js";import"./PdfViewerSearchBar-DPbZonQ4.js";import"./chevron-up-Cxno5u1x.js";import"./chevron-down-l0Ac3Xd0.js";import"./cross-DM_x2Wwt.js";import"./PdfViewerSidebar-DSnmt-Ei.js";import"./index-CjcSY54Z.js";import"./index-DLlFFsdj.js";import"./index-BAeLlemU.js";import"./PdfViewerToolbar-BAIe6amF.js";import"./Button-DNRqIdKS.js";import"./chevron-right-YRtBa3GY.js";import"./Input-BDDU57H1.js";import"./search-IoccQV4w.js";import"./spin-poMcNuoQ.js";import"./error-Cau1AwlP.js";import"./withOsdkMetrics-tRuzaAIK.js";import"./makeExternalStore-f8SczYn0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
