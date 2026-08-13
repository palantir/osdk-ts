import{j as r,M as s}from"./iframe-B8OEhgWY.js";import{P as p}from"./pdf-viewer-y4NPPpfC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdBNG0HN.js";import"./preload-helper-ByWlNfie.js";import"./PdfViewer-CW4RqScR.js";import"./index-DFDa3HCE.js";import"./BasePdfViewer-CHCDGNMU.js";import"./BasePdfViewer.module.css-74hwa8e6.js";import"./PdfViewerAnnotationLayer-iIN58ZrQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ck7Y-QpN.js";import"./PdfViewerOutlineSidebar-8Owq1S6T.js";import"./PdfViewerSidebarHeader-BfrnjTik.js";import"./useBaseUiId--A2TBCqG.js";import"./useControlled-EzFF0Sep.js";import"./CompositeRoot-BsR-el93.js";import"./CompositeItem-CpHqNhbJ.js";import"./ToolbarRootContext-BwylGkXM.js";import"./composite-CW87OmHg.js";import"./svgIconContainer-RSMqo_RJ.js";import"./PdfViewerSearchBar-DAR8Ofqb.js";import"./chevron-up-DrsuPy9q.js";import"./chevron-down-CTrU3kVW.js";import"./cross-B7JEOmUk.js";import"./PdfViewerSidebar-Ca_isimH.js";import"./index-BWmpo11p.js";import"./index-IXwruU6G.js";import"./index-CjJR_vEs.js";import"./PdfViewerToolbar--SqoWItF.js";import"./Button-D8jsB0ym.js";import"./chevron-right-fpBzu-Tr.js";import"./Input-DDY-S42g.js";import"./search-Bm_NlUyw.js";import"./spin-YRSRVZwj.js";import"./error-dwUY3hfK.js";import"./withOsdkMetrics-CWt0J4jT.js";import"./makeExternalStore-Ce0vXOLT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
