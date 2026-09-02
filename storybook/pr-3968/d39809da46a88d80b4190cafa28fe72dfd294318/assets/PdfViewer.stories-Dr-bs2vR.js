import{j as r,M as s}from"./iframe-DTTRhbjz.js";import{P as p}from"./pdf-viewer-Bx6cmqti.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BsHuUGZX.js";import"./preload-helper-DZ8L_H7u.js";import"./PdfViewer-DjygFYGj.js";import"./index-CUoqkEXP.js";import"./BasePdfViewer-B7PWndTG.js";import"./BasePdfViewer.module.css-Dit0GYxZ.js";import"./PdfViewerAnnotationLayer-D2rDD0-U.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-COQgMsuu.js";import"./PdfViewerOutlineSidebar-DTHHbVOm.js";import"./PdfViewerSidebarHeader-DbH3w2fU.js";import"./useBaseUiId-BmoDTCf9.js";import"./useControlled-hxzK8_TE.js";import"./CompositeRoot-DZcwmswi.js";import"./CompositeItem-CyxD93o0.js";import"./ToolbarRootContext-C0tIZT9m.js";import"./composite-oJZ0BVll.js";import"./svgIconContainer-B_ocSrmO.js";import"./PdfViewerSearchBar-CWQRrWzG.js";import"./chevron-up-B1Mi1eIH.js";import"./chevron-down-tY3lDuMM.js";import"./cross-DxV9JdK2.js";import"./PdfViewerSidebar-DeSkZqI0.js";import"./index-VjiLdOhj.js";import"./index-zn7h2p8a.js";import"./index-V6cd4RX1.js";import"./PdfViewerToolbar-DbyzK_wy.js";import"./Button-C9Wmar6u.js";import"./chevron-right-KZ0xM-PY.js";import"./Input-qArtebK8.js";import"./search-B7jXOPcp.js";import"./spin-CHi8PrTH.js";import"./error-DVsJjH4l.js";import"./withOsdkMetrics-Bai-2IUn.js";import"./makeExternalStore-DSiAtSgU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
