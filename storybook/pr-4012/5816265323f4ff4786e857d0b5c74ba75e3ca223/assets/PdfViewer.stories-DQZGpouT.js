import{j as r,M as s}from"./iframe-zZuIx-c9.js";import{P as p}from"./pdf-viewer-D77Rs3Bo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BHHkSALX.js";import"./preload-helper-XLtQClQl.js";import"./PdfViewer-Zq0BX2E9.js";import"./index-DGgNHuzV.js";import"./BasePdfViewer-DOPb9W3-.js";import"./BasePdfViewer.module.css-DjWANsZg.js";import"./PdfViewerAnnotationLayer-DhoYkjaw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8LX95cv.js";import"./PdfViewerOutlineSidebar-9hMSAR9_.js";import"./PdfViewerSidebarHeader-DyZh9zqi.js";import"./useBaseUiId-QsYmwdFZ.js";import"./useControlled-B4CVwr3J.js";import"./CompositeRoot-A5R3Pr0N.js";import"./CompositeItem-DKDVMcoh.js";import"./ToolbarRootContext-pNEiopTT.js";import"./composite-Cx527Tyd.js";import"./svgIconContainer-BVFcWySo.js";import"./PdfViewerSearchBar-scrHpJCk.js";import"./chevron-up-BezA9gj5.js";import"./chevron-down-BRlfcJdA.js";import"./cross-CI4w4_Jo.js";import"./PdfViewerSidebar-C5J7aneZ.js";import"./index-DaqIxsao.js";import"./index-TM8zQZc6.js";import"./index-C1Pc_aQZ.js";import"./PdfViewerToolbar-B32xAvpj.js";import"./Button-Cv2L8neg.js";import"./chevron-right-CTMtUmNe.js";import"./Input-BD19hUvi.js";import"./search-CNuN0o2o.js";import"./spin-Z2AHRgi6.js";import"./error-C5gHLQAi.js";import"./withOsdkMetrics-Y5EbkS67.js";import"./makeExternalStore-BcA2BzRz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
