import{j as r,M as s}from"./iframe-n8xc1zmR.js";import{P as p}from"./pdf-viewer-DxbsoKmw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CRygc5wH.js";import"./preload-helper-Bmsyery-.js";import"./PdfViewer-5j_NnlAd.js";import"./index-BAcQGlbN.js";import"./BasePdfViewer-DZHgb3GE.js";import"./BasePdfViewer.module.css-DR7oUI-I.js";import"./PdfViewerAnnotationLayer-CM8SzySz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DrGKR072.js";import"./PdfViewerOutlineSidebar-Dpk_054A.js";import"./PdfViewerSidebarHeader-D-giSQ1N.js";import"./useBaseUiId-eETnIy-K.js";import"./useControlled-D5Gxa7cz.js";import"./CompositeRoot-aW8dXH_M.js";import"./CompositeItem-Bg5j4iyb.js";import"./ToolbarRootContext-BJkBQG1i.js";import"./composite-DIEyOfVG.js";import"./svgIconContainer-Cfmf2PdM.js";import"./PdfViewerSearchBar-B0oGl6xn.js";import"./chevron-up-C5UU2Oky.js";import"./chevron-down-ut1JXVy2.js";import"./cross-CxpUurAd.js";import"./PdfViewerSidebar-_KWCRbF6.js";import"./index-_yWg9Pvu.js";import"./index-MqtyKuec.js";import"./index-DV7yKC3H.js";import"./PdfViewerToolbar-R6dC3C-j.js";import"./Button-xMD57DxE.js";import"./chevron-right-uxEezd1l.js";import"./Input-BlStQB_U.js";import"./search-CHlDi3Oa.js";import"./spin-DLelddXj.js";import"./error-B1cmPXwp.js";import"./withOsdkMetrics-BgaQEVHI.js";import"./makeExternalStore-DsKbnpVD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
