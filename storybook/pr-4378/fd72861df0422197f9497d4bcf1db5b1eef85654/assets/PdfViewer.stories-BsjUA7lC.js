import{j as r,M as s}from"./iframe-3OlCtOnX.js";import{P as p}from"./pdf-viewer-BViOYoDF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ByOX4GFW.js";import"./preload-helper-DmXfM5jO.js";import"./PdfViewer-B04UtN3J.js";import"./index-yHmphh38.js";import"./BasePdfViewer-sZOl8nPy.js";import"./BasePdfViewer.module.css-BXnZraR3.js";import"./PdfViewerAnnotationLayer-s_X9QPTT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQPuXYza.js";import"./PdfViewerOutlineSidebar-BFfdODgc.js";import"./PdfViewerSidebarHeader-DCneNjoK.js";import"./useBaseUiId-DF4e_SYr.js";import"./useControlled-D4KKpMBk.js";import"./CompositeRoot-DEHif5pC.js";import"./CompositeItem-CpBBjcG8.js";import"./ToolbarRootContext-DhJDeVBv.js";import"./composite-U0WuYJlx.js";import"./svgIconContainer-BDwLYbew.js";import"./PdfViewerSearchBar-CpkbMpaY.js";import"./chevron-up-Y1gB4P6K.js";import"./chevron-down-CgI6LlJc.js";import"./cross-BDST6L4k.js";import"./PdfViewerSidebar-CHb_2EtP.js";import"./index-DLQ0415V.js";import"./index-BIyck5Eo.js";import"./index-Dkb2coF2.js";import"./PdfViewerToolbar-B89i7b-q.js";import"./Button-DvYWHdUE.js";import"./chevron-right-BrA7FODM.js";import"./Input-Du0sMknh.js";import"./search-DDk_kDx9.js";import"./spin-D35P6to5.js";import"./error-CWwoWVCq.js";import"./withOsdkMetrics-CFm1sTgg.js";import"./makeExternalStore-C_bh9nYT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
