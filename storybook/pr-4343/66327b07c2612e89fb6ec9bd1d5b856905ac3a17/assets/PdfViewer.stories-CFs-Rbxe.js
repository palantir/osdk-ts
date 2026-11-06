import{j as r,M as s}from"./iframe-CwWTpKqE.js";import{P as p}from"./pdf-viewer-DayBJ-6n.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-UJz7dO.js";import"./preload-helper-B09VY0AV.js";import"./PdfViewer-QpvGFfM5.js";import"./index-ibAAsAIP.js";import"./BasePdfViewer-kDT8r57t.js";import"./BasePdfViewer.module.css-BTARtyz1.js";import"./PdfViewerAnnotationLayer-DWmhEYHW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-cRbyNB48.js";import"./PdfViewerOutlineSidebar-Bpq2Nav8.js";import"./PdfViewerSidebarHeader-CescMaoe.js";import"./useBaseUiId-KfzYfEP4.js";import"./useControlled-Bv0Nsxvt.js";import"./CompositeRoot-B31q0jDA.js";import"./CompositeItem-DdcfEsM9.js";import"./ToolbarRootContext-BpNk0gzp.js";import"./composite-BQxf11e7.js";import"./svgIconContainer-BQKxLrqz.js";import"./PdfViewerSearchBar-oJhtLNaG.js";import"./chevron-up--_jL__5r.js";import"./chevron-down-CndDBIBA.js";import"./cross-DKdi2fit.js";import"./PdfViewerSidebar-Cxh5P7it.js";import"./index-Cf9g6rai.js";import"./index-nzJ3ZmYt.js";import"./index-lXeJxgff.js";import"./PdfViewerToolbar-Eh5OK9cW.js";import"./Button-CRkFmj-6.js";import"./chevron-right-YUIedYD6.js";import"./Input-Chlp8aHK.js";import"./search-sqlqxwkc.js";import"./spin-C0wYKf4d.js";import"./error-DLpjz71D.js";import"./withOsdkMetrics-CfTZp6DM.js";import"./makeExternalStore-BCW3G7rA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
