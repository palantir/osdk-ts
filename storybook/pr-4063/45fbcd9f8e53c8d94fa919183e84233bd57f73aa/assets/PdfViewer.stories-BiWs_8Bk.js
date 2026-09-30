import{j as r,M as s}from"./iframe-BvtrFrDq.js";import{P as p}from"./pdf-viewer-bp0dy_KL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DIFEzxsw.js";import"./preload-helper-hiWkjTbI.js";import"./PdfViewer-BH6pLo0s.js";import"./index-BJkhm3Ia.js";import"./BasePdfViewer-El486aQi.js";import"./BasePdfViewer.module.css-BBxAm2KY.js";import"./PdfViewerAnnotationLayer-CsoSY5Fx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeuxZDoJ.js";import"./PdfViewerOutlineSidebar-CZfZr5tV.js";import"./PdfViewerSidebarHeader-DX_n_AY5.js";import"./useBaseUiId-D1zJXq-x.js";import"./useControlled-C5pmq0AY.js";import"./CompositeRoot-DHusKf4V.js";import"./CompositeItem-Rfg3qzju.js";import"./ToolbarRootContext-BrQK-hek.js";import"./composite-D9wCA3L7.js";import"./svgIconContainer-CxzpI-nz.js";import"./PdfViewerSearchBar-D5kC_4eD.js";import"./chevron-up-IO1JayTt.js";import"./chevron-down-BxwFps0j.js";import"./cross-Dm_M5ayo.js";import"./PdfViewerSidebar-BOFrCpee.js";import"./index-B5-tsrVL.js";import"./index-B2QxPovI.js";import"./index-BmdzJuTV.js";import"./PdfViewerToolbar-BRN2LW_n.js";import"./Button-BJy_LHxZ.js";import"./chevron-right-Ju_eGHlH.js";import"./Input-D3h_1eKW.js";import"./search-y87IcSNA.js";import"./spin-i7X0HGBw.js";import"./error-BbBH-DMp.js";import"./withOsdkMetrics-Cf9QOWiU.js";import"./makeExternalStore-CT6g87Zk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
