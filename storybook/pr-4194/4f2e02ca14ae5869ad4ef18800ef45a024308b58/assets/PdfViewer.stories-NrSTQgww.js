import{j as r,M as s}from"./iframe-CRfkLV31.js";import{P as p}from"./pdf-viewer-B5uN2AWk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtDFPWHz.js";import"./preload-helper-YWkr71E4.js";import"./PdfViewer-CVWdXJo1.js";import"./index-DFmae8Ml.js";import"./BasePdfViewer-BQN9ISpD.js";import"./BasePdfViewer.module.css-DjTh7bxS.js";import"./PdfViewerAnnotationLayer-BlMd6WdY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Do3WcF0o.js";import"./PdfViewerOutlineSidebar-DQzUb5x5.js";import"./PdfViewerSidebarHeader-BXGnEJsc.js";import"./useBaseUiId-CtBQzgSV.js";import"./useControlled-B56Cy6tA.js";import"./CompositeRoot-vG43NwJO.js";import"./CompositeItem-BIX1YXND.js";import"./ToolbarRootContext-DesSIIiD.js";import"./composite-Caz7Fjnj.js";import"./svgIconContainer-Cv_5fobV.js";import"./PdfViewerSearchBar-BEUDrGFx.js";import"./chevron-up-CnPjyp5S.js";import"./chevron-down-CQ908lz2.js";import"./cross-2MhXpbG_.js";import"./PdfViewerSidebar-slABa7nE.js";import"./index-BTr8Rb7H.js";import"./index-Dqg3-20q.js";import"./index-xXRsgkLL.js";import"./PdfViewerToolbar-DRykKOFM.js";import"./Button-COPRfQ9y.js";import"./chevron-right-BwXHFoX2.js";import"./Input-C9MxuagH.js";import"./search-DgbssBMa.js";import"./spin-BDB3sDue.js";import"./error-Bjl4tfNj.js";import"./withOsdkMetrics-BXaEjRyq.js";import"./makeExternalStore-DD66B2VR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
