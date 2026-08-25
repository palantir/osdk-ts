import{j as r,M as s}from"./iframe-B0SOl9ZV.js";import{P as p}from"./pdf-viewer-LMbcPooT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DTy-Ev-K.js";import"./preload-helper-BHPAddH5.js";import"./PdfViewer-DrJM7S-K.js";import"./index-BiNVgaeG.js";import"./BasePdfViewer-C_Leevyq.js";import"./BasePdfViewer.module.css-C3ysZQeZ.js";import"./PdfViewerAnnotationLayer-CeKChPDQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cgwj0HtM.js";import"./PdfViewerOutlineSidebar-C0r7NUA9.js";import"./PdfViewerSidebarHeader-CloR5kY2.js";import"./useBaseUiId-Cljp77-Q.js";import"./useControlled-uGEWPr36.js";import"./CompositeRoot-CkbSC9PA.js";import"./CompositeItem-CbcwFtua.js";import"./ToolbarRootContext-BztT65HJ.js";import"./composite-Bi62CtsD.js";import"./svgIconContainer-C62ArtWi.js";import"./PdfViewerSearchBar-BrMMur8T.js";import"./chevron-up-DcXwJgGS.js";import"./chevron-down-DeS6ZUJh.js";import"./cross-EbYogpml.js";import"./PdfViewerSidebar-osdxZ7G1.js";import"./index-BZ0ka-wa.js";import"./index-DhnWwm5N.js";import"./index-s1ThTeww.js";import"./PdfViewerToolbar-CAALprVF.js";import"./Button-D1fyFKQB.js";import"./chevron-right-Cz5-MhZn.js";import"./Input-xkP_-geA.js";import"./search-BOXs6zTK.js";import"./spin-DdSQZhcS.js";import"./error-B-XxEkbd.js";import"./withOsdkMetrics-DL2t3tni.js";import"./makeExternalStore-BI9SKXsC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
