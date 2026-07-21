import{j as r,M as s}from"./iframe-1zlKUcSc.js";import{P as p}from"./pdf-viewer-9mQLjqVp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bbgs4m-0.js";import"./preload-helper-CTkLWgF6.js";import"./PdfRenderer-rW-OjwyR.js";import"./index-DiPEpNnl.js";import"./PdfViewer-CYxKyECb.js";import"./PdfViewer.module.css-VuJgSOul.js";import"./PdfViewerAnnotationLayer-BQzGf32V.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuAORw74.js";import"./PdfViewerOutlineSidebar-DFp9K28N.js";import"./PdfViewerSidebarHeader-BoT1u3SV.js";import"./useBaseUiId-6JzTpPfQ.js";import"./useControlled-FW3ZNM_t.js";import"./CompositeRoot-ExDSsh9R.js";import"./CompositeItem-D-oGgt8S.js";import"./ToolbarRootContext-CB0hAZMy.js";import"./composite-DWazgZ7T.js";import"./svgIconContainer-C8IZLkS0.js";import"./PdfViewerSearchBar-CWPcyDmb.js";import"./chevron-up-Cb-VTuAg.js";import"./chevron-down-Bey2Po21.js";import"./cross-BuIFoaJh.js";import"./PdfViewerSidebar-Cjw_lJIh.js";import"./index-h_0uM_IG.js";import"./index-HXc49RyK.js";import"./index-BcuLOOrQ.js";import"./PdfViewerToolbar-Cdb50hx9.js";import"./Button-CY55YNlH.js";import"./chevron-right-COf3RG3a.js";import"./Input-HecR9wga.js";import"./search-Dv_yGgK4.js";import"./spin-B9scOXqx.js";import"./error-DfNGl4TZ.js";import"./withOsdkMetrics-CJWuisvC.js";import"./makeExternalStore-BSSkPAFY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
