import{j as r,M as s}from"./iframe-BsJOdbCL.js";import{P as p}from"./pdf-viewer--HTG6l1B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BeZpkL7U.js";import"./preload-helper-DxS_Velh.js";import"./PdfViewer-DTlHsSSz.js";import"./index-BqujQTW3.js";import"./BasePdfViewer-BNIhpZac.js";import"./BasePdfViewer.module.css-CxAKjjo9.js";import"./PdfViewerAnnotationLayer-C1Q4dH4M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-YwOzkGud.js";import"./PdfViewerOutlineSidebar-1Xpeab0a.js";import"./PdfViewerSidebarHeader-Cc-t9NCO.js";import"./useBaseUiId-CB5lNuw3.js";import"./useControlled-7DT6e4WZ.js";import"./CompositeRoot-_k5X5ZH2.js";import"./CompositeItem-BS607TGd.js";import"./ToolbarRootContext-DI-YguYW.js";import"./composite-CaVgyQab.js";import"./svgIconContainer-CrnbMK0b.js";import"./PdfViewerSearchBar-Dx9QcsAv.js";import"./chevron-up-D6J66tkF.js";import"./chevron-down-CLIxImQx.js";import"./cross-Bxqdiez_.js";import"./PdfViewerSidebar-BjWNrTuV.js";import"./index-BwHn30HN.js";import"./index-CEwR0XXE.js";import"./index-rSFhfOaH.js";import"./PdfViewerToolbar-D-eNAXbM.js";import"./Button-CWQ0OGf8.js";import"./chevron-right-BK3C8GGX.js";import"./Input-BYGlPWDj.js";import"./search-DGRADUpj.js";import"./spin-CxfFenUb.js";import"./error-Btl7YeDY.js";import"./withOsdkMetrics-DV_LS9FP.js";import"./makeExternalStore-DWYVyprO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
