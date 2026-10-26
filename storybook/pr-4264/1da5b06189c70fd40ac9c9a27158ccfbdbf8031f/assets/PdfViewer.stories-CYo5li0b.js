import{j as r,M as s}from"./iframe-BX9a9lIA.js";import{P as p}from"./pdf-viewer-SGLHPcrf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D9UacjIp.js";import"./preload-helper-BlXb_Vg9.js";import"./PdfViewer-sMErApUx.js";import"./index-DU3Z-NO3.js";import"./BasePdfViewer-C0taqUdj.js";import"./BasePdfViewer.module.css-9lvqsVM3.js";import"./PdfViewerAnnotationLayer-DpnPjr2x.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-m1x-Gx7J.js";import"./PdfViewerOutlineSidebar-Bpn4d8M5.js";import"./PdfViewerSidebarHeader-DlPo4dFP.js";import"./useBaseUiId-rZTTYrCD.js";import"./useControlled-D1C6STzO.js";import"./CompositeRoot-DQdBi0T7.js";import"./CompositeItem-h-F_V8Zb.js";import"./ToolbarRootContext-CfpoMHoy.js";import"./composite-BZsQ_ZE_.js";import"./svgIconContainer-UHOj5M6P.js";import"./PdfViewerSearchBar-pZsU3tkh.js";import"./chevron-up-DfEuNmrF.js";import"./chevron-down-Baa_eZBL.js";import"./cross-DuBsq8tA.js";import"./PdfViewerSidebar-YA86QJt6.js";import"./index-CGQ8sj2I.js";import"./index-Xkcqocgf.js";import"./index-Cmn1GPS_.js";import"./PdfViewerToolbar-B4Z1YlZB.js";import"./Button-nhugV28E.js";import"./chevron-right-Cg9PieVE.js";import"./Input-R8AltOJ3.js";import"./search-D5VPbQqk.js";import"./spin-BheQegEV.js";import"./error-BEhn7utC.js";import"./withOsdkMetrics-C7fLYswC.js";import"./makeExternalStore-BYhN6o4S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
