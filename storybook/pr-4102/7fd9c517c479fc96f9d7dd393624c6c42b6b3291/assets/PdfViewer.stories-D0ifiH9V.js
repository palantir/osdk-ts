import{j as r,M as s}from"./iframe-BHP--iSv.js";import{P as p}from"./pdf-viewer-D20oyFQC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_SHKpsKY.js";import"./preload-helper-4Y0sWPF7.js";import"./PdfViewer-C2zzNdlu.js";import"./index-CuQOASnK.js";import"./BasePdfViewer-B_UfV13B.js";import"./BasePdfViewer.module.css-hCODlSj5.js";import"./PdfViewerAnnotationLayer-C9yQ34Z7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIEEZf38.js";import"./PdfViewerOutlineSidebar-BNiQew90.js";import"./PdfViewerSidebarHeader-CHEVLqYr.js";import"./useBaseUiId-txgvadn-.js";import"./useControlled-DACQJINy.js";import"./CompositeRoot-0xPDRjkT.js";import"./CompositeItem-QqJnKLYC.js";import"./ToolbarRootContext-i6dOGAi5.js";import"./composite-CY1_GtTz.js";import"./svgIconContainer-XMK9JozI.js";import"./PdfViewerSearchBar-DUuLF10D.js";import"./chevron-up-DlTqZtCt.js";import"./chevron-down-BptITD6J.js";import"./cross-D3_DOx--.js";import"./PdfViewerSidebar-BTRsDHwF.js";import"./index-C-eIeMvP.js";import"./index-BMZH6GYS.js";import"./index-CjU2x-RF.js";import"./PdfViewerToolbar-BRPBdeCw.js";import"./Button-cuAOjsWC.js";import"./chevron-right-IiPjTLFG.js";import"./Input-DBfp7isZ.js";import"./search-gxC0SZFk.js";import"./spin-C6vzJccJ.js";import"./error-Bl2IH4zy.js";import"./withOsdkMetrics-xpnG9elc.js";import"./makeExternalStore-nAPJO73f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
