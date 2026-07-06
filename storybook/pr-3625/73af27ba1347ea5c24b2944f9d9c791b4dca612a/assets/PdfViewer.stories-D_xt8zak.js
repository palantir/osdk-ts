import{j as r,M as s}from"./iframe-BP06dXdo.js";import{P as p}from"./pdf-viewer-DSSipZCh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1b0C4ld.js";import"./preload-helper-DlEWCR1V.js";import"./PdfRenderer-DVxTnzj1.js";import"./index-Dk34pG-E.js";import"./PdfViewer-B3YTM4p9.js";import"./PdfViewer.module.css-B6wcny5G.js";import"./PdfViewerAnnotationLayer-D-I9X57a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-jWS07BAn.js";import"./PdfViewerOutlineSidebar-CXcHPWBp.js";import"./PdfViewerSidebarHeader-DamnMu3h.js";import"./useBaseUiId-Bp1v_4Yt.js";import"./useControlled-CuXn7b8T.js";import"./CompositeRoot-BcUlOtuk.js";import"./CompositeItem-11-57Byd.js";import"./ToolbarRootContext-CkfiVBkK.js";import"./composite-DNi76Wdx.js";import"./svgIconContainer-Bj0iQopz.js";import"./PdfViewerSearchBar-C00HzvxE.js";import"./chevron-up-OJmfV8bj.js";import"./chevron-down-Cwji13S3.js";import"./cross-iCTpuXAP.js";import"./PdfViewerSidebar-NeKAi4OV.js";import"./index-szmPUtPW.js";import"./index-C57lYKpt.js";import"./index-CYXBz4-d.js";import"./PdfViewerToolbar-ChZ-_lau.js";import"./Button-DHAp4sQQ.js";import"./chevron-right-B4EJA2Is.js";import"./Input-DiSzpbBK.js";import"./search-CiYrMFGj.js";import"./spin-CnvsXwTK.js";import"./error-C76gCqBT.js";import"./withOsdkMetrics-BtYhTnlX.js";import"./makeExternalStore-ry9lHCgm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
