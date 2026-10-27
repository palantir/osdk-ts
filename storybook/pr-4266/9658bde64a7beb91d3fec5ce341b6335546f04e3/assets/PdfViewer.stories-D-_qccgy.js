import{j as r,M as s}from"./iframe-BK92nj8O.js";import{P as p}from"./pdf-viewer-CInv32ux.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DA1j1-xU.js";import"./preload-helper-BzvFWRwm.js";import"./PdfViewer-Cdo9Bgrf.js";import"./index-Cp-oegvQ.js";import"./BasePdfViewer-D3e-HXL7.js";import"./BasePdfViewer.module.css-Dggn5z8m.js";import"./PdfViewerAnnotationLayer-BaHUesKb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChO90koN.js";import"./PdfViewerOutlineSidebar-CjAHz3uF.js";import"./PdfViewerSidebarHeader--KxVvST-.js";import"./useBaseUiId-DJzLMsdJ.js";import"./useControlled-D4vgYWXW.js";import"./CompositeRoot-DldYV1eq.js";import"./CompositeItem-BUqJx2UC.js";import"./ToolbarRootContext-DaxowF1A.js";import"./composite-CUOp8zR0.js";import"./svgIconContainer-CUCnXzLA.js";import"./PdfViewerSearchBar-uMfYxx5t.js";import"./chevron-up-CIbPOuc_.js";import"./chevron-down-DFEA5aIq.js";import"./cross-CQouWOVo.js";import"./PdfViewerSidebar-DeXwIwrF.js";import"./index-D33Byr__.js";import"./index-CRvcO-Mq.js";import"./index-Vq2K6jMQ.js";import"./PdfViewerToolbar-DK2kbeUH.js";import"./Button-CLd3GlZq.js";import"./chevron-right-BLYgI0JZ.js";import"./Input-R7iFBYJw.js";import"./search-Cx7lcCpX.js";import"./spin-Ca9xxKIf.js";import"./error-CpelSvOO.js";import"./withOsdkMetrics-F47lPElZ.js";import"./makeExternalStore-C6TfNWC7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
