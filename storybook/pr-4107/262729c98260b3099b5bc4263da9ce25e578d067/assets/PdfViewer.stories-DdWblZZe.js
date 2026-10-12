import{j as r,M as s}from"./iframe-CXrJqDi7.js";import{P as p}from"./pdf-viewer-DXKnyYno.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZ61BGE9.js";import"./preload-helper-jkRaFgLU.js";import"./PdfViewer-Bj2Q_04k.js";import"./index-CIjDsdU0.js";import"./BasePdfViewer-B3UswZf4.js";import"./BasePdfViewer.module.css-CFPImY32.js";import"./PdfViewerAnnotationLayer-CY9ZD141.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjIgoCOH.js";import"./PdfViewerOutlineSidebar-CLoJ3Lfm.js";import"./PdfViewerSidebarHeader-CPRJT_z9.js";import"./useBaseUiId-DRTWV3IQ.js";import"./useControlled-BrDZ81ve.js";import"./CompositeRoot-BrsESzgy.js";import"./CompositeItem-CyZPBPBK.js";import"./ToolbarRootContext-Dha7jpb4.js";import"./composite-BIMYEycB.js";import"./svgIconContainer-BzSV1llx.js";import"./PdfViewerSearchBar-hWMpo_GV.js";import"./chevron-up-jgcO2esY.js";import"./chevron-down-vVCEooOb.js";import"./cross-BukSyOKz.js";import"./PdfViewerSidebar-DNlyxjDO.js";import"./index-WbZsn1IX.js";import"./index-rAYh6pbi.js";import"./index-CUgOIZQ8.js";import"./PdfViewerToolbar-DWqbuXlv.js";import"./Button-BnGcPvMs.js";import"./chevron-right-92U_yXkN.js";import"./Input-CvxpQ6Xp.js";import"./search-Dyn6N2H3.js";import"./spin-BN6Bc9G7.js";import"./error-bx5NADv9.js";import"./withOsdkMetrics-Dl4aNlWl.js";import"./makeExternalStore-Bxt_lPGm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
