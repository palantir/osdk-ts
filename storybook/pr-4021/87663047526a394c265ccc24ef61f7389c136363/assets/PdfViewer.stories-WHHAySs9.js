import{j as r,M as s}from"./iframe-CC13kVkc.js";import{P as p}from"./pdf-viewer-BIuWwza-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjPeh4AB.js";import"./preload-helper-iiwGnqeP.js";import"./PdfViewer-BDXDu88A.js";import"./index-DU2P82bW.js";import"./BasePdfViewer-B0cEpT8g.js";import"./BasePdfViewer.module.css-DYronGp2.js";import"./PdfViewerAnnotationLayer-BBTJy3vF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRpS_UDx.js";import"./PdfViewerOutlineSidebar-CJcmJVOk.js";import"./PdfViewerSidebarHeader-B0Ff4R0G.js";import"./useBaseUiId-HgrihVGX.js";import"./useControlled-C8Ss_1q9.js";import"./CompositeRoot-CI52QSU0.js";import"./CompositeItem-DZfCHwau.js";import"./ToolbarRootContext-CWcw0hmq.js";import"./composite-CQT3GPGa.js";import"./svgIconContainer-BM4AiPUS.js";import"./PdfViewerSearchBar-lXkvpdGA.js";import"./chevron-up-CbIBdvyG.js";import"./chevron-down-SXnOgnm5.js";import"./cross-Gw99IDXX.js";import"./PdfViewerSidebar-Bn6FXQR6.js";import"./index-BbGmio58.js";import"./index-C0gqvA1S.js";import"./index-DWN_AYu3.js";import"./PdfViewerToolbar-C1RgvOis.js";import"./Button-DChBnEps.js";import"./chevron-right-BZiAi5Fu.js";import"./Input-B8esvYJ8.js";import"./search-DATCmuXl.js";import"./spin-l-Ehti4E.js";import"./error-C04PUB1J.js";import"./withOsdkMetrics-DYDVQvXv.js";import"./makeExternalStore-2iYjMQbd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
