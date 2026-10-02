import{j as r,M as s}from"./iframe-qTpzqqub.js";import{P as p}from"./pdf-viewer-C1UAaJCr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DTpFGfQ-.js";import"./preload-helper-Dn-jOWjK.js";import"./PdfViewer-C_w29ClQ.js";import"./index-BOmnG_lN.js";import"./BasePdfViewer-DkT50mS-.js";import"./BasePdfViewer.module.css-DGroxrk9.js";import"./PdfViewerAnnotationLayer-DaWgdm2u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-c2u5ic90.js";import"./PdfViewerOutlineSidebar-FaX_3RkN.js";import"./PdfViewerSidebarHeader-BV-Kk69E.js";import"./useBaseUiId-DOsGlG1_.js";import"./useControlled-B4JMLJpk.js";import"./CompositeRoot-Eyq42xkA.js";import"./CompositeItem-6iO3e1lI.js";import"./ToolbarRootContext-BKny703T.js";import"./composite-qaT37KGA.js";import"./svgIconContainer-Bm8Tr4gZ.js";import"./PdfViewerSearchBar-Bl_JmP5_.js";import"./chevron-up-xRBvOqHP.js";import"./chevron-down-B3fo8V2O.js";import"./cross-CnNHuvcS.js";import"./PdfViewerSidebar-CFrWZ3O6.js";import"./index-CXH_UxOS.js";import"./index-BVtfFrKv.js";import"./index-JoLmhLbC.js";import"./PdfViewerToolbar-Ber8zyg9.js";import"./Button-DEMuzBDP.js";import"./chevron-right-FBI82Dt3.js";import"./Input-DUA3RXYY.js";import"./search-MdoZShsS.js";import"./spin-Bjd2Kyt4.js";import"./error-Bf3H-zmd.js";import"./withOsdkMetrics-C5EFq8dH.js";import"./makeExternalStore-DYaXh9WX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
