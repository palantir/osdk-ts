import{j as r,M as s}from"./iframe-ClFIQ8KG.js";import{P as p}from"./pdf-viewer-jUMfj9JJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ZOoqB0BK.js";import"./preload-helper-D-QzYjnt.js";import"./PdfViewer-D6LOcOPx.js";import"./index-CIPksERX.js";import"./BasePdfViewer-B8Grm4-2.js";import"./BasePdfViewer.module.css-DdMEisAE.js";import"./PdfViewerAnnotationLayer-CWASOQ1W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CG1wWThv.js";import"./PdfViewerOutlineSidebar-Bhu7fgoA.js";import"./PdfViewerSidebarHeader-rXlH_Prp.js";import"./useBaseUiId-CGYdOYHy.js";import"./useControlled-DqI9i7cj.js";import"./CompositeRoot-Cy3KuuX5.js";import"./CompositeItem-Gl89whZy.js";import"./ToolbarRootContext-BD2PZEZ6.js";import"./composite-CYuFvp7L.js";import"./svgIconContainer-BSoQXT4y.js";import"./PdfViewerSearchBar-Bc3sZAus.js";import"./chevron-up-C3X4aa8T.js";import"./chevron-down-DJiIS0J4.js";import"./cross-CzpL54rX.js";import"./PdfViewerSidebar-Dp84XzIv.js";import"./index-CRZWfRoV.js";import"./index-D6fn_S1P.js";import"./index-CcH0wkbM.js";import"./PdfViewerToolbar-Dtl30yD1.js";import"./Button-BMUicVal.js";import"./chevron-right-Cfv_LgHJ.js";import"./Input-DZLAYudG.js";import"./search-D9qR5ESv.js";import"./spin-HhGRcxlU.js";import"./error-CA8gNZpF.js";import"./withOsdkMetrics-of3GBGS8.js";import"./makeExternalStore-CxxiTsbi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
