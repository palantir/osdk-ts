import{j as r,M as s}from"./iframe-DFu988a9.js";import{P as p}from"./pdf-viewer-Dnk8dsJe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CrGa-1ri.js";import"./preload-helper-Ct8docw7.js";import"./PdfViewer-Btw_pL7v.js";import"./index-DtOhOCRY.js";import"./BasePdfViewer-jutUNdQI.js";import"./BasePdfViewer.module.css-BdPyd1sC.js";import"./PdfViewerAnnotationLayer-9RzTOnru.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBZQUsCJ.js";import"./PdfViewerOutlineSidebar-BDCP9nV0.js";import"./PdfViewerSidebarHeader-B3qplKEH.js";import"./useBaseUiId-DfpfcE5B.js";import"./useControlled-yPSACah0.js";import"./CompositeRoot-zB1wsWJC.js";import"./CompositeItem-DmVR8xyg.js";import"./ToolbarRootContext-C15MGeq9.js";import"./composite-CqpVVzkR.js";import"./svgIconContainer-HyV1TJqY.js";import"./PdfViewerSearchBar-hLTVTg9Z.js";import"./chevron-up-C31YKC3J.js";import"./chevron-down-NXTIxDJ_.js";import"./cross-CTTF3yR9.js";import"./PdfViewerSidebar-kAfUm-0_.js";import"./index-Dsc2iZcF.js";import"./index-oZKnD5HE.js";import"./index-B1t2YxMt.js";import"./PdfViewerToolbar-DHQSCtu0.js";import"./Button-6zqiKmKY.js";import"./chevron-right-C2VuHgv6.js";import"./Input-BESoTzvx.js";import"./search-IsQI8GuL.js";import"./spin-CC-gpMsi.js";import"./error-DqAZcTwE.js";import"./withOsdkMetrics-BYOAqz11.js";import"./makeExternalStore-D9C8VaXr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
