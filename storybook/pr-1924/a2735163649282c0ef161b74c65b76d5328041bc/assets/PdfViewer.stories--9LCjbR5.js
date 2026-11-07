import{j as r,M as s}from"./iframe-DlL407jt.js";import{P as p}from"./pdf-viewer-2EAyoTV6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BxYA_z1F.js";import"./preload-helper-BJD3fY2z.js";import"./PdfViewer-B8r60IQS.js";import"./index-DZmZFRgP.js";import"./BasePdfViewer-D0tqD3yv.js";import"./BasePdfViewer.module.css-B4pVWalU.js";import"./PdfViewerAnnotationLayer-CLOHxZjI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cowk-fHS.js";import"./PdfViewerOutlineSidebar-BjLZjk1t.js";import"./PdfViewerSidebarHeader-D7W6aSpt.js";import"./useBaseUiId-kFFF_95H.js";import"./useControlled-BgQSSZgH.js";import"./CompositeRoot-x0fbnMU8.js";import"./CompositeItem-EF9Yfn-T.js";import"./ToolbarRootContext-FpY3GT5-.js";import"./composite-CnW58q4R.js";import"./svgIconContainer-C3aprzty.js";import"./PdfViewerSearchBar-I_GeUY2R.js";import"./chevron-up-LCaCSvlT.js";import"./chevron-down-D5Po3Ct_.js";import"./cross-CzAlhRHv.js";import"./PdfViewerSidebar-CTzKvCty.js";import"./index-DkvAjmmx.js";import"./index-h5_pJtzr.js";import"./index-CTSKtE65.js";import"./PdfViewerToolbar-CLPVPMif.js";import"./Button-DMVMokIc.js";import"./chevron-right-DI36cb28.js";import"./Input-D4IoTLF7.js";import"./search-CHs1cMQF.js";import"./spin-CYZ54jRu.js";import"./error-BAaXixX9.js";import"./withOsdkMetrics-C_49vYYy.js";import"./makeExternalStore-DASQ1Znf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
