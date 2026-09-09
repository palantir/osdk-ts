import{j as r,M as s}from"./iframe-CxIn-rG9.js";import{P as p}from"./pdf-viewer-Dp4dl6CH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D4UZn9Y6.js";import"./preload-helper-X6xNaBfi.js";import"./PdfViewer-Bepcz4ln.js";import"./index-DFQNuVuF.js";import"./BasePdfViewer-fdVswVws.js";import"./BasePdfViewer.module.css-BHqzb6RZ.js";import"./PdfViewerAnnotationLayer-DOjV-8fI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW_FGJPb.js";import"./PdfViewerOutlineSidebar-CWUh-O-7.js";import"./PdfViewerSidebarHeader-D5XmCb7C.js";import"./useBaseUiId-B2Xt2brM.js";import"./useControlled-DojYWrxF.js";import"./CompositeRoot-C-9VwybT.js";import"./CompositeItem-AwSF7S2C.js";import"./ToolbarRootContext-O9MvMR3V.js";import"./composite-BqqFykrE.js";import"./svgIconContainer-c9igszEF.js";import"./PdfViewerSearchBar-DXWmZ_PA.js";import"./chevron-up-A5u2TI9Q.js";import"./chevron-down-kODRI2uy.js";import"./cross-TMn9ETj9.js";import"./PdfViewerSidebar-OaBt_vg7.js";import"./index-K4d5SQDR.js";import"./index-DDGK9wch.js";import"./index-CC8ad_XL.js";import"./PdfViewerToolbar-Bm71mT4i.js";import"./Button-B9HFamKv.js";import"./chevron-right-COE1lBQ5.js";import"./Input-DMEekJro.js";import"./search-jqi3oncJ.js";import"./spin-2DV3CHk-.js";import"./error-LS_wz8gU.js";import"./withOsdkMetrics-Ci9E-Vmh.js";import"./makeExternalStore-CFux59qT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
