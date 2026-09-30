import{j as r,M as s}from"./iframe-DxVz5dus.js";import{P as p}from"./pdf-viewer-Bi348_aU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CbIymxYo.js";import"./preload-helper-dij9S3RJ.js";import"./PdfViewer-PEQS47ue.js";import"./index-C_W-VT0S.js";import"./BasePdfViewer-DiESzAkj.js";import"./BasePdfViewer.module.css-PzIWRFhP.js";import"./PdfViewerAnnotationLayer-CU_XgA4S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5phEnFU.js";import"./PdfViewerOutlineSidebar-Cm7G6rG1.js";import"./PdfViewerSidebarHeader-Vt_S4-fR.js";import"./useBaseUiId-BWXYzcoK.js";import"./useControlled-laJEGVBG.js";import"./CompositeRoot-d5etySDx.js";import"./CompositeItem-DZxjvmIc.js";import"./ToolbarRootContext-BhnwoH5s.js";import"./composite-BDVlfNwN.js";import"./svgIconContainer-ftSbGeci.js";import"./PdfViewerSearchBar-DmDqfP45.js";import"./chevron-up-CumbAUZ6.js";import"./chevron-down-CJ_JWdST.js";import"./cross-IXW3xmZm.js";import"./PdfViewerSidebar-Dbowd7E4.js";import"./index-DQFNyqTE.js";import"./index-ClRjmnyd.js";import"./index-gok66sxW.js";import"./PdfViewerToolbar-l5iA6_OV.js";import"./Button-DkKQyNy7.js";import"./chevron-right-D_SHD3cf.js";import"./Input-BLn4Lqlk.js";import"./search-C5WRo3gI.js";import"./spin-Dqjj5m5s.js";import"./error-l8hi8NpA.js";import"./withOsdkMetrics-BUQXNERU.js";import"./makeExternalStore-6HRE-tXR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
