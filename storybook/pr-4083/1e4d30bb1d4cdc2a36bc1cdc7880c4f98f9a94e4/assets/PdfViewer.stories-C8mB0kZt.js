import{j as r,M as s}from"./iframe-Cuknj9ph.js";import{P as p}from"./pdf-viewer-DVV43GZd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-OwRfSZ3q.js";import"./preload-helper-DA49r888.js";import"./PdfViewer-D2roG19A.js";import"./index-DUVMLmA5.js";import"./BasePdfViewer-C5NQG7_h.js";import"./BasePdfViewer.module.css-ANoqoWIK.js";import"./PdfViewerAnnotationLayer-Dxs2rj8Z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SHb7eO6P.js";import"./PdfViewerOutlineSidebar-T4mmPVN-.js";import"./PdfViewerSidebarHeader-D04wUAjV.js";import"./useBaseUiId-ksC6H-yy.js";import"./useControlled-D1P2IuRq.js";import"./CompositeRoot-CBtXINXV.js";import"./CompositeItem-CyTGoO_U.js";import"./ToolbarRootContext-BMS0iTVE.js";import"./composite-CUDt05Vv.js";import"./svgIconContainer-Bxolnsq9.js";import"./PdfViewerSearchBar-BIXeOkYV.js";import"./chevron-up-haUGpyQ4.js";import"./chevron-down-DYalT47P.js";import"./cross-9NrnDCFm.js";import"./PdfViewerSidebar-cPjZMs2D.js";import"./index-C1B0s3j1.js";import"./index-B7AWjemI.js";import"./index-BPGm0MAa.js";import"./PdfViewerToolbar-Ct6Kvw5m.js";import"./Button-fi3zZM83.js";import"./chevron-right-BlV22pdQ.js";import"./Input-BEJtrH8a.js";import"./search-BJhgCNFy.js";import"./spin-pTt1omBN.js";import"./error-CYI1ELi7.js";import"./withOsdkMetrics-BEbRkfCK.js";import"./makeExternalStore-VBmH-lGu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
