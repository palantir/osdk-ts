import{j as r,M as s}from"./iframe-BCHKv9OM.js";import{P as p}from"./pdf-viewer-De2mKOJs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2hRf7Ql.js";import"./preload-helper-VdwPsvvy.js";import"./PdfViewer-BK6VGx0-.js";import"./index-Bwt2nvxG.js";import"./BasePdfViewer-BO2-RKoK.js";import"./BasePdfViewer.module.css-Cd0IZ-Vl.js";import"./PdfViewerAnnotationLayer-DobYT3Cd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXWlwkG1.js";import"./PdfViewerOutlineSidebar-VPFePi7J.js";import"./PdfViewerSidebarHeader-DCgeQqC9.js";import"./useBaseUiId-D9fN6cGs.js";import"./useControlled-BHnn3yAy.js";import"./CompositeRoot-CVWrQ93x.js";import"./CompositeItem-BMLR6r4a.js";import"./ToolbarRootContext-CwhQOyHm.js";import"./composite-C-pKBr51.js";import"./svgIconContainer-DyfXuRzr.js";import"./PdfViewerSearchBar-BhhvYpkm.js";import"./chevron-up-BDepI66l.js";import"./chevron-down-BKy1nerW.js";import"./cross-2PepCGpt.js";import"./PdfViewerSidebar-BicFIY-X.js";import"./index-C5vlMEFw.js";import"./index-BkIhD60u.js";import"./index-z0BP5rZZ.js";import"./PdfViewerToolbar-CW5LwauO.js";import"./Button-C3RFGMgN.js";import"./chevron-right-ReD_HBZj.js";import"./Input-sKzdlVIX.js";import"./search-DF6xe5EC.js";import"./spin-DPH9mYj3.js";import"./error-6YNMu2Ib.js";import"./withOsdkMetrics-DIduflDc.js";import"./makeExternalStore-CbzDxk6X.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
