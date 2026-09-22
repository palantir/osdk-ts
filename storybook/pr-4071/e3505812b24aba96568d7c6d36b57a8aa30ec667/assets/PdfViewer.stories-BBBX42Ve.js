import{j as r,M as s}from"./iframe-bnALbjvc.js";import{P as p}from"./pdf-viewer-BDaVqG7Z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4Irup1P.js";import"./preload-helper-C8kaRY2F.js";import"./PdfViewer-DMgFUMs8.js";import"./index-CaRZXRvk.js";import"./BasePdfViewer-D_eaTmeS.js";import"./BasePdfViewer.module.css-BDTZQWoW.js";import"./PdfViewerAnnotationLayer-UeJPA-xE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkOQ9aRy.js";import"./PdfViewerOutlineSidebar-Y1II3ol-.js";import"./PdfViewerSidebarHeader-BDatTLE6.js";import"./useBaseUiId-BxyyYmda.js";import"./useControlled-3Q0JUJSo.js";import"./CompositeRoot-D_OKtw7H.js";import"./CompositeItem-DQIpyI6o.js";import"./ToolbarRootContext-mleznJTR.js";import"./composite-BdnAwbZ3.js";import"./svgIconContainer-C-SVSCUi.js";import"./PdfViewerSearchBar-CS5q7c-F.js";import"./chevron-up-hf8umDq6.js";import"./chevron-down-CZKe5U1j.js";import"./cross-CGbNp8lf.js";import"./PdfViewerSidebar-DCJTpm96.js";import"./index-DB9OublQ.js";import"./index-C3s-D08F.js";import"./index-D8ht-iMr.js";import"./PdfViewerToolbar-D7yrqqa8.js";import"./Button-pyIzwVHB.js";import"./chevron-right-DTycRZ7l.js";import"./Input-sTQZo4x7.js";import"./search-L4rGQlW3.js";import"./spin-Dvaem_T0.js";import"./error-CRPXFfUM.js";import"./withOsdkMetrics-BbTXPZXR.js";import"./makeExternalStore-ICpfmLMh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
