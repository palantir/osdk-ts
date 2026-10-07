import{j as r,M as s}from"./iframe-CQxG3cCC.js";import{P as p}from"./pdf-viewer-DuGfOj9_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BueoRRVH.js";import"./preload-helper-BQhDaTv1.js";import"./PdfViewer-DKpDeuVA.js";import"./index-DxGOzCTx.js";import"./BasePdfViewer-DnpvPbMZ.js";import"./BasePdfViewer.module.css-BfCIxPTg.js";import"./PdfViewerAnnotationLayer-Cz6t2usT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CohHdUnz.js";import"./PdfViewerOutlineSidebar-DBSRlzfm.js";import"./PdfViewerSidebarHeader-CB5KJU70.js";import"./useBaseUiId-Dt5sayHU.js";import"./useControlled-DBmpvbx5.js";import"./CompositeRoot-UaBOTu3G.js";import"./CompositeItem-D3C5uQt7.js";import"./ToolbarRootContext-Dp2y2zy-.js";import"./composite-UnoLR2xI.js";import"./svgIconContainer-BhtEOhwo.js";import"./PdfViewerSearchBar-4rEgf2yX.js";import"./chevron-up-C2bbOhFH.js";import"./chevron-down-C-j45_ex.js";import"./cross-csp5HbTE.js";import"./PdfViewerSidebar-ClfvdmEv.js";import"./index-DRHTc7Po.js";import"./index-srIEGZLU.js";import"./index-B8ySRxPM.js";import"./PdfViewerToolbar-Bpu-ZyTK.js";import"./Button-D1svI8Md.js";import"./chevron-right-Dwy_g4-Z.js";import"./Input-IKU9NsaD.js";import"./search-XsOT8fX6.js";import"./spin-CBBFF0_-.js";import"./error-DvI5aFF7.js";import"./withOsdkMetrics-CA86lKjW.js";import"./makeExternalStore-ez4Tjxbk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
