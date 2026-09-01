import{j as r,M as s}from"./iframe-D_WpdUHL.js";import{P as p}from"./pdf-viewer-G9ClSVgz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-OJ6zvUYV.js";import"./preload-helper-BfbLhjw5.js";import"./PdfViewer-BSJlllRG.js";import"./index-CZE7Riyb.js";import"./BasePdfViewer-H22sFhhY.js";import"./BasePdfViewer.module.css-Ce6prhTT.js";import"./PdfViewerAnnotationLayer-iL8taQxg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ezT1vtwW.js";import"./PdfViewerOutlineSidebar-BoICP-sv.js";import"./PdfViewerSidebarHeader-CnyykJPc.js";import"./useBaseUiId-CTUJE0Sx.js";import"./useControlled-Mrcysr82.js";import"./CompositeRoot-BRiztC96.js";import"./CompositeItem-515r1Apy.js";import"./ToolbarRootContext-DsstPgFG.js";import"./composite-CC5HrOOE.js";import"./svgIconContainer-CBQMj0qb.js";import"./PdfViewerSearchBar-nl6vIDM-.js";import"./chevron-up-C74Bue8P.js";import"./chevron-down-CDMlXncd.js";import"./cross-CvDy6iFc.js";import"./PdfViewerSidebar-ByB9Zsra.js";import"./index-aaeJHi0G.js";import"./index-BmV5pGaZ.js";import"./index-CvQQbIo-.js";import"./PdfViewerToolbar-BQZjAWWQ.js";import"./Button-DJB9EV9F.js";import"./chevron-right-DjIa-y6w.js";import"./Input-DIOuBl2R.js";import"./search-N03HR__x.js";import"./spin-Bfc07pX2.js";import"./error-DK46kd3k.js";import"./withOsdkMetrics-ICzHztvp.js";import"./makeExternalStore-DRPBrMWd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
