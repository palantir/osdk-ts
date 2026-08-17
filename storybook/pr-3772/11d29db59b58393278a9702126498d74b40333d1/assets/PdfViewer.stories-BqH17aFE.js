import{j as r,M as s}from"./iframe-BFuSGtb4.js";import{P as p}from"./pdf-viewer-Ba9-x_3U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-EtukW8Nd.js";import"./preload-helper-vKgnz1L2.js";import"./PdfViewer-CVR9O9mx.js";import"./index-BvJhM8Nl.js";import"./BasePdfViewer-CcpmuEuw.js";import"./BasePdfViewer.module.css-DF9_nb0k.js";import"./PdfViewerAnnotationLayer-Veq27rJf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-De7OmMrW.js";import"./PdfViewerOutlineSidebar-CqpfcioE.js";import"./PdfViewerSidebarHeader-BeSGewWX.js";import"./useBaseUiId-r6vSLRg9.js";import"./useControlled-HR5zxcvB.js";import"./CompositeRoot-BS1CWOzA.js";import"./CompositeItem-CfQdryXv.js";import"./ToolbarRootContext-infwX91F.js";import"./composite-B2dxckkZ.js";import"./svgIconContainer-BjNM3mFN.js";import"./PdfViewerSearchBar-CHe94pCI.js";import"./chevron-up-DdUezUKG.js";import"./chevron-down-B0DZKVpj.js";import"./cross-BgMco_KD.js";import"./PdfViewerSidebar-DglbUbZI.js";import"./index-D9SzM9i_.js";import"./index-C9p7LPrR.js";import"./index-DuqoT3Af.js";import"./PdfViewerToolbar---0cXXC2.js";import"./Button-B6iuwea3.js";import"./chevron-right-BS4s3viY.js";import"./Input-2D_wjpim.js";import"./search-CmZO1BAH.js";import"./spin-Dz_Dk8rv.js";import"./error-Cd0VNhT4.js";import"./withOsdkMetrics-CJ-ARXZP.js";import"./makeExternalStore-B3u7TgQ1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
