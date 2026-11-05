import{j as r,M as s}from"./iframe-CfP80nhE.js";import{P as p}from"./pdf-viewer-Cbs9PXOX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ad-YNKKT.js";import"./preload-helper-DVx9So3f.js";import"./PdfViewer-cmlhc-mN.js";import"./index-COwN8tdJ.js";import"./BasePdfViewer-DyWYD8Wb.js";import"./BasePdfViewer.module.css-B2yHBRWe.js";import"./PdfViewerAnnotationLayer-BCrJZERQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1AQpzxN.js";import"./PdfViewerOutlineSidebar-BcDpMtxd.js";import"./PdfViewerSidebarHeader-BkgwoZJ8.js";import"./useBaseUiId-BpCYJZt6.js";import"./useControlled-DY45BqZY.js";import"./CompositeRoot-CVXmLR7F.js";import"./CompositeItem-rrhF1DOt.js";import"./ToolbarRootContext-BNZ6uAxf.js";import"./composite-BXpnnXVg.js";import"./svgIconContainer-ByL1CzmI.js";import"./PdfViewerSearchBar-mQ14yVFE.js";import"./chevron-up-BspkruPc.js";import"./chevron-down-DosI46m-.js";import"./cross-Dhhk-QOY.js";import"./PdfViewerSidebar-uIW1rki2.js";import"./index-Db0uTKuy.js";import"./index-CTbyqW3F.js";import"./index-5ZL8iVjG.js";import"./PdfViewerToolbar-q0mPdx0S.js";import"./Button-CBX6PhDU.js";import"./chevron-right-D_Txfs5R.js";import"./Input-C5rpYEfy.js";import"./search-DBbR_HQC.js";import"./spin-B8W_SYJv.js";import"./error-D8W3ZfFh.js";import"./withOsdkMetrics-B-Iw4pyn.js";import"./makeExternalStore-CX8kqVGx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
