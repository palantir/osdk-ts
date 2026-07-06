import{j as r,M as s}from"./iframe-CrStxEBt.js";import{P as p}from"./pdf-viewer-BEwmLiOb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DU3dUEQ6.js";import"./preload-helper-OXivx5LR.js";import"./PdfRenderer-Ci_704oY.js";import"./index-BLl2iDe8.js";import"./PdfViewer-K8pzHu_h.js";import"./PdfViewer.module.css-C6fClANl.js";import"./PdfViewerAnnotationLayer-yvKxRgWQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CK3P6M2F.js";import"./PdfViewerOutlineSidebar-Cei_0loU.js";import"./PdfViewerSidebarHeader-CCW55q1J.js";import"./useBaseUiId-CogM71FT.js";import"./useControlled-CSKZxUDn.js";import"./CompositeRoot-B3UTdVP7.js";import"./CompositeItem-JYp2rF_I.js";import"./ToolbarRootContext-EXBGAu9_.js";import"./composite--6YdIqZR.js";import"./svgIconContainer-j1fWGKcX.js";import"./PdfViewerSearchBar-CKssZgjC.js";import"./chevron-up-DexdmXNm.js";import"./chevron-down-B1SYYrKy.js";import"./cross-DyLZ40Fh.js";import"./PdfViewerSidebar-8Hp9gkk2.js";import"./index-BLZClbzk.js";import"./index-BNPoFAe0.js";import"./index-CBFzq2qH.js";import"./PdfViewerToolbar-CJxIPtan.js";import"./Button-BeQDA-Bv.js";import"./chevron-right-8IDzWccT.js";import"./Input-DmUxztOr.js";import"./search-CxSWgc2D.js";import"./spin-DZIolQL6.js";import"./error-BmWTvM3v.js";import"./withOsdkMetrics-D0-v26p3.js";import"./makeExternalStore-OHO3xlfT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
