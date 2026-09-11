import{j as r,M as s}from"./iframe-DUUN6t7i.js";import{P as p}from"./pdf-viewer-8OHKf591.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bu4Z9l60.js";import"./preload-helper-BzY2PQK8.js";import"./PdfViewer-DfDRM6ww.js";import"./index-CllJbB6n.js";import"./BasePdfViewer-CRAthBUj.js";import"./BasePdfViewer.module.css-gcSqd6YA.js";import"./PdfViewerAnnotationLayer-5HjJ7Efj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3HxhJGGS.js";import"./PdfViewerOutlineSidebar-Cm6TbdeR.js";import"./PdfViewerSidebarHeader-BDy1lSXI.js";import"./useBaseUiId-DD-rnAgn.js";import"./useControlled-OksHndqL.js";import"./CompositeRoot-Ce_1Mdri.js";import"./CompositeItem-C7oLwUzE.js";import"./ToolbarRootContext-sOFoFOUi.js";import"./composite-DXLhbd5q.js";import"./svgIconContainer-BiEJIKWJ.js";import"./PdfViewerSearchBar-C2lGk54P.js";import"./chevron-up-D1sI8car.js";import"./chevron-down-9ao4cWz0.js";import"./cross-BL0CmC8v.js";import"./PdfViewerSidebar-CxDlnkBl.js";import"./index-JYM0ZjgP.js";import"./index-CF3EfJQa.js";import"./index-Cyo2_RId.js";import"./PdfViewerToolbar-D4Jw9DG1.js";import"./Button-BiBj2Ngy.js";import"./chevron-right-B59ylihC.js";import"./Input-eja5fv_S.js";import"./search-BOFS1DOk.js";import"./spin-CpRoTHEb.js";import"./error-Btl2ABt3.js";import"./withOsdkMetrics-YnroKoAT.js";import"./makeExternalStore-DSCive7G.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
