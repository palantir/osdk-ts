import{j as r,M as s}from"./iframe-D9lxuTZ1.js";import{P as p}from"./pdf-viewer-DvxiKgVg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-q8rVdUad.js";import"./preload-helper-Do7-tsr0.js";import"./PdfRenderer-Cn8LwNGa.js";import"./index-B7SuRf-V.js";import"./PdfViewer-DR4L5M1p.js";import"./PdfViewer.module.css-BHRlBQyO.js";import"./PdfViewerAnnotationLayer-7OoaTCM_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9eXeACtC.js";import"./PdfViewerOutlineSidebar-Ddt9JKrJ.js";import"./PdfViewerSidebarHeader-DqpHhLfM.js";import"./useBaseUiId-C5fWipJz.js";import"./useControlled-K8Wk1UIc.js";import"./CompositeRoot-DmbKrxBb.js";import"./CompositeItem-DaRifkLs.js";import"./ToolbarRootContext-Btl_Kd9E.js";import"./composite-N1lpXgfE.js";import"./svgIconContainer-B5cX7c4P.js";import"./PdfViewerSearchBar-fMk9aWZi.js";import"./chevron-up-af-NCVld.js";import"./chevron-down-BiZI_wPn.js";import"./cross-Dp8JFrXV.js";import"./PdfViewerSidebar-R3gL_Stt.js";import"./index-DDrHGFl3.js";import"./index-CMtfSI0z.js";import"./index-JW_r_biz.js";import"./PdfViewerToolbar-BzMUFlX2.js";import"./Button-DfHA5hQa.js";import"./chevron-right-DoxUE7LU.js";import"./Input-JFvS6kPu.js";import"./search-P4qKgx4r.js";import"./spin-Dc9EBDtQ.js";import"./error-C8UL0roA.js";import"./withOsdkMetrics-CFrjKiMG.js";import"./makeExternalStore-a81xtmQN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
