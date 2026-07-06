import{j as r,M as s}from"./iframe-CdnHJWer.js";import{P as p}from"./pdf-viewer-kVYq-VXi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bmu3QQcg.js";import"./preload-helper-ClUQoThJ.js";import"./PdfRenderer-CQJxXvdP.js";import"./index-Bq9iVrmx.js";import"./PdfViewer-hzWhw0pR.js";import"./PdfViewer.module.css-7sPoP8eV.js";import"./PdfViewerAnnotationLayer-xqKyA0X6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B72f-ogy.js";import"./PdfViewerOutlineSidebar-Cpc98bVb.js";import"./PdfViewerSidebarHeader-fclWeb2j.js";import"./useBaseUiId-9ZzKGsol.js";import"./useControlled-B3ZkmSp1.js";import"./CompositeRoot-DjrR4p0G.js";import"./CompositeItem-CYgwlLcn.js";import"./ToolbarRootContext-CenhvMdl.js";import"./composite-CQ1NeEFq.js";import"./svgIconContainer-vwky4czQ.js";import"./PdfViewerSearchBar-CGWu60Hy.js";import"./chevron-up-DvXy86G1.js";import"./chevron-down-tyE7l5KP.js";import"./cross-B5TZda8d.js";import"./PdfViewerSidebar-Cfl9YFk8.js";import"./index-Bg9QG2A-.js";import"./index-Cpfc7j_U.js";import"./index-Dssl8RWO.js";import"./PdfViewerToolbar-DumxihE-.js";import"./Button-D9MNrTFP.js";import"./chevron-right-RNxHsIGV.js";import"./Input-CrgSAbkC.js";import"./search-CXJcZwyL.js";import"./spin-Il9ekAEa.js";import"./error-C5LE5DkW.js";import"./withOsdkMetrics-DwBEnLue.js";import"./makeExternalStore-Ck39SXta.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
