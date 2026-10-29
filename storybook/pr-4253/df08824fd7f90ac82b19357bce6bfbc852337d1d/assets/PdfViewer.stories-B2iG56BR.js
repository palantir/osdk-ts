import{j as r,M as s}from"./iframe-2fyz7Bbq.js";import{P as p}from"./pdf-viewer-C0XQ1IQZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KeYvxZJC.js";import"./preload-helper-FOou-mrh.js";import"./PdfViewer-D7lji4H_.js";import"./index-w9tQLZ4b.js";import"./BasePdfViewer-DCNG1tFe.js";import"./BasePdfViewer.module.css-C1ycsbCy.js";import"./PdfViewerAnnotationLayer-7FydnsbR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBboPNvi.js";import"./PdfViewerOutlineSidebar-0L7pY3wI.js";import"./PdfViewerSidebarHeader-C7WxnAIL.js";import"./useBaseUiId-Dhg2ncZ0.js";import"./useControlled-DBeA7CGw.js";import"./CompositeRoot-Bp4YIOpv.js";import"./CompositeItem-DxQDXycs.js";import"./ToolbarRootContext-D0NvUOkn.js";import"./composite-B2qtiWqW.js";import"./svgIconContainer-CyZL2Xnt.js";import"./PdfViewerSearchBar-BcoXxP2u.js";import"./chevron-up-BQ9gaiFE.js";import"./chevron-down-IEWgGiNw.js";import"./cross-FzaN-G0q.js";import"./PdfViewerSidebar-Cwvz9SX-.js";import"./index-CV5ZhaCs.js";import"./index-2dmmxfKi.js";import"./index-BVjs4Tt3.js";import"./PdfViewerToolbar-yenhppDC.js";import"./Button-CEYlZhfx.js";import"./chevron-right-D87zwXsr.js";import"./Input-BME0--u-.js";import"./search-Cte9a7SC.js";import"./spin-CTxgJwQy.js";import"./error-DQou1LSG.js";import"./withOsdkMetrics-BgEBqHFS.js";import"./makeExternalStore-wF1R62-h.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
