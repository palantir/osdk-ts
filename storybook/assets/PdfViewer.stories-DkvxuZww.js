import{j as r,M as s}from"./iframe-bDlOvzCD.js";import{P as p}from"./pdf-viewer-zU82nS-P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bywn_af8.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DLdvWNba.js";import"./index-VT2sHwDI.js";import"./BasePdfViewer-DtnktA54.js";import"./BasePdfViewer.module.css-u_q5BQGP.js";import"./PdfViewerAnnotationLayer-BaFiI48G.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CI6hN7Gh.js";import"./PdfViewerOutlineSidebar-DbSrPr1D.js";import"./PdfViewerSidebarHeader-682KeyiH.js";import"./useBaseUiId-B2slyOHM.js";import"./useControlled-5EwHNZlm.js";import"./CompositeRoot-B_aEz5Ld.js";import"./CompositeItem-I6D1Ck1D.js";import"./ToolbarRootContext-BvOSFjrz.js";import"./composite-Dfe6WZ9B.js";import"./svgIconContainer-Bqi1VJi0.js";import"./PdfViewerSearchBar-C6ec6Bob.js";import"./chevron-up-jtISFBLy.js";import"./chevron-down-G50mjwg6.js";import"./cross-TUS4Q6Ao.js";import"./PdfViewerSidebar-D0F8Z4mF.js";import"./index-DjjoI3KK.js";import"./index-DP9iJ9Qp.js";import"./index-CGDkVQ7s.js";import"./PdfViewerToolbar-CiIslL9m.js";import"./Button-LYMOgFpv.js";import"./chevron-right-CMvbh8AP.js";import"./Input-CNxZ13Ar.js";import"./search-Dh1zBfzB.js";import"./spin-DeWIQMji.js";import"./error-DgyisaaS.js";import"./withOsdkMetrics-BflEGh-H.js";import"./makeExternalStore-Oc969Yyb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
