import{j as r,M as s}from"./iframe-CLFvQKtr.js";import{P as p}from"./pdf-viewer-6_Y82F2Z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-COy7WN4B.js";import"./preload-helper-Dsl2rT4D.js";import"./PdfViewer-CiEUCU27.js";import"./index-Bc4ZDDw5.js";import"./BasePdfViewer-Dm4Zg5XZ.js";import"./BasePdfViewer.module.css-D5hNFetd.js";import"./PdfViewerAnnotationLayer-FtIDdkhQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DN62FSrE.js";import"./PdfViewerOutlineSidebar-DlXVOEEx.js";import"./PdfViewerSidebarHeader-Cil4JSXn.js";import"./useBaseUiId-DGth5ZlH.js";import"./useControlled-BsSE4zKc.js";import"./CompositeRoot-DxR4oMi5.js";import"./CompositeItem-BgZVgO8p.js";import"./ToolbarRootContext-DNG77-u2.js";import"./composite-BY1hAZzj.js";import"./svgIconContainer-DDtGdFbP.js";import"./PdfViewerSearchBar-BJWtovn9.js";import"./chevron-up-CZ1FrQ6o.js";import"./chevron-down-GxDR_faA.js";import"./cross-B8sVMx5E.js";import"./PdfViewerSidebar-UItG_b1M.js";import"./index-7BdV6mXZ.js";import"./index-BN1TScIw.js";import"./index-BVTx-0qU.js";import"./PdfViewerToolbar-DiOdqxdc.js";import"./Button-BuhAuEGs.js";import"./chevron-right-XSJHwGcV.js";import"./Input-B0zGDDc7.js";import"./search-BBKcx3DL.js";import"./spin-CPLqvIW4.js";import"./error-EDq0RnuF.js";import"./withOsdkMetrics-DUg-sn-W.js";import"./makeExternalStore-B1fZCef5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
