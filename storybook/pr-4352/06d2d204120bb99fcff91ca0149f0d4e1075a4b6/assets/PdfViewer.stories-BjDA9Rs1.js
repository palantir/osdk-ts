import{j as r,M as s}from"./iframe-w4y9aXDU.js";import{P as p}from"./pdf-viewer-BF9nPVl9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-vLt8rTlE.js";import"./preload-helper-CnLs-Hgu.js";import"./PdfViewer-CUB-tL-D.js";import"./index-Dt7u2oHj.js";import"./BasePdfViewer-CyUXN1hS.js";import"./BasePdfViewer.module.css-CnmDJvpk.js";import"./PdfViewerAnnotationLayer-COKYePTo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLr9oLaY.js";import"./PdfViewerOutlineSidebar-B7rPiVGz.js";import"./PdfViewerSidebarHeader-tFT7mkTa.js";import"./useBaseUiId-F1YYLfsj.js";import"./useControlled-C9ba4gpK.js";import"./CompositeRoot-Bdprc0c4.js";import"./CompositeItem-Cd8pgrRU.js";import"./ToolbarRootContext-D5jHJ_gp.js";import"./composite-B-RTr01b.js";import"./svgIconContainer-CmEhYz6E.js";import"./PdfViewerSearchBar-D3eso_Ak.js";import"./chevron-up-Cfyb7AwB.js";import"./chevron-down-BBcbr8vg.js";import"./cross-DXnz5KvW.js";import"./PdfViewerSidebar-D2EvOxsh.js";import"./index-OXOrABe5.js";import"./index-BIFcK0O4.js";import"./index-B0uCtLgl.js";import"./PdfViewerToolbar-G8smPmre.js";import"./Button-o-glHusr.js";import"./chevron-right-D7ExiVC-.js";import"./Input-O7Y8xsdh.js";import"./search-Cp34eK_v.js";import"./spin-CyDi2Dzc.js";import"./error-8BgSEFU8.js";import"./withOsdkMetrics-BEOTlVIH.js";import"./makeExternalStore-BvoAQS4K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
