import{j as r,M as s}from"./iframe-C55ekymu.js";import{P as p}from"./pdf-viewer-CDQx6ZE4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D6xp-CH_.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-Cal1JYhm.js";import"./index-CFbWm03i.js";import"./BasePdfViewer-D1wuHtLA.js";import"./BasePdfViewer.module.css-lHFzIGT1.js";import"./PdfViewerAnnotationLayer-ISO6tq5H.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BSHH6hyd.js";import"./PdfViewerOutlineSidebar-DRgIcHwI.js";import"./PdfViewerSidebarHeader-DFc7f93x.js";import"./useBaseUiId-CJcpNbe-.js";import"./useControlled-JP2tPCzU.js";import"./CompositeRoot-PD7tSbST.js";import"./CompositeItem-BaLE10Vy.js";import"./ToolbarRootContext-CxArS7CZ.js";import"./composite-DjC5qkIo.js";import"./svgIconContainer-ChZ06sjp.js";import"./PdfViewerSearchBar-CzvSJDDD.js";import"./chevron-up-FG0Uk_-u.js";import"./chevron-down-BZm8imPT.js";import"./cross-DQROmGzH.js";import"./PdfViewerSidebar-B2NJT0HJ.js";import"./index-Bk4PBoT1.js";import"./index-BjL1lDKB.js";import"./index-Ssbdtt4R.js";import"./PdfViewerToolbar-CGnIhVz3.js";import"./Button-BAZDZzeS.js";import"./chevron-right-DXrRWJTv.js";import"./Input-BKj5HQxK.js";import"./search-BNvEUbcp.js";import"./spin-CjHfgyue.js";import"./error-BZW5WceS.js";import"./withOsdkMetrics-CaT2GfU0.js";import"./makeExternalStore-DAmiU-nQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
