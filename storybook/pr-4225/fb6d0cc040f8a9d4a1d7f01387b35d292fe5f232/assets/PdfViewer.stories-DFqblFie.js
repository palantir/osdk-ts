import{j as r,M as s}from"./iframe-qsGhK2hq.js";import{P as p}from"./pdf-viewer-D8I2JEam.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-GLUPYg2X.js";import"./preload-helper-Dwtn-olX.js";import"./PdfViewer-BdeHpy4H.js";import"./index-CajyUV5R.js";import"./BasePdfViewer-DPlW9FJ-.js";import"./BasePdfViewer.module.css-Bw_PZrcj.js";import"./PdfViewerAnnotationLayer-BFrwwZ4L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CGaJZpju.js";import"./PdfViewerOutlineSidebar-CtjHZPLw.js";import"./PdfViewerSidebarHeader-DrTbx33x.js";import"./useBaseUiId-BW-cbd-G.js";import"./useControlled-j-IY9Fng.js";import"./CompositeRoot-BUey8svy.js";import"./CompositeItem-DKwC-xxe.js";import"./ToolbarRootContext-BW1cRghw.js";import"./composite-bfuNMaa5.js";import"./svgIconContainer-DZkDzvg0.js";import"./PdfViewerSearchBar-DEAJcTPu.js";import"./chevron-up-DgggHDT9.js";import"./chevron-down-Dy2G7ibG.js";import"./cross-BtcvP4ej.js";import"./PdfViewerSidebar-K2yVmcLh.js";import"./index-BXOdJ4_3.js";import"./index-eqMoAQQt.js";import"./index-DEfkT-Bn.js";import"./PdfViewerToolbar-DZuTOZGA.js";import"./Button-DZOWyAnJ.js";import"./chevron-right-zx83-MCj.js";import"./Input-Czcl16E9.js";import"./search-BylB4pvS.js";import"./spin-BP__1U1H.js";import"./error-BE1KHtOw.js";import"./withOsdkMetrics-Cus8kp2l.js";import"./makeExternalStore-DSB7eaqh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
