import{j as r,M as s}from"./iframe-Bet7ZyCm.js";import{P as p}from"./pdf-viewer-BGCakB3D.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3P6IOKrK.js";import"./preload-helper-BUkBrZyY.js";import"./PdfViewer-CQoBljby.js";import"./index-DjVLxSFI.js";import"./BasePdfViewer-Dp6u7osA.js";import"./BasePdfViewer.module.css-CxoIMRaj.js";import"./PdfViewerAnnotationLayer-BDeNeYkn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CiPLi4zb.js";import"./PdfViewerOutlineSidebar-CLE77pOS.js";import"./PdfViewerSidebarHeader-Cjv_jJ8V.js";import"./useBaseUiId-CsxMin3O.js";import"./useControlled-COCV5_w3.js";import"./CompositeRoot-C-l802JC.js";import"./CompositeItem-DTquphkU.js";import"./ToolbarRootContext-DNj0Wk9x.js";import"./composite-CRapEzeJ.js";import"./svgIconContainer-Barh-7SS.js";import"./PdfViewerSearchBar-DY-VZ0s8.js";import"./chevron-up-BXIGlwB-.js";import"./chevron-down-5KX1Vgx1.js";import"./cross-BeELKFUT.js";import"./PdfViewerSidebar-CsUFj65W.js";import"./index-BcSOkjj6.js";import"./index-Dbf65m0z.js";import"./index-BTuCJIed.js";import"./PdfViewerToolbar-DGjNV2Mu.js";import"./Button-DA30xwtA.js";import"./chevron-right-B0ZgRfaY.js";import"./Input-C3dR_yK9.js";import"./search-DarFPo_N.js";import"./spin-BeiACEdq.js";import"./error-Y0ypiKIG.js";import"./withOsdkMetrics-8BIUQCxd.js";import"./makeExternalStore-BZZ89cDU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
