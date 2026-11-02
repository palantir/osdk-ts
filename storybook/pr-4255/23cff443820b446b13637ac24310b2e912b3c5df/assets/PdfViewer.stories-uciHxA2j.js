import{j as r,M as s}from"./iframe-NFk5yTCl.js";import{P as p}from"./pdf-viewer-akELPS8J.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCrb2wWv.js";import"./preload-helper-DnA7Db5H.js";import"./PdfViewer-DqVgcPx7.js";import"./index-BgVD2xhp.js";import"./BasePdfViewer-Bnr6bmb5.js";import"./BasePdfViewer.module.css-CDrBftck.js";import"./PdfViewerAnnotationLayer-BbLiXeNu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BkuLJUdd.js";import"./PdfViewerOutlineSidebar-FxXUK3Kg.js";import"./PdfViewerSidebarHeader-BDxBJWM9.js";import"./useBaseUiId-DI_-ZcoF.js";import"./useControlled-fqF1Rj4F.js";import"./CompositeRoot-8eNQV2oW.js";import"./CompositeItem-ZF-3iBYW.js";import"./ToolbarRootContext-BwRqIVN-.js";import"./composite-CPOhVi5o.js";import"./svgIconContainer-BhRqV9Gd.js";import"./PdfViewerSearchBar-Cr6-5iSt.js";import"./chevron-up-DEfJdtC0.js";import"./chevron-down-Bk9vMPo2.js";import"./cross-DRob9Y80.js";import"./PdfViewerSidebar-B1bpgBcT.js";import"./index-ywB7GnFl.js";import"./index-BMMU7vD9.js";import"./index-DvY3t6Bt.js";import"./PdfViewerToolbar-DZPRJua1.js";import"./Button-BVh6l18o.js";import"./chevron-right-BKe59PXR.js";import"./Input-BW26RmLS.js";import"./search-DY6YLRUw.js";import"./spin-DLb6a6Dp.js";import"./error-B1DXlG8k.js";import"./withOsdkMetrics-D_cxEN1y.js";import"./makeExternalStore-MEUeb9Nq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
