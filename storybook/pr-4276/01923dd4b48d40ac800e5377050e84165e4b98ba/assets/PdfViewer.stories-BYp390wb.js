import{j as r,M as s}from"./iframe-CvtnXpWI.js";import{P as p}from"./pdf-viewer-C92FxFd-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cftc23c-.js";import"./preload-helper-CRqjKMTV.js";import"./PdfViewer-BryxGIF_.js";import"./index-jeLRGmVS.js";import"./BasePdfViewer-BSfM8a_l.js";import"./BasePdfViewer.module.css-Cu9gMQiv.js";import"./PdfViewerAnnotationLayer-DdfflrMf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B4OGqnBN.js";import"./PdfViewerOutlineSidebar-KEhSoJEM.js";import"./PdfViewerSidebarHeader-u8m1GYsT.js";import"./useBaseUiId-Dw1uN2EV.js";import"./useControlled-D1NesXJk.js";import"./CompositeRoot-D2A6dkaJ.js";import"./CompositeItem-C6nFI7h_.js";import"./ToolbarRootContext-ChZi5vEo.js";import"./composite-E-ohJHTb.js";import"./svgIconContainer-C107_u4J.js";import"./PdfViewerSearchBar-DFRexWcJ.js";import"./chevron-up-C7G3TpCS.js";import"./chevron-down-C3-hEeSa.js";import"./cross-CaW9jTLZ.js";import"./PdfViewerSidebar-DIj5kJ2a.js";import"./index-skLFeqF3.js";import"./index-BtiKNh2b.js";import"./index-D-06_23q.js";import"./PdfViewerToolbar-BnhDyWxp.js";import"./Button-UnInDvPq.js";import"./chevron-right-Drxq8VY_.js";import"./Input-zhgReKbn.js";import"./search-BIqi2et5.js";import"./spin-Cpu38AAb.js";import"./error-BIezve7k.js";import"./withOsdkMetrics-CRjxXxf-.js";import"./makeExternalStore-DHDRqvun.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
