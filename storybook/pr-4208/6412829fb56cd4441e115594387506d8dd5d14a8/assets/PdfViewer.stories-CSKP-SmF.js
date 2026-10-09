import{j as r,M as s}from"./iframe-CZ4qo6TA.js";import{P as p}from"./pdf-viewer-BN1sL0AH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B3TSW4-p.js";import"./preload-helper-D40KpOHN.js";import"./PdfViewer-DnYUO2Q1.js";import"./index-B1VXkh3r.js";import"./BasePdfViewer-B9llHesL.js";import"./BasePdfViewer.module.css-Bt-QJVHn.js";import"./PdfViewerAnnotationLayer-CoPQ_Ps9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFX6bNJ8.js";import"./PdfViewerOutlineSidebar-UN3cyi-P.js";import"./PdfViewerSidebarHeader-Bt3zqSoK.js";import"./useBaseUiId-DO15ulBB.js";import"./useControlled-Cx3Ij5Mu.js";import"./CompositeRoot-CB2bKrqb.js";import"./CompositeItem-deIgJifw.js";import"./ToolbarRootContext-Bml6QJba.js";import"./composite-CODWVvxq.js";import"./svgIconContainer-CMijeJNG.js";import"./PdfViewerSearchBar-DJE0WWma.js";import"./chevron-up-By31A5v7.js";import"./chevron-down-BdE_cbUf.js";import"./cross-BdgbMHZq.js";import"./PdfViewerSidebar-DmHdXdw-.js";import"./index-Dn5MssWf.js";import"./index-CZQei39W.js";import"./index-SZhdlURA.js";import"./PdfViewerToolbar-BZw-uvaT.js";import"./Button-BtVUzCrS.js";import"./chevron-right-BIxFwmuK.js";import"./Input-RFD7u_HI.js";import"./search-DMBvmHVz.js";import"./spin-D01q0Cjy.js";import"./error-CVxsYLyQ.js";import"./withOsdkMetrics-BKNh995o.js";import"./makeExternalStore-ChVKEbDO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
