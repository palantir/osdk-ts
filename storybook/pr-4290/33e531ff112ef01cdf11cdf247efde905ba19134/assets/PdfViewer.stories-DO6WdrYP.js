import{j as r,M as s}from"./iframe-D8AA8tZ5.js";import{P as p}from"./pdf-viewer-BKJeaMN_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DW6AK8Dw.js";import"./preload-helper-BH6-9HD1.js";import"./PdfViewer-cHyPvgji.js";import"./index-CukSKf6K.js";import"./BasePdfViewer-ClOZgQhZ.js";import"./BasePdfViewer.module.css-CZe_aYXW.js";import"./PdfViewerAnnotationLayer-CHpuL-oc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nYXfhmHU.js";import"./PdfViewerOutlineSidebar-BRbSJDzA.js";import"./PdfViewerSidebarHeader-BicsmAaT.js";import"./useBaseUiId-DoN4Gm5G.js";import"./useControlled-B43d18Tf.js";import"./CompositeRoot-BG_c5da8.js";import"./CompositeItem-DyTH_2rH.js";import"./ToolbarRootContext-BfpPUsVU.js";import"./composite-BXcEZn4p.js";import"./svgIconContainer-M2XD2W51.js";import"./PdfViewerSearchBar-CRxgbIx5.js";import"./chevron-up-DjAOzO7D.js";import"./chevron-down-CUVA2CdW.js";import"./cross-hRHI0Bet.js";import"./PdfViewerSidebar-nkdZcE9B.js";import"./index-DdNWZRPv.js";import"./index-BngeOfUA.js";import"./index-Beb-N8jB.js";import"./PdfViewerToolbar-BM5Wyzka.js";import"./Button-DM4RbJ0A.js";import"./chevron-right-B4OMg3yd.js";import"./Input-CB7rgA9u.js";import"./search-g_GQHQvF.js";import"./spin-BDe2qmHX.js";import"./error-CvnJxzc0.js";import"./withOsdkMetrics-BRgNGg7P.js";import"./makeExternalStore-CuMj3UXB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
