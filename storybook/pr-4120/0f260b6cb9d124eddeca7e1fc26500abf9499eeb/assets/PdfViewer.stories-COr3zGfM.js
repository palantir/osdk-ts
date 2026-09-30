import{j as r,M as s}from"./iframe-D_LKzUXQ.js";import{P as p}from"./pdf-viewer-CC_b40oS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CEgO17E2.js";import"./preload-helper-2fv74GlU.js";import"./PdfViewer-fZsgWkMS.js";import"./index-BPEb3ehC.js";import"./BasePdfViewer-BXxCjPKp.js";import"./BasePdfViewer.module.css-Bkb5Ztpx.js";import"./PdfViewerAnnotationLayer-e4ycQRci.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMoOdfTM.js";import"./PdfViewerOutlineSidebar-DRIJXKo5.js";import"./PdfViewerSidebarHeader-BTTY5xft.js";import"./useBaseUiId-BXLolyby.js";import"./useControlled-Dzikzr9a.js";import"./CompositeRoot-Cp_KYciN.js";import"./CompositeItem-BWjfeaLs.js";import"./ToolbarRootContext-CaB66j5D.js";import"./composite-5BerH0eb.js";import"./svgIconContainer-DG_1Q-tY.js";import"./PdfViewerSearchBar--ryuEkki.js";import"./chevron-up-aqqb7SuA.js";import"./chevron-down-Cbs_q2nL.js";import"./cross-CCKxEsOh.js";import"./PdfViewerSidebar-WRivu582.js";import"./index-Ovo3sWxh.js";import"./index-DNSIml9_.js";import"./index-mwOrEPHi.js";import"./PdfViewerToolbar-DfhGwj-Z.js";import"./Button-o_hXJy7p.js";import"./chevron-right-QTmKQNPL.js";import"./Input-CHcldx9v.js";import"./search-C0zqzJLG.js";import"./spin-C49dxVOH.js";import"./error-CNMY2Oh1.js";import"./withOsdkMetrics-CJQ6Lm1u.js";import"./makeExternalStore-WNQzhlnt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
