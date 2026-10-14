import{j as r,M as s}from"./iframe-Bd2YI4f_.js";import{P as p}from"./pdf-viewer-6twFeI6q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DgKTQWWp.js";import"./preload-helper-BbK45qka.js";import"./PdfViewer-Dizyqi2U.js";import"./index-Bj2fqRcr.js";import"./BasePdfViewer-CobLfxah.js";import"./BasePdfViewer.module.css-DoKC_A6I.js";import"./PdfViewerAnnotationLayer-BcheOLII.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAK8-ZTG.js";import"./PdfViewerOutlineSidebar-lGhLEFIm.js";import"./PdfViewerSidebarHeader-Anaw-K7-.js";import"./useBaseUiId-sg5e61RZ.js";import"./useControlled-CifkBIG0.js";import"./CompositeRoot-BftxbV3o.js";import"./CompositeItem-C1a6HzSc.js";import"./ToolbarRootContext-CcTA8tLc.js";import"./composite-Do-T19t0.js";import"./svgIconContainer-CNqvkdfy.js";import"./PdfViewerSearchBar-JkCT8AaQ.js";import"./chevron-up-B6bfNnH8.js";import"./chevron-down-D8kqf24B.js";import"./cross-CahcDK0M.js";import"./PdfViewerSidebar-CSPLXgC5.js";import"./index-CaI42Rs-.js";import"./index-QyRfwHjS.js";import"./index-ByZnXX35.js";import"./PdfViewerToolbar-CfCpOhTM.js";import"./Button-4-CIF1W1.js";import"./chevron-right-Cs9gGtUo.js";import"./Input-CxGxfdRH.js";import"./search-DvsXbyC6.js";import"./spin-D-Cv9cF8.js";import"./error-CA1VPVRX.js";import"./withOsdkMetrics-CmXLVGag.js";import"./makeExternalStore-D_-udAfm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
