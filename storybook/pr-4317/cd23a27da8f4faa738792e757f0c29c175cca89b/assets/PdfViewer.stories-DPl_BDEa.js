import{j as r,M as s}from"./iframe-C_ysWNhq.js";import{P as p}from"./pdf-viewer-BGi9EzNh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BL5AGHQC.js";import"./preload-helper-B0JwDfT_.js";import"./PdfViewer-BM9Rp8pn.js";import"./index-D8k-dqCc.js";import"./BasePdfViewer-CLRWUSUY.js";import"./BasePdfViewer.module.css-bFCA6u-3.js";import"./PdfViewerAnnotationLayer-QD5AGt_l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CfnaKJea.js";import"./PdfViewerOutlineSidebar-BTYIkmUE.js";import"./PdfViewerSidebarHeader-BdeVFwnN.js";import"./useBaseUiId-B8q5gmFn.js";import"./useControlled-B4G6FObT.js";import"./CompositeRoot-CrpyU9cb.js";import"./CompositeItem-DiTioOKz.js";import"./ToolbarRootContext-DfBDsER3.js";import"./composite-PAhMiX3w.js";import"./svgIconContainer-DPwpyqoW.js";import"./PdfViewerSearchBar-DWiv5Sw-.js";import"./chevron-up-F1JrvPWd.js";import"./chevron-down-Cj8R-hIH.js";import"./cross-Cks-uTaq.js";import"./PdfViewerSidebar-C1Cf8NN7.js";import"./index-Ck0sGKHu.js";import"./index-BT7QjpST.js";import"./index-1cFlDnPE.js";import"./PdfViewerToolbar-BYWapVcB.js";import"./Button-BKcb8JBm.js";import"./chevron-right-C93A9rNB.js";import"./Input-BrUW9GIt.js";import"./search-xeTrpNpN.js";import"./spin-DaVpK_rM.js";import"./error-DcGiqau0.js";import"./withOsdkMetrics-FlvAdwaB.js";import"./makeExternalStore-B5fwAHq7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
