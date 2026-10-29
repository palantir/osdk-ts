import{j as r,M as s}from"./iframe-DvwH42FA.js";import{P as p}from"./pdf-viewer-BvyGwB_z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CqRQG-95.js";import"./preload-helper-DEybsrDJ.js";import"./PdfViewer-CecL7MpN.js";import"./index-J26QqFGl.js";import"./BasePdfViewer-B7bi0_cZ.js";import"./BasePdfViewer.module.css-CEWEUkFU.js";import"./PdfViewerAnnotationLayer-y34A2W4e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kdeoEHhB.js";import"./PdfViewerOutlineSidebar-pqUcmRdt.js";import"./PdfViewerSidebarHeader-DrqyOgSq.js";import"./useBaseUiId-tOAOUQiJ.js";import"./useControlled-BhMAv1ps.js";import"./CompositeRoot-CC4Zn8iN.js";import"./CompositeItem-DeFaZgPZ.js";import"./ToolbarRootContext-BV3Ciak4.js";import"./composite-D2TyNObR.js";import"./svgIconContainer-BNUkj3Pd.js";import"./PdfViewerSearchBar-BFo6AIHR.js";import"./chevron-up-DW0uuBQK.js";import"./chevron-down-DclS5GqO.js";import"./cross-BN0lcpY0.js";import"./PdfViewerSidebar-B1OSQY-W.js";import"./index-BuEbl4ZZ.js";import"./index-BdNMK7Gf.js";import"./index-B7x2aIOS.js";import"./PdfViewerToolbar-KoW-14x9.js";import"./Button-C8MB2pGs.js";import"./chevron-right-BGUzGFTJ.js";import"./Input-CtJ7UKD6.js";import"./search-Cl4hDVdp.js";import"./spin-ZfWOqI3c.js";import"./error-yeSVRC55.js";import"./withOsdkMetrics-B8wi7VI0.js";import"./makeExternalStore-CKGyOq0N.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
