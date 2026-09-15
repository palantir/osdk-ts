import{j as r,M as s}from"./iframe-DQpCivO1.js";import{P as p}from"./pdf-viewer-BKIGI4Pd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D4njmilV.js";import"./preload-helper-BNtpiPnv.js";import"./PdfViewer-D7wZe2p6.js";import"./index-DS8-D35g.js";import"./BasePdfViewer-BOHvCbVf.js";import"./BasePdfViewer.module.css-uEXfqq6w.js";import"./PdfViewerAnnotationLayer-CAFWmPXY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFxpNgFY.js";import"./PdfViewerOutlineSidebar-DQd69dUO.js";import"./PdfViewerSidebarHeader-DAyqvx1t.js";import"./useBaseUiId-C8ulXah6.js";import"./useControlled-LcZaVq-T.js";import"./CompositeRoot-B3yaZnwv.js";import"./CompositeItem-BwdYO-ps.js";import"./ToolbarRootContext-DQ_5rIHb.js";import"./composite-xfEh3o5g.js";import"./svgIconContainer-CxU-QT8u.js";import"./PdfViewerSearchBar-BzNYJttK.js";import"./chevron-up-R9Wq5hgx.js";import"./chevron-down-DfHD6Nmf.js";import"./cross-Ccdwkdk3.js";import"./PdfViewerSidebar-S9U_0whV.js";import"./index-CliSQRrA.js";import"./index-BKAa7pmt.js";import"./index-Dqn9XUWy.js";import"./PdfViewerToolbar-DSWUtJxN.js";import"./Button-CstsYLg_.js";import"./chevron-right-CLJ7D95t.js";import"./Input-i7VlWrgO.js";import"./search-GD8U0S68.js";import"./spin-RagGRGd2.js";import"./error-CRC1V3FY.js";import"./withOsdkMetrics-dKG6bw4N.js";import"./makeExternalStore-CZgijSTY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
