import{j as r,M as s}from"./iframe-DfZokpto.js";import{P as p}from"./pdf-viewer-CsnZQAA9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXk-0x7S.js";import"./preload-helper-C2M6ZLWS.js";import"./PdfRenderer-BMzp3U-w.js";import"./index-CZdez1wS.js";import"./PdfViewer-C8de3k9L.js";import"./PdfViewer.module.css-fGjByUg-.js";import"./PdfViewerAnnotationLayer-BatzGZuF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-d3QvPLYg.js";import"./PdfViewerOutlineSidebar-BrXhRsD6.js";import"./PdfViewerSidebarHeader-DvUBF8Ul.js";import"./useBaseUiId-Di0vZy3F.js";import"./useControlled-CXS_gvTL.js";import"./CompositeRoot-x-Gi6uLn.js";import"./CompositeItem-Ct4hC_ue.js";import"./ToolbarRootContext-wfEc9w32.js";import"./composite-Cy57pfRY.js";import"./svgIconContainer-B-LBMc7s.js";import"./PdfViewerSearchBar-CjKr92jy.js";import"./chevron-up-jlnI5mJW.js";import"./chevron-down-vYjuLkiO.js";import"./cross-C5IIgdv9.js";import"./PdfViewerSidebar-D6NKaQ6-.js";import"./index-NjWXFk_F.js";import"./index-DNtNwFHE.js";import"./index-Cs-W3rSL.js";import"./PdfViewerToolbar-DqPoGZeF.js";import"./Button-Dg1lZxDi.js";import"./chevron-right-R9IMxuQJ.js";import"./Input-CpR273dJ.js";import"./search-Dujdc83W.js";import"./spin-DUjC8ASY.js";import"./error-B8p3BRu-.js";import"./withOsdkMetrics-BtNgh2_s.js";import"./makeExternalStore-CgQtrX57.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
