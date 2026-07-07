import{j as r,M as s}from"./iframe-XEuGnsRt.js";import{P as p}from"./pdf-viewer-UEqm1I3B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DevZ9uXW.js";import"./preload-helper-C3LA7DjD.js";import"./PdfRenderer-B_9GAblO.js";import"./index-hoYFZTEU.js";import"./PdfViewer-CmeAH9SB.js";import"./PdfViewer.module.css-CeozCg7V.js";import"./PdfViewerAnnotationLayer-CSS8eV3Q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1F7TZFr.js";import"./PdfViewerOutlineSidebar-CGGNxPfc.js";import"./PdfViewerSidebarHeader-CqlJy1Dt.js";import"./useBaseUiId-mCdtl4Rh.js";import"./useControlled-Ckobll8s.js";import"./CompositeRoot-BNtBCbAz.js";import"./CompositeItem-B3HgSfnx.js";import"./ToolbarRootContext-DFElDt9z.js";import"./composite-C7wKqsc5.js";import"./svgIconContainer-Cb0RQGHu.js";import"./PdfViewerSearchBar-BvLioL0A.js";import"./chevron-up-DCqqSruL.js";import"./chevron-down-D0a4uQjN.js";import"./cross-BkPJ4PVY.js";import"./PdfViewerSidebar-BLp1bCv-.js";import"./index-BJHmMD-z.js";import"./index-5B18EPoI.js";import"./index-Bm5H1-Zc.js";import"./PdfViewerToolbar-BFKbG4L0.js";import"./Button-U91LUJU5.js";import"./chevron-right-Cjmnin7X.js";import"./Input-BhE5wDoN.js";import"./search-DrYL0jYv.js";import"./spin-lnJGzKuv.js";import"./error-cdNJDk16.js";import"./withOsdkMetrics-BM-nqYzx.js";import"./makeExternalStore-J5wtFKEn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
