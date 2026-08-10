import{j as r,M as s}from"./iframe-MJCO4tWq.js";import{P as p}from"./pdf-viewer-TzOLMhY8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YLlv09Nb.js";import"./preload-helper-D59pX6Bk.js";import"./PdfRenderer-CnISej3N.js";import"./index-DAbYsEZg.js";import"./PdfViewer-BFzCQ4Rn.js";import"./PdfViewer.module.css-DjeNqlHZ.js";import"./PdfViewerAnnotationLayer-DcQP3ZyT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXhBq-qD.js";import"./PdfViewerOutlineSidebar-CIbHf8CX.js";import"./PdfViewerSidebarHeader-79O5CPMk.js";import"./useBaseUiId-BXP8AFv-.js";import"./useControlled-Dk0yJJ1t.js";import"./CompositeRoot-DORh_qm-.js";import"./CompositeItem-DcPjr0YJ.js";import"./ToolbarRootContext-CPLLt6Rz.js";import"./composite-hTc6teuV.js";import"./svgIconContainer-B8wHNsBx.js";import"./PdfViewerSearchBar-CRqbUGK8.js";import"./chevron-up-7x2sjbkR.js";import"./chevron-down-Cf4wAAwN.js";import"./cross-DEhoIyVp.js";import"./PdfViewerSidebar-B94ru_Kl.js";import"./index-BvLOcFYh.js";import"./index-BsqhAQGv.js";import"./index-Cnl5b3P-.js";import"./PdfViewerToolbar-j8JxDosK.js";import"./Button-1rEr2cfV.js";import"./chevron-right-Dp_pTqxD.js";import"./Input-MHB43ASx.js";import"./search-BVQldDSv.js";import"./spin-C7oX-Imw.js";import"./error-PCzB-peL.js";import"./withOsdkMetrics-D9xBIQld.js";import"./makeExternalStore-__RES5Ho.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
