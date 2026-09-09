import{j as r,M as s}from"./iframe-SOll1F4-.js";import{P as p}from"./pdf-viewer-b6nqvkEG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bypr1-7j.js";import"./preload-helper-CZMLvVAf.js";import"./PdfViewer-DOaRtnEm.js";import"./index-DrJjeRbc.js";import"./BasePdfViewer-Dv6DeuzJ.js";import"./BasePdfViewer.module.css-DQEKif_a.js";import"./PdfViewerAnnotationLayer-Ci23XdFO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CdLg30KF.js";import"./PdfViewerOutlineSidebar-C77LdQQe.js";import"./PdfViewerSidebarHeader-Nip_KZ5B.js";import"./useBaseUiId-sLJlVzyX.js";import"./useControlled-A2CHlnom.js";import"./CompositeRoot-D1HIiIIC.js";import"./CompositeItem-CILt4SmA.js";import"./ToolbarRootContext-C6z7XZRH.js";import"./composite-DrjuPSYu.js";import"./svgIconContainer-BqIiSSFa.js";import"./PdfViewerSearchBar-CfvSRdm5.js";import"./chevron-up-DC9eXC94.js";import"./chevron-down-B7EMYXAy.js";import"./cross-BhBNLXbN.js";import"./PdfViewerSidebar-CLZwfdtU.js";import"./index-C1rZZXtv.js";import"./index-Bz0lLybg.js";import"./index-B_l0ycL7.js";import"./PdfViewerToolbar-C26o7_3j.js";import"./Button-Cnjwffgu.js";import"./chevron-right-DHrXgsbP.js";import"./Input-CD41sKiv.js";import"./search-DAnTDJ17.js";import"./spin-C5bBs3qH.js";import"./error-C4kcTs-K.js";import"./withOsdkMetrics-DEguMpFR.js";import"./makeExternalStore-C8WgzvlO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
