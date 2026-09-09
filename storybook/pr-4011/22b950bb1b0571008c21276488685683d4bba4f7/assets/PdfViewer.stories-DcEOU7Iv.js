import{j as r,M as s}from"./iframe-MqLOwkyt.js";import{P as p}from"./pdf-viewer-CJAOtWmC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fg-6zSgv.js";import"./preload-helper-BI4FsuTE.js";import"./PdfViewer-CNMwZ3lh.js";import"./index-CYsLXWAq.js";import"./BasePdfViewer-cMuo1fhM.js";import"./BasePdfViewer.module.css-B6qr0WHO.js";import"./PdfViewerAnnotationLayer-o_ChWamq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B77GoAbd.js";import"./PdfViewerOutlineSidebar-9NptDRLs.js";import"./PdfViewerSidebarHeader-DkMOFoVJ.js";import"./useBaseUiId-xxBCoKYK.js";import"./useControlled-DHUJWjTK.js";import"./CompositeRoot-BMkiZXYl.js";import"./CompositeItem-cvG07j6P.js";import"./ToolbarRootContext-YqisKJxJ.js";import"./composite-NEozLeoL.js";import"./svgIconContainer-CpAJhJ6x.js";import"./PdfViewerSearchBar-Bg8knKIG.js";import"./chevron-up-DhcxO564.js";import"./chevron-down-CCwfXTdl.js";import"./cross-CrEHvwXy.js";import"./PdfViewerSidebar-Dtc9dn4x.js";import"./index-D1QWFyFj.js";import"./index-B53EBtE1.js";import"./index-DYFGinsg.js";import"./PdfViewerToolbar-CILsHxRy.js";import"./Button-CBsI2feD.js";import"./chevron-right-BoVZ7Wee.js";import"./Input-CquXhMGI.js";import"./search-CxS15Af3.js";import"./spin-CJMybQOa.js";import"./error-CN-8K1J8.js";import"./withOsdkMetrics-D3nMdfcR.js";import"./makeExternalStore-DNVCbBN4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
