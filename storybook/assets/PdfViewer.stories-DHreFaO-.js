import{j as r,M as s}from"./iframe-BTVc0NfO.js";import{P as p}from"./pdf-viewer-BZSFx09H.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-lZ4wit7w.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CPGIeLit.js";import"./index-CHKL9w9V.js";import"./BasePdfViewer-B_7Z2lgu.js";import"./BasePdfViewer.module.css-BWyX4Gfm.js";import"./PdfViewerAnnotationLayer-CNCH_rUw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGtcPghK.js";import"./PdfViewerOutlineSidebar-afCbmoPv.js";import"./PdfViewerSidebarHeader-B7Hj8-FB.js";import"./useBaseUiId-CZsgbpdM.js";import"./useControlled-CtWOXhfs.js";import"./CompositeRoot-D1Q97Q2-.js";import"./CompositeItem-Ccapx6OP.js";import"./ToolbarRootContext-BluceK63.js";import"./composite-C9Vb183y.js";import"./svgIconContainer-CnMTzFv5.js";import"./PdfViewerSearchBar-nwYaT5le.js";import"./chevron-up-CFoSF6ZV.js";import"./chevron-down-Dp9CmW78.js";import"./cross-B5VTNSsk.js";import"./PdfViewerSidebar-t5ROLiT0.js";import"./index-Crp7dURd.js";import"./index-C2BuQfAN.js";import"./index-NKm1JDXX.js";import"./PdfViewerToolbar-6sucZiC8.js";import"./Button-wiKLARtU.js";import"./chevron-right-BRmoBY63.js";import"./Input-C8rOi6ap.js";import"./search-F6eLyO1Y.js";import"./spin-dxA69nfP.js";import"./error-wP2V0esL.js";import"./withOsdkMetrics-WJQAY5-z.js";import"./makeExternalStore-DQnWSZhz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
