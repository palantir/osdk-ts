import{j as r,M as s}from"./iframe-BUjiwBf5.js";import{P as p}from"./pdf-viewer-CztKXeDP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DmKfGX8h.js";import"./preload-helper-B6c2vp8P.js";import"./PdfViewer-CmktdUro.js";import"./index-CKk_335J.js";import"./BasePdfViewer-6a0BPDGD.js";import"./BasePdfViewer.module.css-C4apA35M.js";import"./PdfViewerAnnotationLayer-BJtFxwZN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BoCMgVOz.js";import"./PdfViewerOutlineSidebar-C7tuHDJ_.js";import"./PdfViewerSidebarHeader-BrB5eIwd.js";import"./useBaseUiId-C7GiG9Zo.js";import"./useControlled-u72cUfPk.js";import"./CompositeRoot-BvAusmZw.js";import"./CompositeItem-BuyG-Xnd.js";import"./ToolbarRootContext-Bw5pjQww.js";import"./composite-DKWT5B2T.js";import"./svgIconContainer-B-5qucwe.js";import"./PdfViewerSearchBar-DSZgEa_g.js";import"./chevron-up-BIMbkWFm.js";import"./chevron-down-BxUE_6XI.js";import"./cross-DMwbX_xt.js";import"./PdfViewerSidebar-BHdC9KLA.js";import"./index-Bh90kKL7.js";import"./index-DQS8f553.js";import"./index-BXREvfES.js";import"./PdfViewerToolbar-uBbi04CF.js";import"./Button-DdiFhH1O.js";import"./chevron-right-BCH_Xwa6.js";import"./Input-DrlS66iR.js";import"./search-DWZ7jrir.js";import"./spin-CdKG7PDy.js";import"./error-Dm0kzNQU.js";import"./withOsdkMetrics-DPL7FlTV.js";import"./makeExternalStore-DQVcY1um.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
