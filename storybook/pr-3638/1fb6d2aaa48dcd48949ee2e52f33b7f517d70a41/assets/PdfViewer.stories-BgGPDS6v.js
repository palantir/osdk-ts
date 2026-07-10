import{j as r,M as s}from"./iframe-CyxSYkSk.js";import{P as p}from"./pdf-viewer-BFsUMyUj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-qTTpTqAi.js";import"./preload-helper-DBpszJXl.js";import"./PdfRenderer-lW4cRLyP.js";import"./index-0yOzlcUJ.js";import"./PdfViewer-F9PDmHh3.js";import"./PdfViewer.module.css-BJ0hSJiO.js";import"./PdfViewerAnnotationLayer-DHotv2Ry.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B49Cwq6w.js";import"./PdfViewerOutlineSidebar-hxyudYxw.js";import"./PdfViewerSidebarHeader-CMW3ZuEw.js";import"./useBaseUiId-bn-y7br3.js";import"./useControlled-C88ZdskF.js";import"./CompositeRoot-COX4Ns_2.js";import"./CompositeItem-v_3aPTjT.js";import"./ToolbarRootContext-C6YIsUhu.js";import"./composite-enLB4Ka2.js";import"./svgIconContainer-C7MqzwhO.js";import"./PdfViewerSearchBar-D0QhFBnF.js";import"./chevron-up-OrAJiafz.js";import"./chevron-down-ljdNq6bJ.js";import"./cross-j4qUAPs7.js";import"./PdfViewerSidebar-BK0-g9PT.js";import"./index-BuQG7SNg.js";import"./index-DII4TUgV.js";import"./index-C2GlS_zI.js";import"./PdfViewerToolbar-DkH8m7wP.js";import"./Button-w8fSFCzy.js";import"./chevron-right-BJshRFAI.js";import"./Input-DUGKsc-x.js";import"./search-BE1YWkMj.js";import"./spin-C9hkFmde.js";import"./error-BlqOe69A.js";import"./withOsdkMetrics-Duy0EoDC.js";import"./makeExternalStore-BcXeLiDJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
