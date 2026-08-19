import{j as r,M as s}from"./iframe-6GPNG9Xi.js";import{P as p}from"./pdf-viewer-DDLw73-K.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJyw_Dvm.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-hVqlDKDE.js";import"./index-BLLT78dd.js";import"./BasePdfViewer-Dz3HT0Dv.js";import"./BasePdfViewer.module.css-QGwGorfO.js";import"./PdfViewerAnnotationLayer-Dtx5r-EE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-JV-jJcMG.js";import"./PdfViewerOutlineSidebar-CIkKCgfY.js";import"./PdfViewerSidebarHeader-CswzbKTq.js";import"./useBaseUiId-N7eZ68O9.js";import"./useControlled-DGTBEOub.js";import"./CompositeRoot-DhcrqFvT.js";import"./CompositeItem-BOpE1HX7.js";import"./ToolbarRootContext-qHXZhovw.js";import"./composite-BYxN19ZW.js";import"./svgIconContainer-BdQnszdm.js";import"./PdfViewerSearchBar-17ffZy9V.js";import"./chevron-up-BE8XyiRL.js";import"./chevron-down-Dnhw5Ae_.js";import"./cross-CDqWfoJU.js";import"./PdfViewerSidebar-CbJ7ie-o.js";import"./index-DXeIJDVP.js";import"./index-DZlFhs1y.js";import"./index-BHQMMX4F.js";import"./PdfViewerToolbar-DYWhwcl4.js";import"./Button-vhjBY76J.js";import"./chevron-right-DILHtkjA.js";import"./Input-DQenBszh.js";import"./search-BbrW5BKI.js";import"./spin-BwCruDoN.js";import"./error-DBj4FgTN.js";import"./withOsdkMetrics-DeEkmlIV.js";import"./makeExternalStore-BTPDRRuj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
