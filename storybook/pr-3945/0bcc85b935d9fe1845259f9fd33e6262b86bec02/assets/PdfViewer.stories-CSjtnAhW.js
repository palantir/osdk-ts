import{j as r,M as s}from"./iframe-zJLPhxDK.js";import{P as p}from"./pdf-viewer-CXDgOp_f.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bz9vrnYu.js";import"./preload-helper-GdadUrm9.js";import"./PdfViewer-uhwki0W_.js";import"./index-vZmbqUi_.js";import"./BasePdfViewer-BUHZo5Cd.js";import"./BasePdfViewer.module.css-Cp9OKbQ5.js";import"./PdfViewerAnnotationLayer-CTx1YiDB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Hx98HfJR.js";import"./PdfViewerOutlineSidebar-BzGyo4nh.js";import"./PdfViewerSidebarHeader-ChJ_g-Tg.js";import"./useBaseUiId-J532w0x8.js";import"./useControlled-CczBvYjn.js";import"./CompositeRoot-hFV3ryaA.js";import"./CompositeItem-BJ5z2a5g.js";import"./ToolbarRootContext-BZVYMUxs.js";import"./composite-CNMHWwCZ.js";import"./svgIconContainer-17tBJAuz.js";import"./PdfViewerSearchBar-BOpRPnt8.js";import"./chevron-up-DGB5LD3N.js";import"./chevron-down-Bpi62_qF.js";import"./cross-CmuzwVFc.js";import"./PdfViewerSidebar-0g49mU4n.js";import"./index-C3FdRyLS.js";import"./index-CDChpdVQ.js";import"./index-CPu2nGpB.js";import"./PdfViewerToolbar-CacD7ZeA.js";import"./Button-DBmBk1R0.js";import"./chevron-right-C5S8U-p3.js";import"./Input-DZwpfTHR.js";import"./search-Bw5FPkB2.js";import"./spin-DzfzXO8u.js";import"./error-CbniACzb.js";import"./withOsdkMetrics-Bw_72zWT.js";import"./makeExternalStore-BwWr7KGq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
