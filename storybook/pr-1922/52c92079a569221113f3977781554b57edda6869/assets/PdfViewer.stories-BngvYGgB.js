import{j as r,M as s}from"./iframe-QDaBOsra.js";import{P as p}from"./pdf-viewer-C8w4LamY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-0kSggCzL.js";import"./preload-helper-jyefFMUr.js";import"./PdfViewer-Dl1ym3Zz.js";import"./index-D2vpxCu8.js";import"./BasePdfViewer-FudM4iL1.js";import"./BasePdfViewer.module.css-wuTUTyfx.js";import"./PdfViewerAnnotationLayer-CF0MmdsP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ce7u17kB.js";import"./PdfViewerOutlineSidebar-Cqjyt0zq.js";import"./PdfViewerSidebarHeader-Cbhk8hIE.js";import"./useBaseUiId-DjqNfgzR.js";import"./useControlled-FhAUZFAL.js";import"./CompositeRoot-SSbaM0Rn.js";import"./CompositeItem-BZpx2jPT.js";import"./ToolbarRootContext-C6_BvipF.js";import"./composite-BAT7e_UE.js";import"./svgIconContainer-CvV-2N9f.js";import"./PdfViewerSearchBar-BD21Km-u.js";import"./chevron-up-CbpOjtu7.js";import"./chevron-down-B1cL2irb.js";import"./cross-iJjTw1OM.js";import"./PdfViewerSidebar-CTym4zN-.js";import"./index-BpZcid6-.js";import"./index-BlPi3lSf.js";import"./index-DKL8AmRe.js";import"./PdfViewerToolbar-eT7WdZPP.js";import"./Button-DkAvArvY.js";import"./chevron-right-BATFwx04.js";import"./Input-rRK-xJ54.js";import"./search-kqukl_jl.js";import"./spin-D-wcG_YS.js";import"./error-DIA5xUfH.js";import"./withOsdkMetrics-CaEkt7Mu.js";import"./makeExternalStore-CTZ1pZcF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
