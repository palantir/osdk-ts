import{j as r,M as s}from"./iframe-gEsDMi5m.js";import{P as p}from"./pdf-viewer-DoCWroVC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CG4wN740.js";import"./preload-helper-BAXfB12u.js";import"./PdfRenderer-BrPLVBwN.js";import"./index-CYY6Rkvu.js";import"./PdfViewer-DHjEK4sN.js";import"./PdfViewer.module.css-CLi0R70g.js";import"./PdfViewerAnnotationLayer-DTApIVyo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5zn8Njn.js";import"./PdfViewerOutlineSidebar-Bva_c-ok.js";import"./PdfViewerSidebarHeader-CGzcJTQw.js";import"./useBaseUiId-nOXd_pux.js";import"./useControlled-G7jSLqSi.js";import"./CompositeRoot-Br2aSX_s.js";import"./CompositeItem-D-qmf9CK.js";import"./ToolbarRootContext-k6OAp5FQ.js";import"./composite-CaWSGe7j.js";import"./svgIconContainer-me1vP-AK.js";import"./PdfViewerSearchBar-BTq8qkWm.js";import"./chevron-up-DpewiFMG.js";import"./chevron-down-BmqaLTjs.js";import"./cross-CApI6DkL.js";import"./PdfViewerSidebar-BObb95fH.js";import"./index-p-vwnn75.js";import"./index-CN74APF8.js";import"./index-CAdYCXPf.js";import"./PdfViewerToolbar-C52aSLhS.js";import"./Button-CAn4HIMi.js";import"./chevron-right-COGFmjOj.js";import"./Input-H1RJGFEs.js";import"./search-B644haYO.js";import"./spin-DIouzERJ.js";import"./error-CiVDGDzV.js";import"./withOsdkMetrics-BRj5Yz7R.js";import"./makeExternalStore-Dg55qf4I.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
