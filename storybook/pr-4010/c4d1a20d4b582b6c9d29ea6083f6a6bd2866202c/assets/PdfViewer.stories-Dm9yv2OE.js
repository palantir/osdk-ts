import{j as r,M as s}from"./iframe-B8lzwm22.js";import{P as p}from"./pdf-viewer-C8odbJJs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCxQ28SM.js";import"./preload-helper-DZpogDck.js";import"./PdfViewer-CtYkjURY.js";import"./index-V8AdOqgd.js";import"./BasePdfViewer-kKiFBXla.js";import"./BasePdfViewer.module.css-C_AaMUrQ.js";import"./PdfViewerAnnotationLayer-ByilvueZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMruHEBV.js";import"./PdfViewerOutlineSidebar-BR4h9BM6.js";import"./PdfViewerSidebarHeader-BADQv58P.js";import"./useBaseUiId-9i5seKgC.js";import"./useControlled-9IIZJlu3.js";import"./CompositeRoot-B0fFzO_U.js";import"./CompositeItem-DEvZ_JsZ.js";import"./ToolbarRootContext-8Dlenei2.js";import"./composite-BgrU9ffv.js";import"./svgIconContainer-CXVvUd5F.js";import"./PdfViewerSearchBar-DSL2eC7s.js";import"./chevron-up-Cqb2zn9U.js";import"./chevron-down-98nms22W.js";import"./cross-BjwwvSsI.js";import"./PdfViewerSidebar-CAN99tJU.js";import"./index-CBtK7PVB.js";import"./index-B1F9PCAn.js";import"./index-DA6AQTMf.js";import"./PdfViewerToolbar-BBoSVbIL.js";import"./Button-DINiSESc.js";import"./chevron-right-D0Ionqq4.js";import"./Input-CzpDwduI.js";import"./search-CJEfvURK.js";import"./spin-Cdblm3m5.js";import"./error-D8O5Gu9w.js";import"./withOsdkMetrics-BRdTEDjT.js";import"./makeExternalStore-BIgSRA9g.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
