import{j as r,M as s}from"./iframe-Bib3kGT6.js";import{P as p}from"./pdf-viewer-4cBolreY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BM22lbCl.js";import"./preload-helper-C51LGZ31.js";import"./PdfViewer-Bc68uqvI.js";import"./index-VjAhrkKZ.js";import"./BasePdfViewer-CN9hbleS.js";import"./BasePdfViewer.module.css-Yjd6Odwz.js";import"./PdfViewerAnnotationLayer-CuGr71rB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CryP_EOU.js";import"./PdfViewerOutlineSidebar-32mWWKdV.js";import"./PdfViewerSidebarHeader-q_0wzqMg.js";import"./useBaseUiId-CnlY9UEZ.js";import"./useControlled-Drh12MBC.js";import"./CompositeRoot-B1ApySat.js";import"./CompositeItem-BS4Q5bgP.js";import"./ToolbarRootContext-DtzEjAjd.js";import"./composite--njzr7wG.js";import"./svgIconContainer-BZsDWIhS.js";import"./PdfViewerSearchBar-BavBegia.js";import"./chevron-up-CY0J2IGx.js";import"./chevron-down-lJXkLqJI.js";import"./cross-qIT4Mchn.js";import"./PdfViewerSidebar-B3CI8VSz.js";import"./index-B7RnLU7r.js";import"./index-CYSDWPDR.js";import"./index-DGYgRGZ8.js";import"./PdfViewerToolbar-I4XsIJQt.js";import"./Button-D_pfSgnH.js";import"./chevron-right-ChfepQiH.js";import"./Input-isV5Y8xL.js";import"./search-P-oq-XW2.js";import"./spin-DRaKHm7y.js";import"./error-k1gRtmZa.js";import"./withOsdkMetrics-BuJy5uT4.js";import"./makeExternalStore-BO4M2yBP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
