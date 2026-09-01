import{j as r,M as s}from"./iframe-BfbeS0O1.js";import{P as p}from"./pdf-viewer-CsytNjwr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KRJZFwIa.js";import"./preload-helper-BioSAIdn.js";import"./PdfViewer-BcoJAjNK.js";import"./index-DQRN7I9U.js";import"./BasePdfViewer-Dytj0o1l.js";import"./BasePdfViewer.module.css-D43nuuw9.js";import"./PdfViewerAnnotationLayer-C9clf4C5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tq94thaA.js";import"./PdfViewerOutlineSidebar-Dxn_8nUk.js";import"./PdfViewerSidebarHeader-EDd8zjTX.js";import"./useBaseUiId-CbE1yfdx.js";import"./useControlled-C81GKmVH.js";import"./CompositeRoot-oQC09qfH.js";import"./CompositeItem-B4opeUeS.js";import"./ToolbarRootContext-DbCqNaiP.js";import"./composite-DdfbaPUy.js";import"./svgIconContainer-BWTo31o2.js";import"./PdfViewerSearchBar-GDmNcCrq.js";import"./chevron-up-jnw8BszE.js";import"./chevron-down-CR0bt--Q.js";import"./cross-BrOuNhEK.js";import"./PdfViewerSidebar--8m_5pDv.js";import"./index-BgHNYcJW.js";import"./index-CXELN0N0.js";import"./index-Cj2nVCmE.js";import"./PdfViewerToolbar-DJBtGHUz.js";import"./Button-UB2OACG0.js";import"./chevron-right-DQstUy-A.js";import"./Input-Db7Q4YLm.js";import"./search-DrG1G0EY.js";import"./spin-BQ_unAqM.js";import"./error-unCo8sRO.js";import"./withOsdkMetrics-D7z9HYOb.js";import"./makeExternalStore-DN287DfU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
