import{j as r,M as s}from"./iframe-Blz4LoHP.js";import{P as p}from"./pdf-viewer-HbE4zL5X.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2SmOWWy.js";import"./preload-helper-foE4JgZ2.js";import"./PdfViewer-CNAFCQPJ.js";import"./index-CUYER3DO.js";import"./BasePdfViewer-DQq-_7ni.js";import"./BasePdfViewer.module.css-BoKn6YDo.js";import"./PdfViewerAnnotationLayer-DaDyr1rU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ci1XfqRk.js";import"./PdfViewerOutlineSidebar-CMp8ocyM.js";import"./PdfViewerSidebarHeader-bc3yKITT.js";import"./useBaseUiId-UaklEsw9.js";import"./useControlled-CnlJbyLP.js";import"./CompositeRoot-C6iEzE2E.js";import"./CompositeItem-udJn1Dzr.js";import"./ToolbarRootContext-D4Igr_5K.js";import"./composite-CXEOluk-.js";import"./svgIconContainer-BuunOq3e.js";import"./PdfViewerSearchBar-D5Vxqmxp.js";import"./chevron-up-D1kKmbfG.js";import"./chevron-down-DcvlWZQj.js";import"./cross-BHEKJ-xu.js";import"./PdfViewerSidebar-DYCnf2_2.js";import"./index-CttXvCYf.js";import"./index-DpYCY6fP.js";import"./index-D8NTGdmQ.js";import"./PdfViewerToolbar-BfaZReTl.js";import"./Button-Cv_Vsur6.js";import"./chevron-right-DQ6jp7AB.js";import"./Input--2U01S_F.js";import"./search-CWcz5URn.js";import"./spin-DiAjHrlB.js";import"./error-B_nCzUte.js";import"./withOsdkMetrics-B_mvTTGH.js";import"./makeExternalStore-CAzuqfsN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
