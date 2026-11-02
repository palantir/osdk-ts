import{j as r,M as s}from"./iframe-gwjWh6aP.js";import{P as p}from"./pdf-viewer-CQTT5Own.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bg4-DYO6.js";import"./preload-helper-bIyT3R7b.js";import"./PdfViewer-CaHzUHo7.js";import"./index-B2e6YLgb.js";import"./BasePdfViewer-D3JCa-Xy.js";import"./BasePdfViewer.module.css-BQYoncaD.js";import"./PdfViewerAnnotationLayer-Dx033abk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDCGSXNo.js";import"./PdfViewerOutlineSidebar-DQcJoVJ2.js";import"./PdfViewerSidebarHeader-q5thEYqr.js";import"./useBaseUiId-MuGd9EbB.js";import"./useControlled-BRAT0rWw.js";import"./CompositeRoot-CSWL0J3s.js";import"./CompositeItem-B632hz3W.js";import"./ToolbarRootContext-eiDeLXye.js";import"./composite-XNngWcyG.js";import"./svgIconContainer-uf6Xe766.js";import"./PdfViewerSearchBar-D-UtZEYa.js";import"./chevron-up-m8FkoQnf.js";import"./chevron-down-Bpsf2br_.js";import"./cross-CxSJV-iM.js";import"./PdfViewerSidebar-DK8Z_Cgu.js";import"./index-BjKGneLm.js";import"./index-C2Xm0Ig8.js";import"./index-CctUI8eo.js";import"./PdfViewerToolbar-Cwerbr-V.js";import"./Button-DYsrDr-V.js";import"./chevron-right-CGLECGu6.js";import"./Input-B14JiyW9.js";import"./search-77UZhWyC.js";import"./spin-DaILJp9D.js";import"./error-CG0c4OaM.js";import"./withOsdkMetrics-CT1e8NKK.js";import"./makeExternalStore-DOMUefpT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
