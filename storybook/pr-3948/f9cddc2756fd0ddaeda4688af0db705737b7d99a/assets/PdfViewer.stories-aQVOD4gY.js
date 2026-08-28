import{j as r,M as s}from"./iframe-DWvzDoTE.js";import{P as p}from"./pdf-viewer-CWZa96ht.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6hjeWzL.js";import"./preload-helper-ByL0Uuda.js";import"./PdfViewer-BjApV-J7.js";import"./index-BBS1h8cn.js";import"./BasePdfViewer-DmUCGInX.js";import"./BasePdfViewer.module.css-Bw8LtpqR.js";import"./PdfViewerAnnotationLayer-BpZJiHfD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cb9BFSvX.js";import"./PdfViewerOutlineSidebar--SqsA6ZS.js";import"./PdfViewerSidebarHeader-D6WdzifG.js";import"./useBaseUiId-CMlf_How.js";import"./useControlled-DfUZjtJU.js";import"./CompositeRoot-6QsLZ1Yi.js";import"./CompositeItem-DeeOISel.js";import"./ToolbarRootContext-B7EsbN7p.js";import"./composite-BIHrvkj3.js";import"./svgIconContainer-BhadlONA.js";import"./PdfViewerSearchBar-NA9G3e_8.js";import"./chevron-up-BuX7baCq.js";import"./chevron-down-BZ6p4J3G.js";import"./cross--Y2f0GiD.js";import"./PdfViewerSidebar-Eqg9YKoW.js";import"./index-Bu_tjXun.js";import"./index-BQWPPGSx.js";import"./index-q_1-gxWd.js";import"./PdfViewerToolbar-DgKXVBkT.js";import"./Button-DwyCCUCH.js";import"./chevron-right-Cz01z6Bn.js";import"./Input-DiGaV4rJ.js";import"./search-BObskws0.js";import"./spin-C2u5yzMR.js";import"./error-DJSg9FwQ.js";import"./withOsdkMetrics-5t1Ggpdt.js";import"./makeExternalStore-BresugQV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
