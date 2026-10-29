import{j as r,M as s}from"./iframe-BXMaRU6d.js";import{P as p}from"./pdf-viewer-BpaDDobz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CwyHNuoZ.js";import"./preload-helper-m1fl9yzx.js";import"./PdfViewer-BvdY5900.js";import"./index-D34UCeFi.js";import"./BasePdfViewer-CJUdxpvc.js";import"./BasePdfViewer.module.css-CI7H9CmE.js";import"./PdfViewerAnnotationLayer-DXYnU5lP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bcw1suXE.js";import"./PdfViewerOutlineSidebar-DBn6Lkaa.js";import"./PdfViewerSidebarHeader-BteUNdLd.js";import"./useBaseUiId-CnVJ9pTQ.js";import"./useControlled-CqKbYNY-.js";import"./CompositeRoot-Di_RzIT3.js";import"./CompositeItem-CxCbcCcw.js";import"./ToolbarRootContext-01ULS3om.js";import"./composite-CTlCsHkl.js";import"./svgIconContainer-M8lsqLmU.js";import"./PdfViewerSearchBar-Ci4cKTxr.js";import"./chevron-up-BO5CjPvB.js";import"./chevron-down-ByBb-_AI.js";import"./cross-MZH7NFlC.js";import"./PdfViewerSidebar-Dd8g1gMp.js";import"./index-CLYhKnEi.js";import"./index-C36yrfOW.js";import"./index-BtCN2h1R.js";import"./PdfViewerToolbar-B7KXKCrn.js";import"./Button-DtbuXO0-.js";import"./chevron-right-DbXATbxC.js";import"./Input-B62f65LS.js";import"./search-B6DdGciv.js";import"./spin-CUXjNQsF.js";import"./error-DqaLhFsi.js";import"./withOsdkMetrics-DErkFYVR.js";import"./makeExternalStore-DZLA8zoV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
