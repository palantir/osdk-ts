import{j as r,M as s}from"./iframe-DZdi5qVl.js";import{P as p}from"./pdf-viewer-ZKrkeo98.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CmRXZoTb.js";import"./preload-helper-Uouo8HcN.js";import"./PdfViewer-CZAp362g.js";import"./index-Bg61eIIa.js";import"./BasePdfViewer-BF0zK9SI.js";import"./BasePdfViewer.module.css-CDWHJZAl.js";import"./PdfViewerAnnotationLayer-8E_c4fV3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-plgPe-4C.js";import"./PdfViewerOutlineSidebar-fK3NvE-N.js";import"./PdfViewerSidebarHeader-COTceDGw.js";import"./useBaseUiId-Mz3L6_Ly.js";import"./useControlled-BxMGJ1iI.js";import"./CompositeRoot-DWpC5yO1.js";import"./CompositeItem-CidR49nz.js";import"./ToolbarRootContext-CRfH5r80.js";import"./composite-D3C2nmMl.js";import"./svgIconContainer-DxhMpPws.js";import"./PdfViewerSearchBar-opJx4Kg8.js";import"./chevron-up-DH0JxGmo.js";import"./chevron-down-DWbMZGTs.js";import"./cross-B9sTw1kj.js";import"./PdfViewerSidebar-D7T8FY4R.js";import"./index-BNarussk.js";import"./index-CVgHOiGf.js";import"./index-DFxmPpXp.js";import"./PdfViewerToolbar-zyBCJg_l.js";import"./Button-Bc-yRCfH.js";import"./chevron-right-CYSvO6Bn.js";import"./Input-I_C95g_4.js";import"./search-1yJPrdVL.js";import"./spin-sTVcvjij.js";import"./error-CzW1HZwX.js";import"./withOsdkMetrics-CA01Qt6R.js";import"./makeExternalStore-COQibzUC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
