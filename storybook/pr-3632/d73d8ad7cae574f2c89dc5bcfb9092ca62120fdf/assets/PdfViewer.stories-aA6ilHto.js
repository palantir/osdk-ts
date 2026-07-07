import{j as r,M as s}from"./iframe-C9wefhiD.js";import{P as p}from"./pdf-viewer-vJrpkrSg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dq4bt2ce.js";import"./preload-helper-CdStPaCr.js";import"./PdfRenderer-dcieYNxz.js";import"./index-DYvyfpkP.js";import"./PdfViewer-Cki7D_n1.js";import"./PdfViewer.module.css-BPppkNSg.js";import"./PdfViewerAnnotationLayer-KuGhhmlP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_49zbQ1G.js";import"./PdfViewerOutlineSidebar-BG3Kc9S_.js";import"./PdfViewerSidebarHeader-B9BKrRqn.js";import"./useBaseUiId-CquS-9BM.js";import"./useControlled-COGXDOr8.js";import"./CompositeRoot-Dvwevry7.js";import"./CompositeItem-CiIi7DoF.js";import"./ToolbarRootContext-D9YlFow_.js";import"./composite-CWVo6FMX.js";import"./svgIconContainer-CtjfKo_Y.js";import"./PdfViewerSearchBar-B8sTNDG1.js";import"./chevron-up-DukFjsLl.js";import"./chevron-down-DfJ300jj.js";import"./cross-C_z7P1QJ.js";import"./PdfViewerSidebar-DuhOItYB.js";import"./index-CMD5w3qF.js";import"./index-BLFQUimI.js";import"./index-DfrJEj7e.js";import"./PdfViewerToolbar-B7iZ-pFV.js";import"./Button-Bd-82nYV.js";import"./chevron-right-Dkr9tpgZ.js";import"./Input-ZNHR_BPN.js";import"./search-BjM5NTG3.js";import"./spin-CMnoQ_CB.js";import"./error-C7D9Q9qf.js";import"./withOsdkMetrics-DowTPyMU.js";import"./makeExternalStore-7e75TOza.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
