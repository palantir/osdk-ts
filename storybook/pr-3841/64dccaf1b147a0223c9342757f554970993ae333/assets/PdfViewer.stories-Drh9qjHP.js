import{j as r,M as s}from"./iframe-00do0GFe.js";import{P as p}from"./pdf-viewer-DizXDDh6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpdEBCvi.js";import"./preload-helper-BybtXQP0.js";import"./PdfViewer-Dw5vCZ41.js";import"./index-BGd643c2.js";import"./BasePdfViewer-CRPYvVtZ.js";import"./BasePdfViewer.module.css-BbBNJk9E.js";import"./PdfViewerAnnotationLayer-DO7FybiW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-P3IA1CDS.js";import"./PdfViewerOutlineSidebar-nrhPJvLU.js";import"./PdfViewerSidebarHeader-tFMvBmjV.js";import"./useBaseUiId-C50NdykD.js";import"./useControlled-DE2hx_aJ.js";import"./CompositeRoot-12gA1A3B.js";import"./CompositeItem-Ds6yjvWK.js";import"./ToolbarRootContext-Ck2kYzW4.js";import"./composite-CGwb3jqo.js";import"./svgIconContainer-CFcIosnA.js";import"./PdfViewerSearchBar-BGfaiDsA.js";import"./chevron-up-B0uAC5qQ.js";import"./chevron-down-CuokWr8C.js";import"./cross-nwDujSFV.js";import"./PdfViewerSidebar-D-nRQZBf.js";import"./index-zNKGDfNB.js";import"./index-DK-iGYU_.js";import"./index-ClkWJhJu.js";import"./PdfViewerToolbar-DRuL9Jx4.js";import"./Button-yWAqZOyg.js";import"./chevron-right-DwuS8hdT.js";import"./Input-CRsXFG3m.js";import"./search-DAKi-R5m.js";import"./spin-ltcj6x1P.js";import"./error-7ouMyDWT.js";import"./withOsdkMetrics-D58QOMrM.js";import"./makeExternalStore-DtGkD75o.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
