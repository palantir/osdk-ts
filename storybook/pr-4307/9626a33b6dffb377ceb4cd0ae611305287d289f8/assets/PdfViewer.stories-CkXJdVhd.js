import{j as r,M as s}from"./iframe-p7D6sarL.js";import{P as p}from"./pdf-viewer-DSEp6CPD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7KBwJ84.js";import"./preload-helper-fTfJHf6r.js";import"./PdfViewer-DpRpiPTq.js";import"./index-BdE6iQIl.js";import"./BasePdfViewer-DxYNP1u9.js";import"./BasePdfViewer.module.css-WMSKmjOk.js";import"./PdfViewerAnnotationLayer-Dza_AmE1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mvw2bTiG.js";import"./PdfViewerOutlineSidebar-Dd690diU.js";import"./PdfViewerSidebarHeader-BVZ3VBlA.js";import"./useBaseUiId-Dpj_J2PZ.js";import"./useControlled-D8RNaOKh.js";import"./CompositeRoot-0UMvT-js.js";import"./CompositeItem-DPnrDtg_.js";import"./ToolbarRootContext-DHC1R4PN.js";import"./composite-C6-iGtUX.js";import"./svgIconContainer-4FKWJ0K3.js";import"./PdfViewerSearchBar-DheD6m-N.js";import"./chevron-up-C__4PLQb.js";import"./chevron-down-CW12YW7p.js";import"./cross-BIlvkmku.js";import"./PdfViewerSidebar-DF04N73L.js";import"./index-DrFK8Y9T.js";import"./index-nQDHUjnH.js";import"./index-CZrsf4r_.js";import"./PdfViewerToolbar-CiputGVd.js";import"./Button-DTuYEipm.js";import"./chevron-right-Calj5F2C.js";import"./Input-LdPdzdTD.js";import"./search-0vpab4Qy.js";import"./spin-DtQVRx_P.js";import"./error-orkHl4EN.js";import"./withOsdkMetrics-DMV3eX8V.js";import"./makeExternalStore-DDdf7AUk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
