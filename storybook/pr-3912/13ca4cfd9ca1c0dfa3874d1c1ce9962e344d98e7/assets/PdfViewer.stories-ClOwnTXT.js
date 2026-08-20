import{j as r,M as s}from"./iframe-CnFdBl-W.js";import{P as p}from"./pdf-viewer-C2cI7cn_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C29jqiUi.js";import"./preload-helper-D0VrPXX4.js";import"./PdfViewer-H1o-zI3i.js";import"./index-C7QX7sqh.js";import"./BasePdfViewer-CtrqPGYR.js";import"./BasePdfViewer.module.css-B2ygThV_.js";import"./PdfViewerAnnotationLayer-C_0aefn6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-YF1j-Mvn.js";import"./PdfViewerOutlineSidebar-BHrTjC9u.js";import"./PdfViewerSidebarHeader-BA5ncAso.js";import"./useBaseUiId-Db0ciCX6.js";import"./useControlled-q9_B02Xu.js";import"./CompositeRoot-Dl2zEvvO.js";import"./CompositeItem-ZV7LMbWM.js";import"./ToolbarRootContext-CpYHpTj-.js";import"./composite-Bchd3j-K.js";import"./svgIconContainer-BH-fJV0L.js";import"./PdfViewerSearchBar-hK_6yPES.js";import"./chevron-up-B5iyUQTK.js";import"./chevron-down-CQGtY8nv.js";import"./cross-C0CFi2LA.js";import"./PdfViewerSidebar-CrtoSp11.js";import"./index-CkqoLo0V.js";import"./index-D-ULFZnm.js";import"./index-CVfyo-vI.js";import"./PdfViewerToolbar-1zHawXMa.js";import"./Button-CliHRcLl.js";import"./chevron-right-BFbAeXmc.js";import"./Input-DbDF9B3g.js";import"./search-BZ3zzvB7.js";import"./spin-BvKqJUMc.js";import"./error-CB_FjmA0.js";import"./withOsdkMetrics-DiZaeAo8.js";import"./makeExternalStore-BjBU5_-l.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
