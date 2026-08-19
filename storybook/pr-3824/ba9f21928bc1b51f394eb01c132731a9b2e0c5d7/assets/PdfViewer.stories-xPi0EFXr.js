import{j as r,M as s}from"./iframe-CGqc1mNB.js";import{P as p}from"./pdf-viewer-BxVh4jY0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CyNcIKQv.js";import"./preload-helper-BJdpauA9.js";import"./PdfViewer-Bu1kbqoW.js";import"./index-Dgk2zAqJ.js";import"./BasePdfViewer-DELgHwTN.js";import"./BasePdfViewer.module.css-D4VeItgW.js";import"./PdfViewerAnnotationLayer-C-5JWVr5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DS7H9Qvw.js";import"./PdfViewerOutlineSidebar-DuxCzlAk.js";import"./PdfViewerSidebarHeader-DBJ0mWo9.js";import"./useBaseUiId-CLH5ZdSv.js";import"./useControlled-BVW9yO_V.js";import"./CompositeRoot-CuJzHoOQ.js";import"./CompositeItem-CUyPJbYK.js";import"./ToolbarRootContext-BdKEdjkY.js";import"./composite-D6bWet8H.js";import"./svgIconContainer-CBRazqRm.js";import"./PdfViewerSearchBar-BzGVOXEb.js";import"./chevron-up-BUidLten.js";import"./chevron-down-UapZ8jOT.js";import"./cross-XlQOrTFd.js";import"./PdfViewerSidebar-A4AJwCSd.js";import"./index-BtlPha85.js";import"./index-Dp5yRYTx.js";import"./index-DbvXLa6Y.js";import"./PdfViewerToolbar-C32uJuzy.js";import"./Button-BDmqxq31.js";import"./chevron-right-BvG0GEc8.js";import"./Input-BrLbJg7l.js";import"./search-DpFh14Cw.js";import"./spin-CMofhK-G.js";import"./error-U35dGLvC.js";import"./withOsdkMetrics-Ct9fR7z_.js";import"./makeExternalStore-B9NtbuNt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
