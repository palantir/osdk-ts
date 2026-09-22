import{j as r,M as s}from"./iframe-BlDiaW1h.js";import{P as p}from"./pdf-viewer-DuWm1q3X.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTPf_Waz.js";import"./preload-helper-PtL6Kd_x.js";import"./PdfViewer-Bg-f768l.js";import"./index-DfWhxneD.js";import"./BasePdfViewer-CxLn9crX.js";import"./BasePdfViewer.module.css-DEQ-Twaz.js";import"./PdfViewerAnnotationLayer-5-J7heik.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-JBET7oWi.js";import"./PdfViewerOutlineSidebar-BrRiIQLp.js";import"./PdfViewerSidebarHeader-DT4jmMAf.js";import"./useBaseUiId-CNzKZZyr.js";import"./useControlled-DBQ0gE6b.js";import"./CompositeRoot-Dhv_Dc0k.js";import"./CompositeItem-OhI6t6UV.js";import"./ToolbarRootContext-B0Ir569T.js";import"./composite-RC4cbmpt.js";import"./svgIconContainer-kniEZwHz.js";import"./PdfViewerSearchBar-ONcvMGwk.js";import"./chevron-up-CyIxL4xy.js";import"./chevron-down-CQlGXejk.js";import"./cross-e0aRrlM-.js";import"./PdfViewerSidebar-Cp56wWdl.js";import"./index-DIgLDkvV.js";import"./index-CaosaIAK.js";import"./index-ClB2daRU.js";import"./PdfViewerToolbar-DNW9kYUh.js";import"./Button-BcWNCj5I.js";import"./chevron-right-DQaCZHOk.js";import"./Input-Bii20VeK.js";import"./search-BTwweTf6.js";import"./spin-BoXYNNmR.js";import"./error-DI0bgW6O.js";import"./withOsdkMetrics-BxS0W9JC.js";import"./makeExternalStore-BGsi_gFr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
