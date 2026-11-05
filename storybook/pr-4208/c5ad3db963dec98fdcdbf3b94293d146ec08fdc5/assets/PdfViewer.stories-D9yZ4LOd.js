import{j as r,M as s}from"./iframe-CW0iR0MW.js";import{P as p}from"./pdf-viewer-cQQ3IK_2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CB6berUm.js";import"./preload-helper-DPNRA16C.js";import"./PdfViewer-Cmt9YZMD.js";import"./index-R4-e3PKI.js";import"./BasePdfViewer-Gs8XF5o-.js";import"./BasePdfViewer.module.css-CPNe9JBw.js";import"./PdfViewerAnnotationLayer-BtSQXqsC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZNHmffWf.js";import"./PdfViewerOutlineSidebar-D6HsLAMr.js";import"./PdfViewerSidebarHeader-C2IqAcPI.js";import"./useBaseUiId-bY0lVTzO.js";import"./useControlled-BZraJw4c.js";import"./CompositeRoot-BBvyVKQJ.js";import"./CompositeItem-nFLipZIC.js";import"./ToolbarRootContext-Dfjrxij8.js";import"./composite-CEDiNU-s.js";import"./svgIconContainer-DRg1K7b0.js";import"./PdfViewerSearchBar-CAXGhkPo.js";import"./chevron-up-uDT8i8JB.js";import"./chevron-down-ChPXe2UO.js";import"./cross-CVgDD36J.js";import"./PdfViewerSidebar-BkhBfDzN.js";import"./index-CQ_ZQBXs.js";import"./index-Bj6P2ewC.js";import"./index-Wh16gVsR.js";import"./PdfViewerToolbar-DNSs8_NJ.js";import"./Button-IemAbPn8.js";import"./chevron-right-BmpW32kI.js";import"./Input-CEvDm9oX.js";import"./search-DRF2IcSw.js";import"./spin--DEyf8rh.js";import"./error-QdPzuwdp.js";import"./withOsdkMetrics-CaRNNLKc.js";import"./makeExternalStore-GoUNmYeo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
