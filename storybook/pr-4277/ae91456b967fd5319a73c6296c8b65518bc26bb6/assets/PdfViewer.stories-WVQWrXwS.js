import{j as r,M as s}from"./iframe-CMYq_tcz.js";import{P as p}from"./pdf-viewer-bBBhSqpg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DiBsU7MX.js";import"./preload-helper-CM9HDmHc.js";import"./PdfViewer-VcsXDQ-K.js";import"./index-xVeJSQI1.js";import"./BasePdfViewer-CRAFjgQ9.js";import"./BasePdfViewer.module.css-BaEP5AWe.js";import"./PdfViewerAnnotationLayer-BHsI1sGI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjmX-gQs.js";import"./PdfViewerOutlineSidebar-ssKgcMi4.js";import"./PdfViewerSidebarHeader-CRUSL3RH.js";import"./useBaseUiId-DSFxpXlB.js";import"./useControlled-Cizv6LhD.js";import"./CompositeRoot-CQO7DKHu.js";import"./CompositeItem-zd83RHVO.js";import"./ToolbarRootContext-BkwDgNb_.js";import"./composite-DiZpwFe_.js";import"./svgIconContainer-exLH2FjZ.js";import"./PdfViewerSearchBar-zNtPmet6.js";import"./chevron-up-BR3ucmwE.js";import"./chevron-down-BNRseUEV.js";import"./cross-dRI083CA.js";import"./PdfViewerSidebar-CI7-pgxC.js";import"./index-C0T6zzR8.js";import"./index-BY7tovu0.js";import"./index-BFodXj3S.js";import"./PdfViewerToolbar-DYVs3gxj.js";import"./Button-Cx35rN_X.js";import"./chevron-right-CI7-fkdV.js";import"./Input-C2JC1_0u.js";import"./search-QHRMuF2d.js";import"./spin-CH7RAEK1.js";import"./error-BMW1MkdC.js";import"./withOsdkMetrics-KpOnxc9_.js";import"./makeExternalStore-DnxSotUN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
