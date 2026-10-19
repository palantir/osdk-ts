import{j as r,M as s}from"./iframe-3DYs7LO7.js";import{P as p}from"./pdf-viewer-B4KQIapI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Czs07Yga.js";import"./preload-helper-BDRkpYDH.js";import"./PdfViewer-DtoyXKYP.js";import"./index-Dksq0QWW.js";import"./BasePdfViewer-C_5eBcgv.js";import"./BasePdfViewer.module.css-wTDJVTz9.js";import"./PdfViewerAnnotationLayer-mTIFU3bH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bd1Gv31g.js";import"./PdfViewerOutlineSidebar-ejNLAsQP.js";import"./PdfViewerSidebarHeader-CAPChFIg.js";import"./useBaseUiId-CeE4102D.js";import"./useControlled-LDymMyjQ.js";import"./CompositeRoot-CQgdIGqY.js";import"./CompositeItem-D-tb1HU0.js";import"./ToolbarRootContext-CEG1pZ6f.js";import"./composite-BCO-9Moa.js";import"./svgIconContainer-E5ErPZjm.js";import"./PdfViewerSearchBar-D2fSsqvC.js";import"./chevron-up-BUZkPf7V.js";import"./chevron-down-DLvTPfQ9.js";import"./cross-BiEQYoFR.js";import"./PdfViewerSidebar-D8YQ3Qk5.js";import"./index-HJUPOpns.js";import"./index-Bg_CqW7M.js";import"./index-DNpL3p8G.js";import"./PdfViewerToolbar-vdGX_wmq.js";import"./Button-Co786LuF.js";import"./chevron-right-BY6kouUx.js";import"./Input-Bbtubjan.js";import"./search-D5yGPAlT.js";import"./spin-D7vtRiKb.js";import"./error-B7nnIe8L.js";import"./withOsdkMetrics-Dte6-FPa.js";import"./makeExternalStore-DOhtyVO-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
