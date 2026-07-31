import{j as r,M as s}from"./iframe-uyk0mCUp.js";import{P as p}from"./pdf-viewer-D2lZE3Ow.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-MTONXM7y.js";import"./preload-helper-DUkoerkJ.js";import"./PdfRenderer-BmcBq_3U.js";import"./index-cNyJXSMp.js";import"./PdfViewer-CRAEITCE.js";import"./PdfViewer.module.css-Cd1M-hXb.js";import"./PdfViewerAnnotationLayer-CD6p_DEC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMbIHi0H.js";import"./PdfViewerOutlineSidebar-DR7-t2Vh.js";import"./PdfViewerSidebarHeader-BxBPUR5W.js";import"./useBaseUiId-BRAYv9TN.js";import"./useControlled-BFcXAkHj.js";import"./CompositeRoot-AeQJjQkw.js";import"./CompositeItem-pCeGSAYO.js";import"./ToolbarRootContext-DI0UYGrF.js";import"./composite-D9L4RBPJ.js";import"./svgIconContainer-B7m6z2vX.js";import"./PdfViewerSearchBar-Cx666DSM.js";import"./chevron-up-B7HDplXa.js";import"./chevron-down-C3FX5T-R.js";import"./cross-CFwh4iO6.js";import"./PdfViewerSidebar-x6g3ObzT.js";import"./index-BY1UeHqx.js";import"./index-COpefVFT.js";import"./index-ClQrFhrN.js";import"./PdfViewerToolbar-DavxhIIw.js";import"./Button-COieJLVA.js";import"./chevron-right-X-1mi0zl.js";import"./Input-OnWCQOx0.js";import"./search-C-V8Xqsq.js";import"./spin-CHYYFiG3.js";import"./error-Dwadp2yn.js";import"./withOsdkMetrics-D2afrcgu.js";import"./makeExternalStore-gyq_4DLC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
