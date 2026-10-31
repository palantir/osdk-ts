import{j as r,M as s}from"./iframe-C9aInfce.js";import{P as p}from"./pdf-viewer-C01wDK5s.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXHt3fwj.js";import"./preload-helper-PMI8cRcX.js";import"./PdfViewer-CCQJVx-z.js";import"./index-Cr0L3GZN.js";import"./BasePdfViewer-DvIbcBmr.js";import"./BasePdfViewer.module.css-B6VaHPHU.js";import"./PdfViewerAnnotationLayer-CBweUEWd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVLKkxds.js";import"./PdfViewerOutlineSidebar-BXWfxoGB.js";import"./PdfViewerSidebarHeader-BNz3zSCZ.js";import"./useBaseUiId-bh5ywVzc.js";import"./useControlled-BMW5V9nZ.js";import"./CompositeRoot-B5sKgSby.js";import"./CompositeItem-DcXO7kaY.js";import"./ToolbarRootContext-BuD4rpNO.js";import"./composite-CLAAs_xp.js";import"./svgIconContainer-BJqGJbKn.js";import"./PdfViewerSearchBar-DOV7deuR.js";import"./chevron-up-Dlj0s1iI.js";import"./chevron-down-CAB1YUBN.js";import"./cross-DetncErB.js";import"./PdfViewerSidebar-Ctl219Bu.js";import"./index-hG-BfAMR.js";import"./index-6S-kg2yi.js";import"./index-ScvUSFZz.js";import"./PdfViewerToolbar-BkxqbrWY.js";import"./Button-DLimHkL6.js";import"./chevron-right-BPFrMwE8.js";import"./Input-CG7QoG-N.js";import"./search-DFxfowIj.js";import"./spin-DBnXQfVA.js";import"./error-CwJEBYlM.js";import"./withOsdkMetrics-7XGlhu7o.js";import"./makeExternalStore-CqZkZ6X0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
