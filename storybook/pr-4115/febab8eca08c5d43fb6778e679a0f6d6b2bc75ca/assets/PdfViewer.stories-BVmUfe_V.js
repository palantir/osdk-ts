import{j as r,M as s}from"./iframe-DJpO_6mK.js";import{P as p}from"./pdf-viewer-CCI0ftu1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CD45ZpAz.js";import"./preload-helper-GI-tMhcV.js";import"./PdfViewer-DxaTq_HE.js";import"./index-Da0zq60o.js";import"./BasePdfViewer-DlGsiQxl.js";import"./BasePdfViewer.module.css-w4sdFcjc.js";import"./PdfViewerAnnotationLayer-BublvrY4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DxUMQY5k.js";import"./PdfViewerOutlineSidebar-DwMn62Bm.js";import"./PdfViewerSidebarHeader-BbBm1-t6.js";import"./useBaseUiId-V4YDTLU-.js";import"./useControlled-qKe1fmb3.js";import"./CompositeRoot-D9yXIfWf.js";import"./CompositeItem-9_63dtCO.js";import"./ToolbarRootContext-BlqCCViI.js";import"./composite-BF9Swh2Y.js";import"./svgIconContainer-BXariDMs.js";import"./PdfViewerSearchBar-BS7g3B3C.js";import"./chevron-up-ycY5gt-z.js";import"./chevron-down-BVx0EdZG.js";import"./cross-7wx910Yp.js";import"./PdfViewerSidebar--emYmeNy.js";import"./index-DplCgUMJ.js";import"./index-Lks_ei54.js";import"./index-THQXJEcW.js";import"./PdfViewerToolbar-5ol9oS5a.js";import"./Button-CwysH2z4.js";import"./chevron-right-C_DYtf6e.js";import"./Input-DGLD7TKX.js";import"./search-yqKQokLr.js";import"./spin-yVrpcOuT.js";import"./error-xwSiXxIa.js";import"./withOsdkMetrics-CaCBUU14.js";import"./makeExternalStore-DoNjT8AE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
