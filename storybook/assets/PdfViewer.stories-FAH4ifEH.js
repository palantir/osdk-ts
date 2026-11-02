import{j as r,M as s}from"./iframe-B0Q7ew8Z.js";import{P as p}from"./pdf-viewer-ConJWG2y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B70bSLSQ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-D-23QqOB.js";import"./index-B3euQAxX.js";import"./BasePdfViewer-Ro9Y2MBW.js";import"./BasePdfViewer.module.css-D6KwnuyS.js";import"./PdfViewerAnnotationLayer-a-8X7L89.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgqrYzFi.js";import"./PdfViewerOutlineSidebar-BuaklaCb.js";import"./PdfViewerSidebarHeader-CdAUWvu6.js";import"./useBaseUiId-DTpiFHLl.js";import"./useControlled-BS_Eo8Jr.js";import"./CompositeRoot-Bd3Sulp4.js";import"./CompositeItem-CVqNqknj.js";import"./ToolbarRootContext-C1mulGkb.js";import"./composite-C38hBHQ1.js";import"./svgIconContainer-DHqtFPi_.js";import"./PdfViewerSearchBar-CxgtYGC0.js";import"./chevron-up-CMMGskT6.js";import"./chevron-down-CPWeMG22.js";import"./cross-CuUHaT77.js";import"./PdfViewerSidebar-CInlmIWr.js";import"./index-MLSRGr_T.js";import"./index-LgXgW0tz.js";import"./index-DDwtoaNx.js";import"./PdfViewerToolbar-D5Z8s1aZ.js";import"./Button-DJ9AZpJd.js";import"./chevron-right-CeZvUjOM.js";import"./Input-g4yPu6B6.js";import"./search-ftQvRLI-.js";import"./spin-B3F3Uc0H.js";import"./error-DCkSicSK.js";import"./withOsdkMetrics-xWaVFLHz.js";import"./makeExternalStore-DfcRwF-H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
