import{j as r,M as s}from"./iframe-BYO6buG4.js";import{P as p}from"./pdf-viewer-CrWnWxtV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNpsZDdC.js";import"./preload-helper-BghxL7kB.js";import"./PdfViewer-DF7y8Q03.js";import"./index-BoyptyOK.js";import"./BasePdfViewer-BXCA1CVZ.js";import"./BasePdfViewer.module.css-Czcy5v93.js";import"./PdfViewerAnnotationLayer-B1ZbYb0a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdN9mx_b.js";import"./PdfViewerOutlineSidebar-DOlX-KhD.js";import"./PdfViewerSidebarHeader-DYISshGn.js";import"./useBaseUiId-DSjvVVjS.js";import"./useControlled-Cg_ccIWb.js";import"./CompositeRoot-z65sOQfO.js";import"./CompositeItem-CN9f57ba.js";import"./ToolbarRootContext-BKI2aJJ6.js";import"./composite-Od8Flb7p.js";import"./svgIconContainer-56E6UlaN.js";import"./PdfViewerSearchBar-BMh0r4r5.js";import"./chevron-up-DejLKhPH.js";import"./chevron-down-DqQBT-ce.js";import"./cross-Db1-xEOp.js";import"./PdfViewerSidebar-DGOjojsB.js";import"./index-YNs_4vqy.js";import"./index-CsWBFdKT.js";import"./index-1LA5lE3C.js";import"./PdfViewerToolbar-DD3Gtenm.js";import"./Button-DMsIowuw.js";import"./chevron-right-B4Vrka-C.js";import"./Input-T9JgejYL.js";import"./search-Ci90mlVI.js";import"./spin-EBSMdkje.js";import"./error-DvNb2Jgd.js";import"./withOsdkMetrics-DdFROTWY.js";import"./makeExternalStore-Cjetkmua.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
