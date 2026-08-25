import{j as r,M as s}from"./iframe-DJmldxve.js";import{P as p}from"./pdf-viewer-C8abMOyl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQETyT-t.js";import"./preload-helper-CfPw7BaZ.js";import"./PdfViewer-DLWdZfxV.js";import"./index-DD-0dH-p.js";import"./BasePdfViewer-qghxGNdM.js";import"./BasePdfViewer.module.css-CiIqfKxL.js";import"./PdfViewerAnnotationLayer-2cHQRAEY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BL2Q5vnj.js";import"./PdfViewerOutlineSidebar-uyrE1UER.js";import"./PdfViewerSidebarHeader-Bagv0-mo.js";import"./useBaseUiId-B4pZBY6q.js";import"./useControlled-CkquFaFo.js";import"./CompositeRoot-C_UmrOn4.js";import"./CompositeItem-DHs6pqwB.js";import"./ToolbarRootContext-QKXaQ_-N.js";import"./composite-CSkjak5h.js";import"./svgIconContainer-P7eEWIUa.js";import"./PdfViewerSearchBar-B_IqRnpL.js";import"./chevron-up-BG522Ana.js";import"./chevron-down-FLohmcIo.js";import"./cross-DmQC9xrL.js";import"./PdfViewerSidebar-DOsiGan9.js";import"./index-CNroXRNE.js";import"./index-lnBxI4J8.js";import"./index-BGy7kKJa.js";import"./PdfViewerToolbar-CreA9YQZ.js";import"./Button-DseRSSUk.js";import"./chevron-right-DzFyPBjE.js";import"./Input-DVHmkR4v.js";import"./search-BDoaiW25.js";import"./spin-DgSSo9lG.js";import"./error-7UB6xqMv.js";import"./withOsdkMetrics-ChD8F_9J.js";import"./makeExternalStore-D_byBCsj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
