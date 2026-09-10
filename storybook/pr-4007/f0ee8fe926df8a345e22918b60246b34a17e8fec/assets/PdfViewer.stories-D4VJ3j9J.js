import{j as r,M as s}from"./iframe-BXr8Xp2f.js";import{P as p}from"./pdf-viewer-BPS2lrMF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DhbqkpKm.js";import"./preload-helper-QMSJ2T2z.js";import"./PdfViewer-Ci-YHbtV.js";import"./index-Di1QXXOB.js";import"./BasePdfViewer-BvLxaKuC.js";import"./BasePdfViewer.module.css-DXWFUqFk.js";import"./PdfViewerAnnotationLayer-DbqkYlJK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0l9WW_N.js";import"./PdfViewerOutlineSidebar-Tp6af_2o.js";import"./PdfViewerSidebarHeader-CAbm3iTV.js";import"./useBaseUiId-BnWXJnJX.js";import"./useControlled-B8QMfPVX.js";import"./CompositeRoot-BdT-xVyS.js";import"./CompositeItem-4cSdCb7D.js";import"./ToolbarRootContext-CF3RFtFR.js";import"./composite-DX-jTCFh.js";import"./svgIconContainer-DI5sy3Bm.js";import"./PdfViewerSearchBar-Chec4qvK.js";import"./chevron-up-CgAQ9KWK.js";import"./chevron-down-IAwnATnI.js";import"./cross-BWStps-6.js";import"./PdfViewerSidebar-HS5CxW7M.js";import"./index-BratHID5.js";import"./index-B1TvT34D.js";import"./index-Bxr4aZil.js";import"./PdfViewerToolbar-CyQOekTR.js";import"./Button-C-QbecBZ.js";import"./chevron-right-B1jFba9I.js";import"./Input-C5ZRCR8-.js";import"./search-zzPZfnCA.js";import"./spin-Br3qS8rq.js";import"./error-CCe_KGjt.js";import"./withOsdkMetrics-D8QddkhH.js";import"./makeExternalStore-BWoLV1uK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
