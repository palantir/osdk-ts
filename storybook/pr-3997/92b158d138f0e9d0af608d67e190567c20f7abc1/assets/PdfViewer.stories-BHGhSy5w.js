import{j as r,M as s}from"./iframe-CxUFDRLk.js";import{P as p}from"./pdf-viewer-C7pAT4ca.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXBkmcIH.js";import"./preload-helper-BOCVFqPP.js";import"./PdfViewer-Di04DQiy.js";import"./index-D3P2PnfT.js";import"./BasePdfViewer-BZKGnBwj.js";import"./BasePdfViewer.module.css-K1nydPuK.js";import"./PdfViewerAnnotationLayer-V_1V33mS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DukEMzAf.js";import"./PdfViewerOutlineSidebar-BQwEeTdT.js";import"./PdfViewerSidebarHeader-DksbqRuM.js";import"./useBaseUiId-B_I-AE6w.js";import"./useControlled-i_PgyXUB.js";import"./CompositeRoot-D76SJMup.js";import"./CompositeItem-Bm2eQNpM.js";import"./ToolbarRootContext-DgN8QGqs.js";import"./composite-C6x_RQDW.js";import"./svgIconContainer-lhP_uqYt.js";import"./PdfViewerSearchBar-gzjDB-kn.js";import"./chevron-up-m4GjfVhN.js";import"./chevron-down-CGVLA0Cv.js";import"./cross-BABVEZtV.js";import"./PdfViewerSidebar-BYsJdo7F.js";import"./index-Dh-mEvCI.js";import"./index-CfF-bhSp.js";import"./index-BzoE9HQS.js";import"./PdfViewerToolbar-BwNf96zt.js";import"./Button-DfD1hoUH.js";import"./chevron-right-Ez3WupoT.js";import"./Input-BnQ1Pqm-.js";import"./search-Bycz8Mke.js";import"./spin-1pkT-4VB.js";import"./error-D-IJQZZn.js";import"./withOsdkMetrics-CPTjHpfw.js";import"./makeExternalStore-YOPDBlSx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
