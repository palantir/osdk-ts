import{j as r,M as s}from"./iframe-DjO1Y5KD.js";import{P as p}from"./pdf-viewer-B2A4vGd0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B-jOuCkf.js";import"./preload-helper-DHosF_Vr.js";import"./PdfRenderer-Dh1E-X-_.js";import"./index-Da8z7oEc.js";import"./PdfViewer-B8Yqcg31.js";import"./PdfViewer.module.css-7FH7Uno6.js";import"./PdfViewerAnnotationLayer-DQn2PrEv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZfnochC1.js";import"./PdfViewerOutlineSidebar-CSvOpnKa.js";import"./PdfViewerSidebarHeader-CYXl81l1.js";import"./useBaseUiId-Cn6_ygUf.js";import"./useControlled-ai9ga_yt.js";import"./CompositeRoot-Dw23r-jJ.js";import"./CompositeItem-CRMRF0tg.js";import"./ToolbarRootContext-B8x2s3ZI.js";import"./composite-Bd626ASs.js";import"./svgIconContainer-D6HUiu07.js";import"./PdfViewerSearchBar-C9PkNEQA.js";import"./chevron-up-CVKGy-1D.js";import"./chevron-down-pR2fh_mT.js";import"./cross-tGA7XqzW.js";import"./PdfViewerSidebar-DqbUn0NN.js";import"./index-BFpVUcDF.js";import"./index-BUxTRb1k.js";import"./index-D93f91Ms.js";import"./PdfViewerToolbar-CekQmFe1.js";import"./Button-BNxBvJnR.js";import"./chevron-right-CNyjPpje.js";import"./Input-DiRNvOoy.js";import"./search-1bd_RPWo.js";import"./spin-el6_-Gdy.js";import"./error-a7j3r22v.js";import"./withOsdkMetrics-DNr9JQQP.js";import"./makeExternalStore-Cp0-nqWS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
