import{j as r,M as s}from"./iframe-Bd5ScLvv.js";import{P as p}from"./pdf-viewer-Dcdn4vAm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVKHs298.js";import"./preload-helper-Cto50-3e.js";import"./PdfViewer-BfjgeVX2.js";import"./index-BInNCm2S.js";import"./BasePdfViewer-DlgRgACB.js";import"./BasePdfViewer.module.css-D7pIf2LX.js";import"./PdfViewerAnnotationLayer-DL0GGKGr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfVAsgAh.js";import"./PdfViewerOutlineSidebar-BZBo66DR.js";import"./PdfViewerSidebarHeader-DhKvlwMp.js";import"./useBaseUiId-BEsXvvg0.js";import"./useControlled-BVqmud31.js";import"./CompositeRoot-DT7CGqNY.js";import"./CompositeItem-xycX-JTq.js";import"./ToolbarRootContext-DGXau_lp.js";import"./composite-Dw0b0MIh.js";import"./svgIconContainer-CyD9Prgp.js";import"./PdfViewerSearchBar-DFKwK_kK.js";import"./chevron-up-DZwD4-cI.js";import"./chevron-down-nJ2TmJoq.js";import"./cross-DFIYwfW7.js";import"./PdfViewerSidebar-CDqu-GOg.js";import"./index-ByGszF0R.js";import"./index-CcgPg9jD.js";import"./index-BTf-4xqO.js";import"./PdfViewerToolbar-BhV8kYW7.js";import"./Button-DPVWeAkU.js";import"./chevron-right-CbF88Lv9.js";import"./Input-Dv_3n2Er.js";import"./search-DCnhWsbb.js";import"./spin-Djkc31sg.js";import"./error-Dm9-R7dH.js";import"./withOsdkMetrics-CO8xV1gc.js";import"./makeExternalStore-8KpmsT2I.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
