import{j as r,M as s}from"./iframe-D6C9Trwj.js";import{P as p}from"./pdf-viewer-Y3o--CxM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-aB6fEJ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-6hliArzM.js";import"./index-DDlgToJp.js";import"./PdfViewer-BZPgBHDD.js";import"./PdfViewer.module.css-DngFS3xk.js";import"./PdfViewerAnnotationLayer-C3N1iwEQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-1Ctchs8s.js";import"./PdfViewerOutlineSidebar-BFrTeti7.js";import"./PdfViewerSidebarHeader-DamJ250n.js";import"./useBaseUiId-CK8zz_o5.js";import"./useControlled-BhZdTOY8.js";import"./CompositeRoot-DoBljx4_.js";import"./CompositeItem-XglmiJOH.js";import"./ToolbarRootContext-B0WwuHp8.js";import"./composite-CpbDy630.js";import"./svgIconContainer-BcCoP_VO.js";import"./PdfViewerSearchBar-DDqDMaOV.js";import"./chevron-up-DHHSxadp.js";import"./chevron-down-CYWoK0T6.js";import"./cross-B-tX8pxW.js";import"./PdfViewerSidebar-C7s78aJU.js";import"./index-Cuh6-2mw.js";import"./index-D_DunY4G.js";import"./index-bGEWMLTM.js";import"./PdfViewerToolbar-DP_ROi0K.js";import"./Button-C_2bkx_i.js";import"./chevron-right-Cn3geO-8.js";import"./Input-CLlf0Dxa.js";import"./search-B7UvTq-1.js";import"./spin-Dgrdh7iY.js";import"./error-DtXcSHVK.js";import"./withOsdkMetrics-UCmWowd6.js";import"./makeExternalStore-C-NB2NR2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
