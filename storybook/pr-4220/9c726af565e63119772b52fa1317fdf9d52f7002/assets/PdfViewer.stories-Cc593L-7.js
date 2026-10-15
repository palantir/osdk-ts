import{j as r,M as s}from"./iframe-C35uGTor.js";import{P as p}from"./pdf-viewer-8N_KRsVz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhfdMZ3D.js";import"./preload-helper-F3EFc52l.js";import"./PdfViewer-CxEZVnBu.js";import"./index-Dc24XYXq.js";import"./BasePdfViewer-deEKc_h5.js";import"./BasePdfViewer.module.css-BfnQiNJk.js";import"./PdfViewerAnnotationLayer-CLKF_kLo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0PUgtDf.js";import"./PdfViewerOutlineSidebar-mMGlO94V.js";import"./PdfViewerSidebarHeader-C6x4Garo.js";import"./useBaseUiId-D-k3osuz.js";import"./useControlled-jxUnEnFw.js";import"./CompositeRoot-mIjcTFAf.js";import"./CompositeItem-Cst7sX19.js";import"./ToolbarRootContext-Do8xptiZ.js";import"./composite-C_6udYfh.js";import"./svgIconContainer-BAWtvYDY.js";import"./PdfViewerSearchBar-CrQw_Blm.js";import"./chevron-up-Dv_TX_Gq.js";import"./chevron-down-CyTbMtgy.js";import"./cross-C0_UaP8E.js";import"./PdfViewerSidebar-vLASaWVA.js";import"./index-CQ0b7fbb.js";import"./index-DRW9cQCp.js";import"./index-Dgf1QELO.js";import"./PdfViewerToolbar-DO8uG9aO.js";import"./Button-BAtng8PD.js";import"./chevron-right-C2mcN-Ak.js";import"./Input-CtTyrSxh.js";import"./search-Omk4RfaQ.js";import"./spin-BBS1BwVt.js";import"./error-BP_tygeo.js";import"./withOsdkMetrics-BEBYlr-F.js";import"./makeExternalStore-ROa8cnCZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
