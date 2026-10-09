import{j as r,M as s}from"./iframe-DIQwlBGw.js";import{P as p}from"./pdf-viewer-C5Fd83kP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DeAknFU6.js";import"./preload-helper-DCZh2qZU.js";import"./PdfViewer-OK9PkWWO.js";import"./index-BMg1YwPI.js";import"./BasePdfViewer-BX1IBjM3.js";import"./BasePdfViewer.module.css-SuqZPPzk.js";import"./PdfViewerAnnotationLayer-C9OI_oVN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--Pbe85Rv.js";import"./PdfViewerOutlineSidebar-0i4772Ci.js";import"./PdfViewerSidebarHeader-ptjqiGZT.js";import"./useBaseUiId-mRekfqkE.js";import"./useControlled-CIA12Xby.js";import"./CompositeRoot-DinkaM13.js";import"./CompositeItem-D6nOF9ZG.js";import"./ToolbarRootContext-D5pzp3U-.js";import"./composite-B2M76Ume.js";import"./svgIconContainer-nWXxjIgM.js";import"./PdfViewerSearchBar-BICWKBwH.js";import"./chevron-up-Dxk9HDhi.js";import"./chevron-down-Be7rb41D.js";import"./cross-D0qgRA8s.js";import"./PdfViewerSidebar-DS_Ea1OX.js";import"./index-DjZsV1fi.js";import"./index-DtMGyB9I.js";import"./index-BuSKlV2e.js";import"./PdfViewerToolbar-CidIjp8K.js";import"./Button-VL7ULnuX.js";import"./chevron-right-BY_M_5fb.js";import"./Input-BemJFGwg.js";import"./search-Tzmhdcy6.js";import"./spin-vkD_HgOI.js";import"./error-Bhb1P9AB.js";import"./withOsdkMetrics-CrDHFYla.js";import"./makeExternalStore-C-tnPbL7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
