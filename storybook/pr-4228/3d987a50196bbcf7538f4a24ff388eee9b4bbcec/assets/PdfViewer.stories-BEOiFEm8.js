import{j as r,M as s}from"./iframe-D48Q2Ih8.js";import{P as p}from"./pdf-viewer-_7m3WK5n.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DFpRdjYV.js";import"./preload-helper-CL77aTRo.js";import"./PdfViewer-BrjaqHrk.js";import"./index-BAc81QxV.js";import"./BasePdfViewer-D3crRCAD.js";import"./BasePdfViewer.module.css-BdZjzNUq.js";import"./PdfViewerAnnotationLayer-DmOsJhYK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Y5s66mGU.js";import"./PdfViewerOutlineSidebar-DdlhcXDm.js";import"./PdfViewerSidebarHeader-xgwIV80T.js";import"./useBaseUiId-DGTp0U_O.js";import"./useControlled-CFgtbz8z.js";import"./CompositeRoot-BFpwLrpz.js";import"./CompositeItem-CIsGCI0M.js";import"./ToolbarRootContext-RyVic0HL.js";import"./composite-AHBdhfMT.js";import"./svgIconContainer-C8Iv3sR3.js";import"./PdfViewerSearchBar-CK2aPHkZ.js";import"./chevron-up-DpbWoxka.js";import"./chevron-down-BKXBxbNC.js";import"./cross-7sczFfzI.js";import"./PdfViewerSidebar-D-iR5ChY.js";import"./index-BSoRDxwG.js";import"./index-DKv9tcd8.js";import"./index-CMlea4RE.js";import"./PdfViewerToolbar-BzfVwyf-.js";import"./Button-CRna_EZj.js";import"./chevron-right-DHAD24Sa.js";import"./Input-BYdVsABv.js";import"./search-C9PzHLND.js";import"./spin-3hhLIFW6.js";import"./error-CmBzdsaE.js";import"./withOsdkMetrics-D4HQPyjO.js";import"./makeExternalStore-CP04809A.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
