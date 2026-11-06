import{j as r,M as s}from"./iframe-BTbJEw_E.js";import{P as p}from"./pdf-viewer-BbWpihy5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQyNgtAG.js";import"./preload-helper-aCGplSKY.js";import"./PdfViewer-DCfid3u0.js";import"./index-DWkrnykr.js";import"./BasePdfViewer-PsWRIYZg.js";import"./BasePdfViewer.module.css-CffQ9PkK.js";import"./PdfViewerAnnotationLayer-D6aZ_q4u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dqyr-Ede.js";import"./PdfViewerOutlineSidebar-C-AiPmZw.js";import"./PdfViewerSidebarHeader-Dvnng78G.js";import"./useBaseUiId-lBVa_0WJ.js";import"./useControlled-B9izrDgZ.js";import"./CompositeRoot-BWaybkeT.js";import"./CompositeItem-BnF_A8n_.js";import"./ToolbarRootContext-BJqUIRif.js";import"./composite-B7RMGscZ.js";import"./svgIconContainer-DggOleom.js";import"./PdfViewerSearchBar-CoLpdtT7.js";import"./chevron-up-DB-4H1xK.js";import"./chevron-down-CXkrXU2j.js";import"./cross-AwvJd_Ud.js";import"./PdfViewerSidebar-DMFRuNUg.js";import"./index-YcO7uA7L.js";import"./index-DdrvFQuO.js";import"./index-18NAXc1Y.js";import"./PdfViewerToolbar-BFuQru3L.js";import"./Button-vTo8rp-4.js";import"./chevron-right-DxIMHSX2.js";import"./Input-C3RqpoyV.js";import"./search-DBgBL-mB.js";import"./spin-BFhbtBC2.js";import"./error-wWqS_WOM.js";import"./withOsdkMetrics-eBRijj-i.js";import"./makeExternalStore-Cj_xL18b.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
