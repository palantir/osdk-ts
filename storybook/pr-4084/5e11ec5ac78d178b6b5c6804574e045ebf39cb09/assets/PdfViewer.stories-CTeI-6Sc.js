import{j as r,M as s}from"./iframe-BiX95vgM.js";import{P as p}from"./pdf-viewer-CgquGezY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-8NgtK-kL.js";import"./preload-helper-DWnaR-1b.js";import"./PdfViewer-CLg20VSk.js";import"./index-BabfefxA.js";import"./BasePdfViewer-DHfcoEeM.js";import"./BasePdfViewer.module.css-B0V-E_2B.js";import"./PdfViewerAnnotationLayer-DsWEETbU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-XOw3o6Nw.js";import"./PdfViewerOutlineSidebar-Xwo7WJ6r.js";import"./PdfViewerSidebarHeader-ZqQUklIX.js";import"./useBaseUiId-CQekfIk1.js";import"./useControlled-B0weLlnb.js";import"./CompositeRoot-DcC2iSzI.js";import"./CompositeItem-BFJIxEVd.js";import"./ToolbarRootContext-DqKQJUCi.js";import"./composite-KUIWn9JP.js";import"./svgIconContainer-BCrh5jbf.js";import"./PdfViewerSearchBar-Dq_jLxKl.js";import"./chevron-up-jWVpiCtu.js";import"./chevron-down-Qcf4cgke.js";import"./cross-C7wa8kmV.js";import"./PdfViewerSidebar-D8CXNyTt.js";import"./index-BdjoCnA2.js";import"./index-CqOEHXIi.js";import"./index-DsTIq2po.js";import"./PdfViewerToolbar-DKIfuah9.js";import"./Button-DbzWoDvM.js";import"./chevron-right-BKnFzVUG.js";import"./Input-mW8oBDz9.js";import"./search-BRep0j7S.js";import"./spin-C9QpIRhW.js";import"./error-Bo4C15lT.js";import"./withOsdkMetrics-Bu7X3_wp.js";import"./makeExternalStore-BiSG9WI-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
