import{j as r,M as s}from"./iframe-A_fOpVjR.js";import{P as p}from"./pdf-viewer-CNrxwS_1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DDj7Fy3O.js";import"./preload-helper-NNWOvscG.js";import"./PdfViewer-BugvB3q4.js";import"./index-C7FsEBhG.js";import"./BasePdfViewer-DV4PmVyZ.js";import"./BasePdfViewer.module.css-DW_43y1b.js";import"./PdfViewerAnnotationLayer-YZANLZbR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BRoCHyFa.js";import"./PdfViewerOutlineSidebar-CujzbsEV.js";import"./PdfViewerSidebarHeader-BCviZvil.js";import"./useBaseUiId-C7m94P3Q.js";import"./useControlled-C2rTfK3U.js";import"./CompositeRoot-D1ENIokx.js";import"./CompositeItem-CZZ_uEuP.js";import"./ToolbarRootContext-DqquyoSz.js";import"./composite-BNlZpCYa.js";import"./svgIconContainer-Bq9Z_PVa.js";import"./PdfViewerSearchBar-D7rwg90p.js";import"./chevron-up-CUM2XUTZ.js";import"./chevron-down-C0LTAe4-.js";import"./cross-BwNW8yAx.js";import"./PdfViewerSidebar-B9eBwU7N.js";import"./index-BLNyRWLa.js";import"./index-CSGRTjjX.js";import"./index-BpdiA8C2.js";import"./PdfViewerToolbar-CfV6Oo5W.js";import"./Button-DqOCaaxJ.js";import"./chevron-right-DMrQ4Xxu.js";import"./Input-CPD69t9E.js";import"./search-DjdTcbXm.js";import"./spin-BcGU_Pt4.js";import"./error-CBOQy5rF.js";import"./withOsdkMetrics-SqCQVKc1.js";import"./makeExternalStore-BnincROM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
