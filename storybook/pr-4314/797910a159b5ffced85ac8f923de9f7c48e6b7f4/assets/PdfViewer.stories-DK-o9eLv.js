import{j as r,M as s}from"./iframe-Cu1bkUV2.js";import{P as p}from"./pdf-viewer-BiqBGyPo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SuCgT91N.js";import"./preload-helper-ByBgFQo4.js";import"./PdfViewer-DLsAx16K.js";import"./index-D8Vgs137.js";import"./BasePdfViewer-CoT6TPrx.js";import"./BasePdfViewer.module.css-DsxK_K50.js";import"./PdfViewerAnnotationLayer-DpV6U8fb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C6DfS8Vl.js";import"./PdfViewerOutlineSidebar-BXmd3mFW.js";import"./PdfViewerSidebarHeader-WdbCTfoI.js";import"./useBaseUiId-CsOE9eY7.js";import"./useControlled-ZBCcjOJi.js";import"./CompositeRoot-DhJzBFkF.js";import"./CompositeItem-h8YISAEh.js";import"./ToolbarRootContext-BY5M87wV.js";import"./composite-CI-SY_Qx.js";import"./svgIconContainer-Dtkj8beD.js";import"./PdfViewerSearchBar-De5hjaoX.js";import"./chevron-up-3of3rui4.js";import"./chevron-down-BybrbSIU.js";import"./cross-CpkrEpF5.js";import"./PdfViewerSidebar-BHKtBiJU.js";import"./index-BqaXp55y.js";import"./index-BJrnppPH.js";import"./index-B9_oej9c.js";import"./PdfViewerToolbar-DAyX-_jF.js";import"./Button-DZYZZvZz.js";import"./chevron-right-ya30EdtT.js";import"./Input-DJ6MiMh_.js";import"./search-DrsueRnd.js";import"./spin-DvI0awP3.js";import"./error-IUDeQ-Lf.js";import"./withOsdkMetrics-DT7zQxuO.js";import"./makeExternalStore-3zKJ5_AP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
