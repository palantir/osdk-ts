import{j as r,M as s}from"./iframe-Cxs4teez.js";import{P as p}from"./pdf-viewer-swQvRsSG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-8yVyRg2s.js";import"./preload-helper-Bd6Vgg8g.js";import"./PdfViewer-CqxCgyrH.js";import"./index-C3kmvWsS.js";import"./BasePdfViewer-DIuCWME5.js";import"./BasePdfViewer.module.css-D8v6yBUs.js";import"./PdfViewerAnnotationLayer-BwVyFrhm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZ-FrdeJ.js";import"./PdfViewerOutlineSidebar-w-_uuIDy.js";import"./PdfViewerSidebarHeader-CJjKz96g.js";import"./useBaseUiId-DWXmNFpC.js";import"./useControlled-Dc-gXlj3.js";import"./CompositeRoot-BbpRV3hw.js";import"./CompositeItem-4Ik-gd3d.js";import"./ToolbarRootContext-BD8ceMmu.js";import"./composite-b3NzNsDh.js";import"./svgIconContainer-JiM41EbN.js";import"./PdfViewerSearchBar-cmDZB7Lo.js";import"./chevron-up-D6Etz7I_.js";import"./chevron-down-DR1MLtBA.js";import"./cross-D5j5wcq7.js";import"./PdfViewerSidebar-qQaOycbU.js";import"./index-CTzs5x76.js";import"./index-C7HiqnbK.js";import"./index-WVEl5G15.js";import"./PdfViewerToolbar-hyyd87xX.js";import"./Button-B-HuJTwa.js";import"./chevron-right-Dff7I2nR.js";import"./Input-BYExG4yH.js";import"./search-BrqbiSOv.js";import"./spin-U25dJV0l.js";import"./error-CSDPFrAs.js";import"./withOsdkMetrics-BMMQ7JDA.js";import"./makeExternalStore-Db6eeeft.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
