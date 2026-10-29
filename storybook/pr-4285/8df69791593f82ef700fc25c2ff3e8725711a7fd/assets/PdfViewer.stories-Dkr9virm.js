import{j as r,M as s}from"./iframe-YB9hqlg8.js";import{P as p}from"./pdf-viewer-9TZMJVUk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bo-X_AX0.js";import"./preload-helper-CTcVL9dw.js";import"./PdfViewer-DeYHIunv.js";import"./index-jQAJu0aU.js";import"./BasePdfViewer-CaUBpOXd.js";import"./BasePdfViewer.module.css-DaCc8uBC.js";import"./PdfViewerAnnotationLayer-BnyVAKEQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uhTW8T6t.js";import"./PdfViewerOutlineSidebar-f84NK5Qw.js";import"./PdfViewerSidebarHeader-BW3ZXN_l.js";import"./useBaseUiId-BmL79WrH.js";import"./useControlled-XI3b4Slf.js";import"./CompositeRoot-oV4NngM_.js";import"./CompositeItem-DRhQIZ9t.js";import"./ToolbarRootContext-DKnQVXJ0.js";import"./composite-DeqrZPcw.js";import"./svgIconContainer-BewESC0Y.js";import"./PdfViewerSearchBar-CtCt-UHg.js";import"./chevron-up-BPnKWxDY.js";import"./chevron-down-CLNGzp69.js";import"./cross-CqHbx82J.js";import"./PdfViewerSidebar-DaaIskSH.js";import"./index-BPsVLTCl.js";import"./index-BFeXeiP0.js";import"./index-Bs1x_wg2.js";import"./PdfViewerToolbar-D9zJATBa.js";import"./Button-BgGo20Fo.js";import"./chevron-right-BrpIGdUP.js";import"./Input-ZdgKVRhe.js";import"./search-BY-8te7i.js";import"./spin-BEJU3Gkz.js";import"./error-C1jwt9uB.js";import"./withOsdkMetrics-CyJ1msfC.js";import"./makeExternalStore-BXT9IRaw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
