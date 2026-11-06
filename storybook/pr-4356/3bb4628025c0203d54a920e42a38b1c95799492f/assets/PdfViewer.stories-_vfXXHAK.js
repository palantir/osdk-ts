import{j as r,M as s}from"./iframe-BL-M0CJv.js";import{P as p}from"./pdf-viewer-OSG7gOf2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBTqkHOf.js";import"./preload-helper-C0zkmkXS.js";import"./PdfViewer-DgQKu1tz.js";import"./index-Db0LO39w.js";import"./BasePdfViewer-BP8bI_kl.js";import"./BasePdfViewer.module.css-DBmeaex8.js";import"./PdfViewerAnnotationLayer-OhWGJbKt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CoNnB-Vh.js";import"./PdfViewerOutlineSidebar-BqkmquLV.js";import"./PdfViewerSidebarHeader-Bk7os_Ao.js";import"./useBaseUiId-TPr_qZ_1.js";import"./useControlled-CKiiitZS.js";import"./CompositeRoot-CepNNprH.js";import"./CompositeItem-XRZQ4yN6.js";import"./ToolbarRootContext-D7bnZbhq.js";import"./composite-Dx0NSDUH.js";import"./svgIconContainer-BX2v_cR0.js";import"./PdfViewerSearchBar-CuqqluiH.js";import"./chevron-up-BgUSDG1D.js";import"./chevron-down-5PA4SDET.js";import"./cross-x8jhhqfq.js";import"./PdfViewerSidebar-7dfTRQ5W.js";import"./index-BFvrjhEh.js";import"./index-Bt9OIo2s.js";import"./index-DIwpmFcE.js";import"./PdfViewerToolbar-CPLsSMob.js";import"./Button-CC9Ubwa3.js";import"./chevron-right-B5fRg1vB.js";import"./Input-EsCXPtCp.js";import"./search-BiWkoGJW.js";import"./spin-KJeevf4k.js";import"./error-BIo7wVIV.js";import"./withOsdkMetrics-BYapBjuA.js";import"./makeExternalStore-DG0rmoX7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
