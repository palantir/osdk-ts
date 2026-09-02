import{j as r,M as s}from"./iframe-BMR09Kil.js";import{P as p}from"./pdf-viewer-BL--8dmR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BKSDJuNS.js";import"./preload-helper-ibIringt.js";import"./PdfViewer-Ccb0dp0E.js";import"./index-kb2gRuUI.js";import"./BasePdfViewer-D9Al3CBe.js";import"./BasePdfViewer.module.css-Ch83nC87.js";import"./PdfViewerAnnotationLayer-CD4v6rfA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LvBXDwU5.js";import"./PdfViewerOutlineSidebar-CEa_xceb.js";import"./PdfViewerSidebarHeader-fmrmu5qw.js";import"./useBaseUiId-BrR-DAr4.js";import"./useControlled-B61TAugk.js";import"./CompositeRoot-XSjeqifK.js";import"./CompositeItem-C-tDKeCj.js";import"./ToolbarRootContext-DfEHvgT5.js";import"./composite-DEwDT13v.js";import"./svgIconContainer-Dz8rpqsG.js";import"./PdfViewerSearchBar-yxhmc5xe.js";import"./chevron-up-CpJGOW0O.js";import"./chevron-down-CN8cLhcC.js";import"./cross-BJiHelFR.js";import"./PdfViewerSidebar-GgYULeJ6.js";import"./index-DrOIQ7Hj.js";import"./index-BhKcBDQn.js";import"./index-DbMijjyJ.js";import"./PdfViewerToolbar-B-brCMJp.js";import"./Button-BFYlz1Yp.js";import"./chevron-right-dKtwwDSe.js";import"./Input-C_38At4g.js";import"./search-CRp3aPu6.js";import"./spin-eNTpSiuz.js";import"./error-DuXRxQxW.js";import"./withOsdkMetrics-BoN8aVN7.js";import"./makeExternalStore-nFkPZ8WP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
