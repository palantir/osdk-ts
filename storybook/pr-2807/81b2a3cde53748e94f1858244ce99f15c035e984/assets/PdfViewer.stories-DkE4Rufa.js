import{j as r,M as s}from"./iframe-Dqy8JjJj.js";import{P as p}from"./pdf-viewer-BMaa_w4N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-nQv26hfv.js";import"./preload-helper-DeX6Y_0J.js";import"./PdfRenderer-DvdudDoQ.js";import"./index-DbFWgCao.js";import"./PdfViewer-CY_1dAeF.js";import"./PdfViewer.module.css-dhJQsUYR.js";import"./PdfViewerAnnotationLayer-Dq69ESCi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5ZIta75.js";import"./PdfViewerOutlineSidebar-B7erjIT1.js";import"./PdfViewerSidebarHeader-DHET0AnR.js";import"./useBaseUiId-D7f72QTK.js";import"./useControlled-RE_-t8KI.js";import"./CompositeRoot--BvDb7mA.js";import"./CompositeItem-B4poao_w.js";import"./ToolbarRootContext-DGtiuhh2.js";import"./composite-LAPrz1o4.js";import"./svgIconContainer-8GT6k8lo.js";import"./PdfViewerSearchBar-DhSNk7Ig.js";import"./chevron-up-Dyb2TNry.js";import"./chevron-down-DqBsM86l.js";import"./cross-D8pajbsG.js";import"./PdfViewerSidebar-CBxIEQPk.js";import"./index-Cy83EJpp.js";import"./index-Cnbuox7q.js";import"./index-C7xgb18W.js";import"./PdfViewerToolbar-DhdTH5h_.js";import"./Button-BWXSx_LI.js";import"./chevron-right-BHX5fWAK.js";import"./Input-BQAJ5Oey.js";import"./search-6kgQ8Qok.js";import"./spin-M7jr7yHt.js";import"./error-BuVC1iPd.js";import"./withOsdkMetrics-Dc6gOjLQ.js";import"./makeExternalStore-De8hh01J.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
