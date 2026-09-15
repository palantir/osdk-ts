import{j as r,M as s}from"./iframe-CJIAHpsc.js";import{P as p}from"./pdf-viewer-DLE6GY82.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZGlSEej.js";import"./preload-helper-6cWemOcr.js";import"./PdfViewer-Bf_WlmiQ.js";import"./index-BzlqDAfw.js";import"./BasePdfViewer-7i1eqUNr.js";import"./BasePdfViewer.module.css-CWPK4Ev0.js";import"./PdfViewerAnnotationLayer-CwAwYLZw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAiAIo2U.js";import"./PdfViewerOutlineSidebar-uEDvj3cf.js";import"./PdfViewerSidebarHeader-pvGXi4aE.js";import"./useBaseUiId-DvojBwxI.js";import"./useControlled-OjeTa2_t.js";import"./CompositeRoot-DZHbEWwG.js";import"./CompositeItem-Czysbmcp.js";import"./ToolbarRootContext-CJh9ljWw.js";import"./composite-CFOr0BZu.js";import"./svgIconContainer-56SLvs0U.js";import"./PdfViewerSearchBar-gEc3ko7_.js";import"./chevron-up-lxYKkgE2.js";import"./chevron-down-TVEh7Z-q.js";import"./cross-D0IHJ6R4.js";import"./PdfViewerSidebar-BPk9KsOx.js";import"./index-D7-FHl4f.js";import"./index-DiBt9TUI.js";import"./index-BzXh_3LE.js";import"./PdfViewerToolbar-h8LbKKqe.js";import"./Button-B7ufGNzS.js";import"./chevron-right-DmFZAB4I.js";import"./Input-icqzcMB1.js";import"./search-Bfm8FcWQ.js";import"./spin-Cj3mTfO9.js";import"./error-D5dqG5sm.js";import"./withOsdkMetrics-mHYGalWz.js";import"./makeExternalStore-BCywNTfM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
