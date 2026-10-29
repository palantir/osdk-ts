import{j as r,M as s}from"./iframe-D3RqEcTg.js";import{P as p}from"./pdf-viewer-C6k6qoJL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7gpY1pc.js";import"./preload-helper-DEJIs2kk.js";import"./PdfViewer-rKA135NM.js";import"./index-Cbcna1KE.js";import"./BasePdfViewer-CsVTwVMr.js";import"./BasePdfViewer.module.css-BinWDh28.js";import"./PdfViewerAnnotationLayer-YHs2CN8b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ccRGaMH2.js";import"./PdfViewerOutlineSidebar-02UL0oSl.js";import"./PdfViewerSidebarHeader-CnS74iWw.js";import"./useBaseUiId-DzPouJ0p.js";import"./useControlled-CImu19gq.js";import"./CompositeRoot-Byhzyybf.js";import"./CompositeItem-DtKWkFxx.js";import"./ToolbarRootContext-DAdYN5ZS.js";import"./composite-LUqhuSI5.js";import"./svgIconContainer-BFc_5UUB.js";import"./PdfViewerSearchBar-V2bHDM6n.js";import"./chevron-up-CQ5fimvW.js";import"./chevron-down-CejxcKWv.js";import"./cross-CX1s17MX.js";import"./PdfViewerSidebar-BBXddMsI.js";import"./index-B6gngHYt.js";import"./index-C44NzcrV.js";import"./index-C2bdh9HG.js";import"./PdfViewerToolbar-BIMmt0Km.js";import"./Button-BcgwRa4F.js";import"./chevron-right-C6Xt94_8.js";import"./Input-D6dyl9HO.js";import"./search-CqjQ6sEq.js";import"./spin-D8m1fIOX.js";import"./error-CTTKBYvP.js";import"./withOsdkMetrics-CVWMc52B.js";import"./makeExternalStore-DTiablUL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
