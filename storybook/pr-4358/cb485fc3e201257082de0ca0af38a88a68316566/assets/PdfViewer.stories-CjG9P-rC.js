import{j as r,M as s}from"./iframe-Dm9tPq9-.js";import{P as p}from"./pdf-viewer-aWdFMrzp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVkj6Unw.js";import"./preload-helper-DbanGSn8.js";import"./PdfViewer-DZZT5g1I.js";import"./index-SudSBJ9d.js";import"./BasePdfViewer-ph4_A6jB.js";import"./BasePdfViewer.module.css-BoMpPqh7.js";import"./PdfViewerAnnotationLayer-Cw4OabV5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-H_otKXNo.js";import"./PdfViewerOutlineSidebar-DT3BjaBq.js";import"./PdfViewerSidebarHeader-hrICdoEC.js";import"./useBaseUiId-Bh3ZKuZJ.js";import"./useControlled-zgk6WMo4.js";import"./CompositeRoot-Cu-43LAn.js";import"./CompositeItem-Brc_cUGL.js";import"./ToolbarRootContext-DattZO7d.js";import"./composite-DwLeZJsP.js";import"./svgIconContainer-DLeOey4i.js";import"./PdfViewerSearchBar-DZKg0-fc.js";import"./chevron-up-BbTCgD4m.js";import"./chevron-down-COzwHJk7.js";import"./cross-DovxETch.js";import"./PdfViewerSidebar-tU5ODv-0.js";import"./index-BwyOjzrJ.js";import"./index-pwNhYih4.js";import"./index-BEF1L48c.js";import"./PdfViewerToolbar-BYSbShcR.js";import"./Button-D711FISQ.js";import"./chevron-right-l5_fm_O3.js";import"./Input-1s2rxWuw.js";import"./search-DpPE568F.js";import"./spin-BKuPa1CP.js";import"./error-CX1V2PGn.js";import"./withOsdkMetrics-4sk2cJVp.js";import"./makeExternalStore-CEHTDEAH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
