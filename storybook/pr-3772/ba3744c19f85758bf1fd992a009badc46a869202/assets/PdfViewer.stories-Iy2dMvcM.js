import{j as r,M as s}from"./iframe-DkUlyVAk.js";import{P as p}from"./pdf-viewer-SQCx7jso.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-mI04yYKm.js";import"./preload-helper-Do3rx7tx.js";import"./PdfViewer-BFQAD_dW.js";import"./index-BKCxouDT.js";import"./BasePdfViewer-Bf3leu-Y.js";import"./BasePdfViewer.module.css-kMN_rKBw.js";import"./PdfViewerAnnotationLayer-BlGLEW8g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bmxtuwqz.js";import"./PdfViewerOutlineSidebar-B7tJ5Ej2.js";import"./PdfViewerSidebarHeader-EfxdByqI.js";import"./useBaseUiId-Ct2lb7hy.js";import"./useControlled-DQwmvUO6.js";import"./CompositeRoot-C2cBBfzl.js";import"./CompositeItem-C6x4Plfg.js";import"./ToolbarRootContext-H2xpDF0U.js";import"./composite-DFkzp6xD.js";import"./svgIconContainer-DXdte7hC.js";import"./PdfViewerSearchBar-B1lj0xZL.js";import"./chevron-up-D37Dfu9H.js";import"./chevron-down-C8H-X29U.js";import"./cross-NxNK5LVM.js";import"./PdfViewerSidebar-Ch4asynF.js";import"./index-2N4Mch0O.js";import"./index-C2qK1saS.js";import"./index-D2D5ykmi.js";import"./PdfViewerToolbar-CRm4iixG.js";import"./Button-YTCf-lQa.js";import"./chevron-right-B7UGHkgX.js";import"./Input-DEfnyfO2.js";import"./search-BtZqzqFW.js";import"./spin-DxZs0A-p.js";import"./error-Cxkq3yoq.js";import"./withOsdkMetrics-_-mYkqh_.js";import"./makeExternalStore-CrMBheh9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
