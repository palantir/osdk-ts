import{j as r,M as s}from"./iframe-BDPC3MGU.js";import{P as p}from"./pdf-viewer-DTZj8pdi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DiwUdAbo.js";import"./preload-helper-DqLc1wpe.js";import"./PdfViewer-C2cSygsA.js";import"./index-wr-Wa-rJ.js";import"./BasePdfViewer-DYJYs1Xq.js";import"./BasePdfViewer.module.css-CzJT2RH7.js";import"./PdfViewerAnnotationLayer-BDQjeSXD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2WxcRBh.js";import"./PdfViewerOutlineSidebar-BX2ykg1i.js";import"./PdfViewerSidebarHeader-Deqy-g-B.js";import"./useBaseUiId-98Vlp7TA.js";import"./useControlled-BH2-CGJ0.js";import"./CompositeRoot-CRYYgIff.js";import"./CompositeItem-Glk6Ljpg.js";import"./ToolbarRootContext-gDYw7M9I.js";import"./composite-BmeraXkj.js";import"./svgIconContainer-BbA1ZoWr.js";import"./PdfViewerSearchBar-rEsrJ8hZ.js";import"./chevron-up-BRYc7wLQ.js";import"./chevron-down-B2ocyj_k.js";import"./cross-DYURuHsA.js";import"./PdfViewerSidebar-DpX3Z-BC.js";import"./index-DH6huj2W.js";import"./index-BCVo02gU.js";import"./index--VX9rzYc.js";import"./PdfViewerToolbar-B9dA0u9_.js";import"./Button-BuWPanNZ.js";import"./chevron-right-SEL_D816.js";import"./Input-q3l62r8C.js";import"./search-CHOuY8gu.js";import"./spin-BkxihDLE.js";import"./error-BZbzk8xv.js";import"./withOsdkMetrics-Dge8_qYA.js";import"./makeExternalStore-zlVMHsWj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
