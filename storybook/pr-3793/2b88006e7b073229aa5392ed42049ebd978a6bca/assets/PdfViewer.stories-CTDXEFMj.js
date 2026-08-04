import{j as r,M as s}from"./iframe-6hQ2fc3n.js";import{P as p}from"./pdf-viewer-B5I06qlt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_ac0b6o.js";import"./preload-helper-bQV8UHWE.js";import"./PdfRenderer-DBYapxEu.js";import"./index-B1djcyHP.js";import"./PdfViewer-Cuxr5qko.js";import"./PdfViewer.module.css-DvDbiZRS.js";import"./PdfViewerAnnotationLayer-Cyk8P-qx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BbZ0En5k.js";import"./PdfViewerOutlineSidebar-B6ivyKUF.js";import"./PdfViewerSidebarHeader-Bf1kkx8n.js";import"./useBaseUiId-C9747yUz.js";import"./useControlled-u3EMkLFh.js";import"./CompositeRoot-iv5-oEYc.js";import"./CompositeItem-B8ehrMS9.js";import"./ToolbarRootContext-DIDb7FlQ.js";import"./composite-CFvNHCkP.js";import"./svgIconContainer-Clfe7Lwj.js";import"./PdfViewerSearchBar-pGAzgQTl.js";import"./chevron-up-Bsh8fa4p.js";import"./chevron-down-CJa2nLIB.js";import"./cross-ccjJBWTc.js";import"./PdfViewerSidebar-BwLWE3l2.js";import"./index-BP_HdQ9P.js";import"./index-jX9mz87a.js";import"./index-K-Op5Vv5.js";import"./PdfViewerToolbar-BeFXjJV0.js";import"./Button-VUEdQ68Q.js";import"./chevron-right-xhpSHWI5.js";import"./Input-BNMmRwH0.js";import"./search-BuQM9KwU.js";import"./spin-DALhyzg3.js";import"./error-2bwv59jW.js";import"./withOsdkMetrics-BkqPVDva.js";import"./makeExternalStore-DyCpkktA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
