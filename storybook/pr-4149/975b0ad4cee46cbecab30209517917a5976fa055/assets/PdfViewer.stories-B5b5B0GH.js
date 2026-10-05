import{j as r,M as s}from"./iframe-S5f-tHYc.js";import{P as p}from"./pdf-viewer-Baxj4qPe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CdjgBDb4.js";import"./preload-helper-CloBdclc.js";import"./PdfViewer-CjbNk3fk.js";import"./index-BjvFrMm8.js";import"./BasePdfViewer-DzPk5eyV.js";import"./BasePdfViewer.module.css-DtPwnCgA.js";import"./PdfViewerAnnotationLayer-CFY_h1cl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aQVjugGk.js";import"./PdfViewerOutlineSidebar-Cq_Hvn9l.js";import"./PdfViewerSidebarHeader-DDLs5hzM.js";import"./useBaseUiId-BlrIsTLC.js";import"./useControlled-CL7wd5vL.js";import"./CompositeRoot-1zUIhBAj.js";import"./CompositeItem-Dg4eVuBQ.js";import"./ToolbarRootContext-DjBkFXc0.js";import"./composite-541HdLvk.js";import"./svgIconContainer-B4-msPtU.js";import"./PdfViewerSearchBar-Bvru7ofh.js";import"./chevron-up-Dkv65uMe.js";import"./chevron-down-Cgu3kTNg.js";import"./cross-CW1FGrOP.js";import"./PdfViewerSidebar-BxHLHjq0.js";import"./index--nob6yM3.js";import"./index-1qViAGfj.js";import"./index-Cnu8xOcy.js";import"./PdfViewerToolbar-DADL55Hj.js";import"./Button-FHTr9kOT.js";import"./chevron-right-DoulY_Cd.js";import"./Input-DxXCBH_8.js";import"./search-CIBDynw6.js";import"./spin-PsJ2ymyd.js";import"./error-Dr3zRmrC.js";import"./withOsdkMetrics-BbapYe7K.js";import"./makeExternalStore-DqL_g-L_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
