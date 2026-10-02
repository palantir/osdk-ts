import{j as r,M as s}from"./iframe-CBBfontH.js";import{P as p}from"./pdf-viewer-hRJo2Cxw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdAhXRNx.js";import"./preload-helper-C9XLNiex.js";import"./PdfViewer-CbgRp4Ve.js";import"./index-BK79uKA4.js";import"./BasePdfViewer-DqA2W7uq.js";import"./BasePdfViewer.module.css-nT8jqKd1.js";import"./PdfViewerAnnotationLayer-CInTpFta.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EDsLvS7k.js";import"./PdfViewerOutlineSidebar-DX7KcZBD.js";import"./PdfViewerSidebarHeader-BcbP8tWv.js";import"./useBaseUiId-D3hM4v_U.js";import"./useControlled-DaI-bqFd.js";import"./CompositeRoot-BcmeOzZk.js";import"./CompositeItem-DvZr4Fnk.js";import"./ToolbarRootContext-DlEp5yGp.js";import"./composite-B8aA5vzU.js";import"./svgIconContainer-DticknVs.js";import"./PdfViewerSearchBar-C26r2VP3.js";import"./chevron-up-C7T5rmza.js";import"./chevron-down-BeGAiI5e.js";import"./cross-FHMV1Mb9.js";import"./PdfViewerSidebar-9T2aNDQS.js";import"./index-Ddgk7NGU.js";import"./index-C2T6QgIM.js";import"./index-CD1w3ijm.js";import"./PdfViewerToolbar-Dr8q_ahy.js";import"./Button-BzMH9WPr.js";import"./chevron-right-DIcb4XZ6.js";import"./Input-CnWoOgAt.js";import"./search-l34gwdLO.js";import"./spin-CVmjNPK4.js";import"./error-BFkl_rh_.js";import"./withOsdkMetrics-vNqbOsIn.js";import"./makeExternalStore-D8kr4lHx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
