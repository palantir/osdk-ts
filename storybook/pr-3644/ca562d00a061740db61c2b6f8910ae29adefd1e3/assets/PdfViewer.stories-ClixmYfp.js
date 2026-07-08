import{j as r,M as s}from"./iframe-CuiKkwwG.js";import{P as p}from"./pdf-viewer-BQnF3kDN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-V6hSG3NP.js";import"./preload-helper-UfN2IsO2.js";import"./PdfRenderer-DRhMuzKz.js";import"./index-Dlf_uAgv.js";import"./PdfViewer-Crbf11by.js";import"./PdfViewer.module.css-DI-uTML_.js";import"./PdfViewerAnnotationLayer-8B3Jc75W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ynm_B0uy.js";import"./PdfViewerOutlineSidebar-CwR-8Ubg.js";import"./PdfViewerSidebarHeader-BgfQvpmV.js";import"./useBaseUiId-Nay19rjG.js";import"./useControlled-BtnNsy4-.js";import"./CompositeRoot-uIGolNfx.js";import"./CompositeItem-DI9sV6CD.js";import"./ToolbarRootContext-BXvqC9VJ.js";import"./composite-Dpj2Ofmh.js";import"./svgIconContainer-CGaU8KkA.js";import"./PdfViewerSearchBar-vdcHojvF.js";import"./chevron-up-BdamnEYV.js";import"./chevron-down-D5GGsG5z.js";import"./cross-ClsL6Oym.js";import"./PdfViewerSidebar-y7w6q06d.js";import"./index-BlYDKu52.js";import"./index-miFttS1J.js";import"./index-DZQ9ChWc.js";import"./PdfViewerToolbar-x60EcdUw.js";import"./Button-BVUZT5h4.js";import"./chevron-right-5SOuKYJ2.js";import"./Input-a6gyL33e.js";import"./search-DqFyHzjH.js";import"./spin-mKvE75H5.js";import"./error-BGfTejWa.js";import"./withOsdkMetrics-B-SDfUMz.js";import"./makeExternalStore-64FZptrL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
