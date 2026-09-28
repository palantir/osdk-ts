import{j as r,M as s}from"./iframe-BqJ-ZnBR.js";import{P as p}from"./pdf-viewer-Cl72MV8W.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DdHyHfNU.js";import"./preload-helper-JLrGau54.js";import"./PdfViewer-DtNaNuG8.js";import"./index-BK1P1voH.js";import"./BasePdfViewer-C7ghRxsC.js";import"./BasePdfViewer.module.css-CklketPn.js";import"./PdfViewerAnnotationLayer-BOeWbT5R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DB3vQ0R3.js";import"./PdfViewerOutlineSidebar-DwyZ1zfi.js";import"./PdfViewerSidebarHeader-nrP9O7Z4.js";import"./useBaseUiId-BcNmiaah.js";import"./useControlled-DrJztn-2.js";import"./CompositeRoot-CmH82QeL.js";import"./CompositeItem-COP7jkJm.js";import"./ToolbarRootContext-nuNuNDyh.js";import"./composite-iKsnpVuz.js";import"./svgIconContainer-Dc4tWYI9.js";import"./PdfViewerSearchBar-DdAZnzq2.js";import"./chevron-up-BkQGN6j9.js";import"./chevron-down-rJ0TahbK.js";import"./cross-BDK7LG_e.js";import"./PdfViewerSidebar-7Geh7B-c.js";import"./index-Dku47buH.js";import"./index-94n_hVW-.js";import"./index-By0VHStz.js";import"./PdfViewerToolbar-BRRp3AuS.js";import"./Button-DxthHQUU.js";import"./chevron-right-Cld6L82N.js";import"./Input-Bgztm7qK.js";import"./search-BZek_B3M.js";import"./spin-DgrimsCl.js";import"./error-B0ep7kDm.js";import"./withOsdkMetrics-CsoY-VD3.js";import"./makeExternalStore-DtB887rj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
