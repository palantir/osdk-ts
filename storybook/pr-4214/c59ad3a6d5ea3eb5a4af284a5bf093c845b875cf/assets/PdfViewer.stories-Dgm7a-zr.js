import{j as r,M as s}from"./iframe-DzqriYoa.js";import{P as p}from"./pdf-viewer-C_L4AlpJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-COTDBe0y.js";import"./preload-helper-rEyizNUS.js";import"./PdfViewer-rX5kMQ89.js";import"./index-CbCX59S_.js";import"./BasePdfViewer-BwiLKOCN.js";import"./BasePdfViewer.module.css-DPy6YZxd.js";import"./PdfViewerAnnotationLayer-wD1wZEh3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VGsWKoi-.js";import"./PdfViewerOutlineSidebar-DHHGyc5y.js";import"./PdfViewerSidebarHeader-CZpDJBCq.js";import"./useBaseUiId-Dl4SGLhQ.js";import"./useControlled-Y5VNoFPF.js";import"./CompositeRoot-CttpwrXf.js";import"./CompositeItem-jOjnmS3J.js";import"./ToolbarRootContext-T8dcHRUE.js";import"./composite-C_fUKfgf.js";import"./svgIconContainer-DGWH6ifX.js";import"./PdfViewerSearchBar-GdkqPlQ1.js";import"./chevron-up-FhM_U9vV.js";import"./chevron-down-Oou_YMqa.js";import"./cross-BYH-2i8n.js";import"./PdfViewerSidebar-PGQNBuGv.js";import"./index-DfPgZdRM.js";import"./index-DbWpjH26.js";import"./index-D2hymCML.js";import"./PdfViewerToolbar-DnNQTzOk.js";import"./Button-CORzZHVQ.js";import"./chevron-right-CdSGk75B.js";import"./Input-BkQ3tb2C.js";import"./search-CdGNOopx.js";import"./spin-Bce4tBcb.js";import"./error-Ofk1hxBS.js";import"./withOsdkMetrics-B8iePud0.js";import"./makeExternalStore-C6hRU-73.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
