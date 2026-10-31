import{j as r,M as s}from"./iframe-0Iz5vwcT.js";import{P as p}from"./pdf-viewer-Op5eeF26.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJS6AD3B.js";import"./preload-helper-DPuYeI1F.js";import"./PdfViewer-D7Wk42xG.js";import"./index-CwqL2BSp.js";import"./BasePdfViewer-CJ8eB4a0.js";import"./BasePdfViewer.module.css-BiS9pe0S.js";import"./PdfViewerAnnotationLayer-c5nLpHg2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJcUjf_p.js";import"./PdfViewerOutlineSidebar-Be_Zo40W.js";import"./PdfViewerSidebarHeader-DcaKdHvh.js";import"./useBaseUiId-BzcgVOgr.js";import"./useControlled-BgJ32gqU.js";import"./CompositeRoot-CNlW4c9i.js";import"./CompositeItem-DmRUbVI5.js";import"./ToolbarRootContext-C3DWskzf.js";import"./composite-N0Lz-u2v.js";import"./svgIconContainer--rVYZd1H.js";import"./PdfViewerSearchBar-D4JCi0vc.js";import"./chevron-up-DcAtfW_g.js";import"./chevron-down-BAJ5mZyN.js";import"./cross-zS2Wnz2V.js";import"./PdfViewerSidebar-tC8ME53G.js";import"./index-Cl9Abjho.js";import"./index-Fpqw52jH.js";import"./index-CJbD8PH4.js";import"./PdfViewerToolbar-lbUzGLcg.js";import"./Button-DmPkGrX2.js";import"./chevron-right-y_CQpaOO.js";import"./Input-CxV_aY0Y.js";import"./search-C60pdPoy.js";import"./spin-7T13QWSd.js";import"./error-D9h6iLxx.js";import"./withOsdkMetrics-kzWOWE3o.js";import"./makeExternalStore-CFnbMMz3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
