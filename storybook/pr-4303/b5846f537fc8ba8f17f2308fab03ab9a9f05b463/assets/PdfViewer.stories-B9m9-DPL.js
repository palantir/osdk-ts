import{j as r,M as s}from"./iframe-gvVvTYdX.js";import{P as p}from"./pdf-viewer-SRnoL_-x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DrfjOu6p.js";import"./preload-helper-C4B8pL_K.js";import"./PdfViewer-ByQ5HG-T.js";import"./index-BKV8xI6r.js";import"./BasePdfViewer-C0tjsj2v.js";import"./BasePdfViewer.module.css-CMJOUSNQ.js";import"./PdfViewerAnnotationLayer-CYv8X9u5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dh35usU3.js";import"./PdfViewerOutlineSidebar-CRJw1iuE.js";import"./PdfViewerSidebarHeader-BoMtpqgT.js";import"./useBaseUiId-fY3jSIio.js";import"./useControlled-Cz01Hj64.js";import"./CompositeRoot-BcFTMRAd.js";import"./CompositeItem-Ceyb7lxq.js";import"./ToolbarRootContext-_TM7bc4T.js";import"./composite-U12YfSVj.js";import"./svgIconContainer-CbGtxYsB.js";import"./PdfViewerSearchBar-BApK3r_R.js";import"./chevron-up-B4NFnp6f.js";import"./chevron-down-DNhCoDCr.js";import"./cross-DXV_E_3w.js";import"./PdfViewerSidebar-BBYGuSHN.js";import"./index-Ct7dCOO5.js";import"./index-DFGGqFfD.js";import"./index-Y-Z5WvlR.js";import"./PdfViewerToolbar-BuaXS3hz.js";import"./Button-CM6iPOlW.js";import"./chevron-right-DRDDUJK7.js";import"./Input-B5s_ufnw.js";import"./search-BpBkWvYy.js";import"./spin-0h2_JcF_.js";import"./error-oahmhnhI.js";import"./withOsdkMetrics-DQiolCAA.js";import"./makeExternalStore-eDqNkvsc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
