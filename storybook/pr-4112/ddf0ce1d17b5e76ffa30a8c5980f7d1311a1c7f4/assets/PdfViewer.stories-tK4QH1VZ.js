import{j as r,M as s}from"./iframe-D8QP41pb.js";import{P as p}from"./pdf-viewer-BvfI0OrN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BF6Zxqgk.js";import"./preload-helper-rYx5aepV.js";import"./PdfViewer-BRCjjTu8.js";import"./index-ptxv2enP.js";import"./BasePdfViewer-BZ_RdYIl.js";import"./BasePdfViewer.module.css-eCWsBu12.js";import"./PdfViewerAnnotationLayer-mgyORvZU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2Isfxtd.js";import"./PdfViewerOutlineSidebar-Dd9Bi3Ys.js";import"./PdfViewerSidebarHeader-DgZihHCE.js";import"./useBaseUiId-BoqMbBaF.js";import"./useControlled-G3ngQ_8d.js";import"./CompositeRoot-CQ-YvIjo.js";import"./CompositeItem-nSbVFhm7.js";import"./ToolbarRootContext-DDihycVp.js";import"./composite-sgwSF-wx.js";import"./svgIconContainer-CRypdVCt.js";import"./PdfViewerSearchBar-DMWEGUy0.js";import"./chevron-up-ChXzB2Ds.js";import"./chevron-down-7YXmtC0t.js";import"./cross-C4B55KNt.js";import"./PdfViewerSidebar-CE8bMB3T.js";import"./index-BOgqeeRL.js";import"./index-Cgw2ueis.js";import"./index-Dng6rJam.js";import"./PdfViewerToolbar-Czc1JFwZ.js";import"./Button-CyBwq7g0.js";import"./chevron-right-CWJtd49o.js";import"./Input-lEEPXcpp.js";import"./search-C3wepv5K.js";import"./spin-IRdGEnVi.js";import"./error-D-e6D9Uk.js";import"./withOsdkMetrics-nBhke6l1.js";import"./makeExternalStore-DKTVVSUo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
