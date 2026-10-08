import{j as r,M as s}from"./iframe-BgM5ILJD.js";import{P as p}from"./pdf-viewer-B4GWAp1G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BHg8zmU3.js";import"./preload-helper-D1sAdP5a.js";import"./PdfViewer-DABFA7Er.js";import"./index-ah8Na9h1.js";import"./BasePdfViewer-CaD1Ctf6.js";import"./BasePdfViewer.module.css-DtioMNOT.js";import"./PdfViewerAnnotationLayer-CfInodrE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QUSbF5iV.js";import"./PdfViewerOutlineSidebar-BK-R0357.js";import"./PdfViewerSidebarHeader-pUQCTm7P.js";import"./useBaseUiId-CzAuSX_4.js";import"./useControlled-COnm-wVi.js";import"./CompositeRoot-UzRD7iZ2.js";import"./CompositeItem-B6xGoOu0.js";import"./ToolbarRootContext-CjwaP5zw.js";import"./composite-BS7dFqvY.js";import"./svgIconContainer-De6gxcHK.js";import"./PdfViewerSearchBar-0ESm-dtD.js";import"./chevron-up-BmD_0m4w.js";import"./chevron-down-D1QYpBiI.js";import"./cross-B5mOqZwT.js";import"./PdfViewerSidebar-DmCYHM7W.js";import"./index-DturTZ53.js";import"./index-DAXSmbbp.js";import"./index-YnWjipca.js";import"./PdfViewerToolbar-DYDEUrrW.js";import"./Button-KrMtAmhv.js";import"./chevron-right-BgpPP4te.js";import"./Input-DL79KIMl.js";import"./search-C2iFy_Yx.js";import"./spin-V1gE7odc.js";import"./error-BFuWQWXY.js";import"./withOsdkMetrics-DYzG-urA.js";import"./makeExternalStore-CkeVFEY-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
