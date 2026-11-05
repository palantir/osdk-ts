import{j as r,M as s}from"./iframe-Cvj3FNL2.js";import{P as p}from"./pdf-viewer-DzvJH3Uu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ConPkORy.js";import"./preload-helper-CetzPUwQ.js";import"./PdfViewer-BGmncWQn.js";import"./index-DH-N1YV0.js";import"./BasePdfViewer-Fpan8DWy.js";import"./BasePdfViewer.module.css-Xon6BHZA.js";import"./PdfViewerAnnotationLayer-KWL4tM4m.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJnLFSTe.js";import"./PdfViewerOutlineSidebar-D_HgRVC1.js";import"./PdfViewerSidebarHeader-4oRRJPEc.js";import"./useBaseUiId-D4o_acv_.js";import"./useControlled-0y2fy9QQ.js";import"./CompositeRoot-waF50HIr.js";import"./CompositeItem-BgbI3PXY.js";import"./ToolbarRootContext-C86500_m.js";import"./composite-BeeOPu6q.js";import"./svgIconContainer-2e47raBd.js";import"./PdfViewerSearchBar-Db6ioyPM.js";import"./chevron-up-DvCDTiVR.js";import"./chevron-down-BLip4j8E.js";import"./cross-BgxfwZhF.js";import"./PdfViewerSidebar-WIRrXRRr.js";import"./index-BMbRZnNU.js";import"./index-B2hgVlCo.js";import"./index-DV2RJSrY.js";import"./PdfViewerToolbar-CGjgmRvn.js";import"./Button-BZDb9IOS.js";import"./chevron-right-CcmHjkwT.js";import"./Input-RAe99RCN.js";import"./search-DUdBrB5_.js";import"./spin-CjpYsLN8.js";import"./error-QqbcWqTY.js";import"./withOsdkMetrics-ChCG3pJN.js";import"./makeExternalStore-Crm20JST.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
