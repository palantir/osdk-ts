import{j as r,M as s}from"./iframe-DXehzrLy.js";import{P as p}from"./pdf-viewer-CPL5Pdv4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SEmXAS6s.js";import"./preload-helper-kK_P88Zt.js";import"./PdfViewer-BeQVuqht.js";import"./index-CXAIDCBV.js";import"./BasePdfViewer-BlG_Qvkx.js";import"./BasePdfViewer.module.css-DxTtGfWI.js";import"./PdfViewerAnnotationLayer-BBu1l4Xv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DY898vYv.js";import"./PdfViewerOutlineSidebar-COkJqRlf.js";import"./PdfViewerSidebarHeader-BKeYZlMu.js";import"./useBaseUiId-DZnCUGwj.js";import"./useControlled-Dzo11YgF.js";import"./CompositeRoot-IrgHa_Dk.js";import"./CompositeItem-B8unsUL4.js";import"./ToolbarRootContext-CjkOTyMm.js";import"./composite-DYr_GRHn.js";import"./svgIconContainer-DQDL5XU9.js";import"./PdfViewerSearchBar-CsROVLo6.js";import"./chevron-up-CdeLDbJF.js";import"./chevron-down-D0FRwBSH.js";import"./cross-CRuTMTSr.js";import"./PdfViewerSidebar-nfVr5nOf.js";import"./index-19DjQapZ.js";import"./index-D0HNivTS.js";import"./index-BZAJEyr8.js";import"./PdfViewerToolbar-Bn2RsePG.js";import"./Button-arOEvFAs.js";import"./chevron-right--YJFJTbI.js";import"./Input-CpfpiQM-.js";import"./search-DeuEp5ow.js";import"./spin-BqsZPZrl.js";import"./error-DuLOR7GK.js";import"./withOsdkMetrics-CA3oK6ip.js";import"./makeExternalStore-CXnsRNRI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
