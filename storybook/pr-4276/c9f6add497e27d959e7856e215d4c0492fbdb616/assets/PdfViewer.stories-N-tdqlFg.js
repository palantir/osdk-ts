import{j as r,M as s}from"./iframe-C26fIjAq.js";import{P as p}from"./pdf-viewer-B87NVAUC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRiGLLC3.js";import"./preload-helper-CzokokTz.js";import"./PdfViewer-Lj_SzPAR.js";import"./index-DSezQFnS.js";import"./BasePdfViewer-44S8Pw1c.js";import"./BasePdfViewer.module.css-uYoTdaMh.js";import"./PdfViewerAnnotationLayer-MM5Dfbkd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CkbmAaDc.js";import"./PdfViewerOutlineSidebar-CebefsEr.js";import"./PdfViewerSidebarHeader-BakIM50d.js";import"./useBaseUiId-CZznSoWJ.js";import"./useControlled-C5NYvmTr.js";import"./CompositeRoot-dUgm-VLk.js";import"./CompositeItem-Upla8dz7.js";import"./ToolbarRootContext-BQbj6f0-.js";import"./composite-B7Vf-7yN.js";import"./svgIconContainer-CKLh70Ds.js";import"./PdfViewerSearchBar-B4sDX0vX.js";import"./chevron-up-FxqG3Beq.js";import"./chevron-down-jqoCvdNC.js";import"./cross-DwdPD-y-.js";import"./PdfViewerSidebar-n2d1PejO.js";import"./index-BF0VER8K.js";import"./index-DKSyNOS5.js";import"./index-CvCOxJEM.js";import"./PdfViewerToolbar-BhxPHsuV.js";import"./Button-DUEO4ppB.js";import"./chevron-right-o3m1jWzE.js";import"./Input-CWfYIH6c.js";import"./search-CILTwpty.js";import"./spin-BkdTsQA8.js";import"./error-W1WiOcUb.js";import"./withOsdkMetrics-DlZr1eO5.js";import"./makeExternalStore-BbYA9c-K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
