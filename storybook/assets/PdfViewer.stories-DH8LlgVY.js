import{j as r,M as s}from"./iframe-_9YlafCr.js";import{P as p}from"./pdf-viewer-CX8y_PEx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bt394C3j.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DgCkVpvo.js";import"./index-BfZ7BIaf.js";import"./BasePdfViewer-Bnn9ePCu.js";import"./BasePdfViewer.module.css-XowVPnL_.js";import"./PdfViewerAnnotationLayer-BWdCk65Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DANatthJ.js";import"./PdfViewerOutlineSidebar-Bi4n50J-.js";import"./PdfViewerSidebarHeader-pktjgjIm.js";import"./useBaseUiId-D-8XVTg2.js";import"./useControlled-BdcuaOkM.js";import"./CompositeRoot-BZ1cLwFB.js";import"./CompositeItem-DW1q3vob.js";import"./ToolbarRootContext-BvwX_Pt8.js";import"./composite-B3EEdu-D.js";import"./svgIconContainer--y7ZeGKv.js";import"./PdfViewerSearchBar-BIrjqY7h.js";import"./chevron-up-BG5jwSpO.js";import"./chevron-down-DxrxOWhu.js";import"./cross-B125yZV8.js";import"./PdfViewerSidebar-B7iiHkiY.js";import"./index-Cj93zZaN.js";import"./index-DIog01LX.js";import"./index-DNJvNqQL.js";import"./PdfViewerToolbar-9LJ8_xh8.js";import"./Button-C98CyIMt.js";import"./chevron-right-yBBFVJ1F.js";import"./Input-B_fnG3Vc.js";import"./search-0XIiHjxa.js";import"./spin-CqykIXrF.js";import"./error-DDBbGTuS.js";import"./withOsdkMetrics-ASK7qsZD.js";import"./makeExternalStore-CDyMTORk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
