import{j as r,M as s}from"./iframe-BaflQOGd.js";import{P as p}from"./pdf-viewer-jFTmPzxO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BgFFk-jG.js";import"./preload-helper-p4HJijQg.js";import"./PdfViewer-D1H13rmU.js";import"./index-Cdh_dFWj.js";import"./BasePdfViewer-DvQAw6qi.js";import"./BasePdfViewer.module.css-BoieW_FZ.js";import"./PdfViewerAnnotationLayer-DuwbocPF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FB8VAunJ.js";import"./PdfViewerOutlineSidebar-doXrtx5E.js";import"./PdfViewerSidebarHeader-D2exJItX.js";import"./useBaseUiId-pk7UMSg-.js";import"./useControlled-BHd0pcmo.js";import"./CompositeRoot-SWHLt1FW.js";import"./CompositeItem-nIPenTO0.js";import"./ToolbarRootContext-CwJdNdBU.js";import"./composite-Bz466JDP.js";import"./svgIconContainer-C8p2nfID.js";import"./PdfViewerSearchBar-CJW-4pwq.js";import"./chevron-up-B9vqlMsz.js";import"./chevron-down-Cnmtw8e6.js";import"./cross-BGrOCP65.js";import"./PdfViewerSidebar-HYl5dfwf.js";import"./index-DxGtCk42.js";import"./index-BbhGUNVZ.js";import"./index-8FM1YS3J.js";import"./PdfViewerToolbar-Cztx47b2.js";import"./Button-Bdo2X4x8.js";import"./chevron-right-DU37zgGG.js";import"./Input-C7CjAQyY.js";import"./search-BBcvVFuT.js";import"./spin-C2CdELrV.js";import"./error-DIEj2ztu.js";import"./withOsdkMetrics-CP1M_ZfY.js";import"./makeExternalStore-C2juSaVb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
