import{j as r,M as s}from"./iframe-6Uhngy72.js";import{P as p}from"./pdf-viewer-Cik_isPY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-38_FzYTN.js";import"./preload-helper-BuO-Wqte.js";import"./PdfViewer-D5voB55f.js";import"./index-D6AVV8eE.js";import"./BasePdfViewer-BoOuPy0d.js";import"./BasePdfViewer.module.css-BfuerVBB.js";import"./PdfViewerAnnotationLayer-BOp0Dalo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BP-sIZBz.js";import"./PdfViewerOutlineSidebar-DPbrHr86.js";import"./PdfViewerSidebarHeader-BmSwO-5u.js";import"./useBaseUiId-BRxptNv-.js";import"./useControlled-DIt55qQJ.js";import"./CompositeRoot-CAMjJwFV.js";import"./CompositeItem-DLH8bcOo.js";import"./ToolbarRootContext-fpBVACf_.js";import"./composite-DJDJ56jv.js";import"./svgIconContainer-UGK0c4xl.js";import"./PdfViewerSearchBar-DV1Mk4Bk.js";import"./chevron-up-h53erNYl.js";import"./chevron-down-BwrGawkK.js";import"./cross-BcSy3qdU.js";import"./PdfViewerSidebar-qQ9icJVY.js";import"./index-CsXiYC9Y.js";import"./index-LZISWei8.js";import"./index-QHeoXjyH.js";import"./PdfViewerToolbar-BP7fKvOU.js";import"./Button-DCQ8ovOH.js";import"./chevron-right-DBlaICAf.js";import"./Input-CofwDVZ0.js";import"./search-BdfvUgnd.js";import"./spin-B6rTKDIk.js";import"./error-CxRJmZZd.js";import"./withOsdkMetrics-Ca-0BTyV.js";import"./makeExternalStore-BQsPVGuf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
