import{j as r,M as s}from"./iframe-s6qt4jCK.js";import{P as p}from"./pdf-viewer-C1Vm2HrH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DrTwIwlo.js";import"./preload-helper-9jiBPXEl.js";import"./PdfViewer-DBtBUpwq.js";import"./index-D6YAKeyS.js";import"./BasePdfViewer-DyYGcE7p.js";import"./BasePdfViewer.module.css-Bz0nyrVU.js";import"./PdfViewerAnnotationLayer-CiAXFPwj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ndBJAqBE.js";import"./PdfViewerOutlineSidebar-LxsDlA0F.js";import"./PdfViewerSidebarHeader-C_k1c0nX.js";import"./useBaseUiId-BIc0eo6T.js";import"./useControlled-CTyuJ7Af.js";import"./CompositeRoot-C2ct-Wg8.js";import"./CompositeItem-cbLDCwSH.js";import"./ToolbarRootContext-nYUUEgez.js";import"./composite-CPpi_uAC.js";import"./svgIconContainer-D4Tr3eBw.js";import"./PdfViewerSearchBar-Bfzb4cq2.js";import"./chevron-up-X0Zf8nEp.js";import"./chevron-down-nr5MnKpi.js";import"./cross-z12JNlD1.js";import"./PdfViewerSidebar-Uc1lV-xX.js";import"./index-D2cPMVS8.js";import"./index-DVF-9r8u.js";import"./index-BcLYVVr4.js";import"./PdfViewerToolbar-DBLZOHyx.js";import"./Button-Kk03FIZS.js";import"./chevron-right-BArg7CUt.js";import"./Input-DP0PAzjj.js";import"./search-CwDPAivc.js";import"./spin-DRT8ANOt.js";import"./error-DrFA3py_.js";import"./withOsdkMetrics-C2Hl675L.js";import"./makeExternalStore-CRyGpLoG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
