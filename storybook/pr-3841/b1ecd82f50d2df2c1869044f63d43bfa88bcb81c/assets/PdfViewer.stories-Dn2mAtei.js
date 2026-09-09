import{j as r,M as s}from"./iframe-CnB-nyYL.js";import{P as p}from"./pdf-viewer-DEeQtKbK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DxgPgbj7.js";import"./preload-helper-Q1kWDOMf.js";import"./PdfViewer-C9tMjnHb.js";import"./index-BxeA_yCq.js";import"./BasePdfViewer-CBCH9ivj.js";import"./BasePdfViewer.module.css-BuQRuGwn.js";import"./PdfViewerAnnotationLayer-DlYbPEUY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKPMFrKD.js";import"./PdfViewerOutlineSidebar-DP_vYxFi.js";import"./PdfViewerSidebarHeader-COd7nTF3.js";import"./useBaseUiId-CHGGJD75.js";import"./useControlled-Dq4TuQGF.js";import"./CompositeRoot-BQtokc11.js";import"./CompositeItem-BvTU3-ui.js";import"./ToolbarRootContext-BGykyxF8.js";import"./composite-rNpDadLs.js";import"./svgIconContainer-C7kPmSlO.js";import"./PdfViewerSearchBar-B5F9dS2G.js";import"./chevron-up-oCn_TAwO.js";import"./chevron-down-CnfHtb5Z.js";import"./cross-B8WrElap.js";import"./PdfViewerSidebar-D5MWPWWI.js";import"./index-DvWejoPn.js";import"./index-B_mCg7VC.js";import"./index-CRK0fjNK.js";import"./PdfViewerToolbar-DeALRQPl.js";import"./Button-BB8T2OOy.js";import"./chevron-right-BZvzEw8C.js";import"./Input-BnfiihnE.js";import"./search-B_Ak-sTr.js";import"./spin-DOvTbW9x.js";import"./error-DNv14KIg.js";import"./withOsdkMetrics-CruR8e4i.js";import"./makeExternalStore-BA4R21ZY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
