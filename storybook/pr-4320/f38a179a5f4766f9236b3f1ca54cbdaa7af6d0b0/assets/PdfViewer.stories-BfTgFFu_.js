import{j as r,M as s}from"./iframe-DvvsknHZ.js";import{P as p}from"./pdf-viewer-Cs6BrDhG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KuLPZJuA.js";import"./preload-helper-B7RcIo-x.js";import"./PdfViewer-CwMR-byz.js";import"./index-BXq-npjw.js";import"./BasePdfViewer-BVNBXMPj.js";import"./BasePdfViewer.module.css-BKalQw7z.js";import"./PdfViewerAnnotationLayer--H4ihXjU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CUV5a8Ig.js";import"./PdfViewerOutlineSidebar-DyhzL--v.js";import"./PdfViewerSidebarHeader-Mpgp9WV-.js";import"./useBaseUiId-pUFvyVHu.js";import"./useControlled-DdoeZPFa.js";import"./CompositeRoot-DIySxg7S.js";import"./CompositeItem-CPdzs_zJ.js";import"./ToolbarRootContext-wkwm_H2V.js";import"./composite-B7vL0viI.js";import"./svgIconContainer-B68gmxzG.js";import"./PdfViewerSearchBar-BrKbJkMr.js";import"./chevron-up-DpCprlmH.js";import"./chevron-down-C_1zArjr.js";import"./cross-CVayjJ6n.js";import"./PdfViewerSidebar-T_OmT1Xi.js";import"./index-5sndl28g.js";import"./index-BvLG983R.js";import"./index-B-EIevQb.js";import"./PdfViewerToolbar-DOMQ9PDF.js";import"./Button-D89LqMeP.js";import"./chevron-right-D0PAULqu.js";import"./Input-BoS4yQSc.js";import"./search-DO24WHTI.js";import"./spin-DMcdlelH.js";import"./error-b08krvJC.js";import"./withOsdkMetrics-DvI-Ja_4.js";import"./makeExternalStore-tEc9bJ3H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
