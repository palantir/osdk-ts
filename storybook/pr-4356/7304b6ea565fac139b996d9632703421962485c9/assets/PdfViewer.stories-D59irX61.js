import{j as r,M as s}from"./iframe-Dxf4Pfii.js";import{P as p}from"./pdf-viewer-BxzgocVN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CeneNC4R.js";import"./preload-helper-Ci8NMOYF.js";import"./PdfViewer-CqJTTebh.js";import"./index-BPBHjHBt.js";import"./BasePdfViewer-n3fIUi-c.js";import"./BasePdfViewer.module.css-BZJWUk6-.js";import"./PdfViewerAnnotationLayer-C325EREK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BU3F8YZQ.js";import"./PdfViewerOutlineSidebar-CsExu-pS.js";import"./PdfViewerSidebarHeader-vaJiPXyx.js";import"./useBaseUiId-BBachgDn.js";import"./useControlled-40F8gIyz.js";import"./CompositeRoot-C4myNUkg.js";import"./CompositeItem-6maKJylY.js";import"./ToolbarRootContext-CAbW4J_e.js";import"./composite-BAA7WPxj.js";import"./svgIconContainer-BdxGOMXV.js";import"./PdfViewerSearchBar-O7UwJBJl.js";import"./chevron-up-D7iqH3yi.js";import"./chevron-down-DG4gq9Kw.js";import"./cross-COrhxFBC.js";import"./PdfViewerSidebar-CJy_cIVS.js";import"./index-C6hYmHGr.js";import"./index-Dsk0oEX3.js";import"./index-DlHivqB_.js";import"./PdfViewerToolbar-a3heFkgB.js";import"./Button-DiZtkqKs.js";import"./chevron-right-C_Y5EQ6x.js";import"./Input-Dc5nJgGF.js";import"./search-BYBW1CEy.js";import"./spin-B-se2y3b.js";import"./error-Cp32RNcr.js";import"./withOsdkMetrics-DGJIUSZ9.js";import"./makeExternalStore-DOGp9SoX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
