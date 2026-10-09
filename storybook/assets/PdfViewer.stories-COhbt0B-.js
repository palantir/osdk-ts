import{j as r,M as s}from"./iframe-C6yB_OA9.js";import{P as p}from"./pdf-viewer-PL0P8JJ1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_YA4xYB.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BGiAkE3L.js";import"./index-CYHovncI.js";import"./BasePdfViewer-DAOoMvaj.js";import"./BasePdfViewer.module.css-CyiKXLen.js";import"./PdfViewerAnnotationLayer-CsA-OX1h.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxFtcO9g.js";import"./PdfViewerOutlineSidebar-CJM4xuZH.js";import"./PdfViewerSidebarHeader-Z1u3P_Kk.js";import"./useBaseUiId-rM_6hxp0.js";import"./useControlled-De9a2DUs.js";import"./CompositeRoot-BFdfrHiw.js";import"./CompositeItem-BhFX388v.js";import"./ToolbarRootContext-l_NHV493.js";import"./composite-pSUWUpBY.js";import"./svgIconContainer-BHMXavE6.js";import"./PdfViewerSearchBar-CS2bA-RJ.js";import"./chevron-up-CS1XVqDu.js";import"./chevron-down-DYrrqtdW.js";import"./cross-CGEn_f8Q.js";import"./PdfViewerSidebar-COls62vL.js";import"./index-BjeOkhvx.js";import"./index-CrGhjRoP.js";import"./index-CtIX1NAw.js";import"./PdfViewerToolbar-C6Asek-a.js";import"./Button-fD8qjLcS.js";import"./chevron-right-DAuXO9r6.js";import"./Input-Cq3PGtjU.js";import"./search-Cs6gheVK.js";import"./spin-CAMVg4iD.js";import"./error-DvPL7YDk.js";import"./withOsdkMetrics-CC4rYMg2.js";import"./makeExternalStore-BcRZCs8p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
