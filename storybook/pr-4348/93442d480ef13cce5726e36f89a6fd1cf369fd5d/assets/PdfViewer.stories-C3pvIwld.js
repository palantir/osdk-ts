import{j as r,M as s}from"./iframe-DsqGSzyQ.js";import{P as p}from"./pdf-viewer-DxnVCEaK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CpCDBr55.js";import"./preload-helper-C2TDGnFx.js";import"./PdfViewer-DTai1DeR.js";import"./index-CVVe8LYW.js";import"./BasePdfViewer-ZMauVhu8.js";import"./BasePdfViewer.module.css-DSNkeRjp.js";import"./PdfViewerAnnotationLayer-BnVqnN-g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-_Wmtxg.js";import"./PdfViewerOutlineSidebar-CDxgwEZl.js";import"./PdfViewerSidebarHeader-BCqTz0ZD.js";import"./useBaseUiId-CLwdfekz.js";import"./useControlled-DnGJzKUi.js";import"./CompositeRoot-CNLokZ0d.js";import"./CompositeItem-D_FxDdAh.js";import"./ToolbarRootContext-Bbhq9Lsc.js";import"./composite-KVqYkGkg.js";import"./svgIconContainer-BTnUylTl.js";import"./PdfViewerSearchBar-EwFZ3u57.js";import"./chevron-up-BTMbOP3i.js";import"./chevron-down-DbLJwh-Y.js";import"./cross-OIVk5Jqz.js";import"./PdfViewerSidebar-CXGsMIQN.js";import"./index-C-t9nxqw.js";import"./index-BUfWM760.js";import"./index-CQfkRNgK.js";import"./PdfViewerToolbar-D5BBExWC.js";import"./Button-CG3H6I69.js";import"./chevron-right-DS-5RhqW.js";import"./Input-DxF0Wzlw.js";import"./search-Dp0YAnmc.js";import"./spin-BeHGJxlA.js";import"./error-CSEdl-5d.js";import"./withOsdkMetrics-nmEcK_Vs.js";import"./makeExternalStore-CwrRFGw-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
