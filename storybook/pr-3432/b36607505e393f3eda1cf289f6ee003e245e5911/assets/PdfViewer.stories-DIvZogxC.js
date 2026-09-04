import{j as r,M as s}from"./iframe-D8UHlLM-.js";import{P as p}from"./pdf-viewer-BmGlQRux.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-6rpTEiQE.js";import"./preload-helper-B2drndpz.js";import"./PdfViewer-CkcZuhl8.js";import"./index-2pZAxqQ8.js";import"./BasePdfViewer-_wtKPuo4.js";import"./BasePdfViewer.module.css-Bzdc4dpB.js";import"./PdfViewerAnnotationLayer-Bp4bkpM7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxeswAbG.js";import"./PdfViewerOutlineSidebar-sFhWVViZ.js";import"./PdfViewerSidebarHeader-DWL9eCn_.js";import"./useBaseUiId-B83MHcbd.js";import"./useControlled-DT-SiHVq.js";import"./CompositeRoot-qmr0rnO8.js";import"./CompositeItem-DhPX7cGM.js";import"./ToolbarRootContext-Df4LXHpy.js";import"./composite-BYq1KtFB.js";import"./svgIconContainer-Ckme5BEx.js";import"./PdfViewerSearchBar-KSJV5ms4.js";import"./chevron-up-CE9ztF7n.js";import"./chevron-down-B03gIwVp.js";import"./cross-zCnfpZEf.js";import"./PdfViewerSidebar-DI0GYcT1.js";import"./index-CwPCwgJ9.js";import"./index-DrmX_pzR.js";import"./index-BrcjEskR.js";import"./PdfViewerToolbar-RoaCbTuL.js";import"./Button-SSlA87_g.js";import"./chevron-right-B9f07h6s.js";import"./Input-BHmmIdQN.js";import"./search-DmARyhAU.js";import"./spin-D0BfBvbg.js";import"./error-CsDtSshc.js";import"./withOsdkMetrics-BtMau99A.js";import"./makeExternalStore-CDgVz-Cr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
