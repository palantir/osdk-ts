import{j as r,M as s}from"./iframe-CqpELHwS.js";import{P as p}from"./pdf-viewer-BawiPMMx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DYfdvP86.js";import"./preload-helper-DfJ58b8G.js";import"./PdfViewer-BCana1OA.js";import"./index-BER4WQBS.js";import"./BasePdfViewer-IislYu8K.js";import"./BasePdfViewer.module.css-z6xhgkKK.js";import"./PdfViewerAnnotationLayer-CfNATfY6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEvUGYN3.js";import"./PdfViewerOutlineSidebar-5IEOmmqD.js";import"./PdfViewerSidebarHeader-DylHPNK1.js";import"./useBaseUiId-CqI62Qpb.js";import"./useControlled-D7QaFiC3.js";import"./CompositeRoot-Dszebl5m.js";import"./CompositeItem-Du2CIA1V.js";import"./ToolbarRootContext-uFYVc9Dk.js";import"./composite-DOZwc2bc.js";import"./svgIconContainer-BTP1tkQ_.js";import"./PdfViewerSearchBar-hZXSas9c.js";import"./chevron-up-5FHEdi_q.js";import"./chevron-down-CiPBsoDI.js";import"./cross-u_0PEuYq.js";import"./PdfViewerSidebar-CmowZr9W.js";import"./index-0kwSuhRB.js";import"./index-Cis59Sxl.js";import"./index-CcEEUUj6.js";import"./PdfViewerToolbar-CIOsYGnn.js";import"./Button-DVcrv2BS.js";import"./chevron-right-yG2p2-v7.js";import"./Input-B8oxxBH0.js";import"./search-D9m05WlM.js";import"./spin-BtnmdL_I.js";import"./error-jtHR9fDA.js";import"./withOsdkMetrics-lKot8ktS.js";import"./makeExternalStore-CUMLWxOP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
