import{j as r,M as s}from"./iframe-DALIkhit.js";import{P as p}from"./pdf-viewer-a4VBlKa5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DxPBK84i.js";import"./preload-helper-DctxGWdw.js";import"./PdfViewer-BFYO85nU.js";import"./index-CRXXRxj8.js";import"./BasePdfViewer-De-k1PpK.js";import"./BasePdfViewer.module.css-CyY-Yelg.js";import"./PdfViewerAnnotationLayer-CnWWO3vM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yBHUEtJG.js";import"./PdfViewerOutlineSidebar-DAvVonvU.js";import"./PdfViewerSidebarHeader-CtaumDFt.js";import"./useBaseUiId-DYLAsVU1.js";import"./useControlled-D3lOoo5c.js";import"./CompositeRoot-CM2_8tSx.js";import"./CompositeItem-jTsd3S2E.js";import"./ToolbarRootContext-C8BMIZR-.js";import"./composite-DNV43Yqw.js";import"./svgIconContainer-spB4tjSy.js";import"./PdfViewerSearchBar-CAqBxb7s.js";import"./chevron-up-syz8rgro.js";import"./chevron-down-CAkJr31e.js";import"./cross-Lsk0KBg0.js";import"./PdfViewerSidebar-YB_SekNp.js";import"./index-C_CgxuxZ.js";import"./index-CoXaz5Dw.js";import"./index-OZ6WyzDP.js";import"./PdfViewerToolbar-BaHEDV_G.js";import"./Button-BsqgxFa7.js";import"./chevron-right-DXFgg_Nl.js";import"./Input-lOkk4Did.js";import"./search-DGhvTCsG.js";import"./spin-BTNwocfy.js";import"./error-D7k6AgT2.js";import"./withOsdkMetrics-YLhbsdmr.js";import"./makeExternalStore-ByjGMN0z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
