import{j as r,M as s}from"./iframe-oUWpW2hj.js";import{P as p}from"./pdf-viewer-Dl23QSYc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-H6UB_Pm5.js";import"./preload-helper-Yv6afaVL.js";import"./PdfViewer-DR7yZeFp.js";import"./index-CgvqzYiy.js";import"./BasePdfViewer-EtoHLtxq.js";import"./BasePdfViewer.module.css-6WoksNG1.js";import"./PdfViewerAnnotationLayer-CJlzfbbg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BlNHgGc7.js";import"./PdfViewerOutlineSidebar-BDelhmGS.js";import"./PdfViewerSidebarHeader-IqqS3T4Z.js";import"./useBaseUiId-CNXzk4iF.js";import"./useControlled-C-y7Ct0C.js";import"./CompositeRoot-B0P6wVHU.js";import"./CompositeItem-mpma5yoQ.js";import"./ToolbarRootContext-CoDK9tvS.js";import"./composite-DXJqaJaP.js";import"./svgIconContainer-CfDlmTSN.js";import"./PdfViewerSearchBar-DdCG2QGH.js";import"./chevron-up-BGNeoamU.js";import"./chevron-down-B1zztQ-L.js";import"./cross-DH6uOwyM.js";import"./PdfViewerSidebar-CqHVDt51.js";import"./index-Dr1tBJwO.js";import"./index-BbYayOBF.js";import"./index-Cg1Ec0a0.js";import"./PdfViewerToolbar-11T8Z8Vq.js";import"./Button-D0GlSb4-.js";import"./chevron-right-BtzXRU7W.js";import"./Input-BW0wlw1T.js";import"./search-OfzKiz9h.js";import"./spin-Bb4pl7yO.js";import"./error-DWxhuhX7.js";import"./withOsdkMetrics-JDMrgbFb.js";import"./makeExternalStore-DCxwJsFe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
