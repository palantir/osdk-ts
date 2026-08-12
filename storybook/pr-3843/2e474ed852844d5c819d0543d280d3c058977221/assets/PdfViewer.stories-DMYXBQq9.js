import{j as r,M as s}from"./iframe-B7WBSiQK.js";import{P as p}from"./pdf-viewer-BLeUiJZm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dlhp3E9Z.js";import"./preload-helper-B0V2Y4gg.js";import"./PdfRenderer-ByLkLLgc.js";import"./index-PlkpSjCR.js";import"./PdfViewer-4yX1lzf5.js";import"./PdfViewer.module.css-DIG-WljH.js";import"./PdfViewerAnnotationLayer-DUd2vzc2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DX9gj6Tm.js";import"./PdfViewerOutlineSidebar-XoJ2WnZK.js";import"./PdfViewerSidebarHeader-sjvYMr5H.js";import"./useBaseUiId-CZzT34PV.js";import"./useControlled-DmMIwQoS.js";import"./CompositeRoot-BE_cW4gb.js";import"./CompositeItem-CZegg-G4.js";import"./ToolbarRootContext-li3WIPN7.js";import"./composite-mnm8wmd2.js";import"./svgIconContainer-Bxt-xqtM.js";import"./PdfViewerSearchBar-By28ICD3.js";import"./chevron-up-DW0VIx01.js";import"./chevron-down-CYs6Wp2m.js";import"./cross-LDnwABxF.js";import"./PdfViewerSidebar-DEGmjbNy.js";import"./index-CQwq9wua.js";import"./index-CvsGQGuc.js";import"./index-BuPc-xAF.js";import"./PdfViewerToolbar-Dhva9p7N.js";import"./Button-BFzUwMgP.js";import"./chevron-right-Cg2N14Pq.js";import"./Input-CEDE16Ka.js";import"./search-CnauwDLw.js";import"./spin-Bx-sZm02.js";import"./error-B41aks2m.js";import"./withOsdkMetrics-DZMGbXvK.js";import"./makeExternalStore-BNCsp_rF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
