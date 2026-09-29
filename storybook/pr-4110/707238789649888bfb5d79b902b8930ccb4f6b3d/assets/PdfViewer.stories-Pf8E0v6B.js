import{j as r,M as s}from"./iframe-BLyAG4qt.js";import{P as p}from"./pdf-viewer-CsAjxpr2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCsZliwR.js";import"./preload-helper-X2unNE1v.js";import"./PdfViewer-jL8GAjnd.js";import"./index-DRHjeWhY.js";import"./BasePdfViewer-C4vKj94n.js";import"./BasePdfViewer.module.css-Dv8j4mTl.js";import"./PdfViewerAnnotationLayer-D6sVObGV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Vtj35nIp.js";import"./PdfViewerOutlineSidebar-CAk8ykQ9.js";import"./PdfViewerSidebarHeader-DfhI3mXu.js";import"./useBaseUiId-BsqYTkrj.js";import"./useControlled-vEPHT0r_.js";import"./CompositeRoot-CvOAWP7c.js";import"./CompositeItem-DKNH-seI.js";import"./ToolbarRootContext-t3Sav1_0.js";import"./composite-DXp5HadG.js";import"./svgIconContainer-BYhpNXbV.js";import"./PdfViewerSearchBar-RTgB5Auc.js";import"./chevron-up-DarVkq9V.js";import"./chevron-down-Dl_PyCCQ.js";import"./cross-zpmkdN3j.js";import"./PdfViewerSidebar-CJE2wqvH.js";import"./index-D1BfEv3K.js";import"./index-DSTh4XEz.js";import"./index-DfIb261n.js";import"./PdfViewerToolbar-D1QTAqF_.js";import"./Button-C4LVX8xd.js";import"./chevron-right-C9oKwSRR.js";import"./Input-COYDi8CV.js";import"./search-BnzIM1pO.js";import"./spin-BqqJJ9k6.js";import"./error-CALDIyj0.js";import"./withOsdkMetrics-hrd9pp_O.js";import"./makeExternalStore-B6gSjutd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
