import{j as r,M as s}from"./iframe-htyY8WGh.js";import{P as p}from"./pdf-viewer-CxOX8QYT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bl5zrV84.js";import"./preload-helper-BZEQ7CCm.js";import"./PdfViewer-npd9z_d6.js";import"./index-9XAE-P5N.js";import"./BasePdfViewer-DcSBgLjh.js";import"./BasePdfViewer.module.css-CusBVOTb.js";import"./PdfViewerAnnotationLayer-ECHPya-6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJ7lOtU5.js";import"./PdfViewerOutlineSidebar-CZ7hKBOG.js";import"./PdfViewerSidebarHeader-rrDvonfy.js";import"./useBaseUiId-B5naUVoF.js";import"./useControlled-jlfCPDon.js";import"./CompositeRoot-BROkna6b.js";import"./CompositeItem-CuUp7unb.js";import"./ToolbarRootContext-CvT5UyxT.js";import"./composite-DLA5e3bM.js";import"./svgIconContainer-DDCQ6k8x.js";import"./PdfViewerSearchBar-lkN5jZvm.js";import"./chevron-up-DQVHfWYR.js";import"./chevron-down-CPTHUdZ2.js";import"./cross-zUtY8fYt.js";import"./PdfViewerSidebar-BoSGxMal.js";import"./index-DWZoNjEc.js";import"./index-BRbgX3T0.js";import"./index-BmvQUuUh.js";import"./PdfViewerToolbar-D1RMbhct.js";import"./Button-CugfLHha.js";import"./chevron-right-HS4aL_fv.js";import"./Input-B_148gGT.js";import"./search-BARUS6xQ.js";import"./spin-CJITYEzL.js";import"./error-B5cHozqr.js";import"./withOsdkMetrics-B5xof_Ab.js";import"./makeExternalStore-CvyNaZuu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
