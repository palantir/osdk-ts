import{j as r,M as s}from"./iframe-CG99bj09.js";import{P as p}from"./pdf-viewer-Z1BIwcrL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1kfL3Gl.js";import"./preload-helper-Dd1TkT6k.js";import"./PdfRenderer-B4_86VEg.js";import"./index-D7gY0hRK.js";import"./PdfViewer-XCkqxHe1.js";import"./PdfViewer.module.css-BMvb85BI.js";import"./PdfViewerAnnotationLayer-Ckg-SPDG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BY39gEuZ.js";import"./PdfViewerOutlineSidebar-B30MHZrq.js";import"./PdfViewerSidebarHeader-_7SSt6NT.js";import"./useBaseUiId-BO8sSlSs.js";import"./useControlled-DH84q4Fx.js";import"./CompositeRoot-DW0vONTq.js";import"./CompositeItem-dTebkY1l.js";import"./ToolbarRootContext-BJD50VRL.js";import"./composite-DWYrv1GA.js";import"./svgIconContainer-C_F12f5S.js";import"./PdfViewerSearchBar-65V8qeUj.js";import"./chevron-up-DMKUWTU-.js";import"./chevron-down-nVZhB1tH.js";import"./cross-t0N6DpLf.js";import"./PdfViewerSidebar-D8OivBhL.js";import"./index-yjYJUv2V.js";import"./index-BcNI1vjn.js";import"./index-kpJ34CNx.js";import"./PdfViewerToolbar-BAO0tdZ6.js";import"./Button-m3hFNjvl.js";import"./chevron-right-CfgXhCJa.js";import"./Input-DbJ4L96L.js";import"./search-YjI6pP1Q.js";import"./spin-C-E8bGLm.js";import"./error-CNV7oJCP.js";import"./withOsdkMetrics-CvLx9GEQ.js";import"./makeExternalStore-BkRDyKI6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
