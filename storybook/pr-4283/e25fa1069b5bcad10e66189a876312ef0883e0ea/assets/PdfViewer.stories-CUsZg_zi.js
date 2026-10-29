import{j as r,M as s}from"./iframe-CYk-VOyX.js";import{P as p}from"./pdf-viewer--64sxTPG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-kLBN9Xuu.js";import"./preload-helper-SkgcqAwO.js";import"./PdfViewer-CwTTTCrb.js";import"./index-SBfcRZ8A.js";import"./BasePdfViewer-CbIhqmXY.js";import"./BasePdfViewer.module.css-BRROD9pK.js";import"./PdfViewerAnnotationLayer-Dr559Glk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DmjdvCCb.js";import"./PdfViewerOutlineSidebar-CPZJy2cR.js";import"./PdfViewerSidebarHeader-B2Dqcg3T.js";import"./useBaseUiId-DaFkg2Hs.js";import"./useControlled-C7TGm_r4.js";import"./CompositeRoot-CZBch66U.js";import"./CompositeItem-CaDSOm5y.js";import"./ToolbarRootContext--t9DiEt8.js";import"./composite-BKwpvwkR.js";import"./svgIconContainer-jVuUMFBU.js";import"./PdfViewerSearchBar-_cW2qg5J.js";import"./chevron-up-Dk7oDl7e.js";import"./chevron-down-Bs06bZ_z.js";import"./cross-DMsanrWV.js";import"./PdfViewerSidebar-DcuU8g_j.js";import"./index-DHPPBEA9.js";import"./index-C_yRwNB9.js";import"./index-BIIvDw_e.js";import"./PdfViewerToolbar-C5VeHhko.js";import"./Button-CExSo-UX.js";import"./chevron-right-PpliS53s.js";import"./Input-D-JL81JO.js";import"./search-cR64-3Tm.js";import"./spin-DyUoKwhU.js";import"./error-zC5vfcSr.js";import"./withOsdkMetrics-BJbglULT.js";import"./makeExternalStore-B8yIQpmX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
