import{j as r,M as s}from"./iframe-826Gs96o.js";import{P as p}from"./pdf-viewer-cwoxXr_e.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-0M_op0qY.js";import"./preload-helper-Dy1PefeT.js";import"./PdfViewer-DlnDJ1Gf.js";import"./index-DxFbtAl2.js";import"./BasePdfViewer-CykCW1ff.js";import"./BasePdfViewer.module.css-D6paV_6y.js";import"./PdfViewerAnnotationLayer-CWndzXQW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeqRJyZP.js";import"./PdfViewerOutlineSidebar-BtfHwCaq.js";import"./PdfViewerSidebarHeader-ChWvmPJ_.js";import"./useBaseUiId-Dg5t7t_V.js";import"./useControlled-BpCUWNpJ.js";import"./CompositeRoot-BNXinrTS.js";import"./CompositeItem-CcW3IcXa.js";import"./ToolbarRootContext-CHa8QnRi.js";import"./composite-CfFzeQqA.js";import"./svgIconContainer-C9llsudM.js";import"./PdfViewerSearchBar-CUGwAqbQ.js";import"./chevron-up-BbKI9trV.js";import"./chevron-down-DTD0XUuq.js";import"./cross-CGVnPFvE.js";import"./PdfViewerSidebar-CNxkdKCi.js";import"./index-BpqO_0Z6.js";import"./index-CjQrbWNq.js";import"./index-DuT9KNdT.js";import"./PdfViewerToolbar-CwnAEz9O.js";import"./Button-DNoJUNAB.js";import"./chevron-right-BG4BIX4Q.js";import"./Input-DI6TXQQJ.js";import"./search-BZHAnhvn.js";import"./spin-7RkJGHbJ.js";import"./error-BRJ8RgcR.js";import"./withOsdkMetrics-BKsd8iS7.js";import"./makeExternalStore-vPmU5su8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
