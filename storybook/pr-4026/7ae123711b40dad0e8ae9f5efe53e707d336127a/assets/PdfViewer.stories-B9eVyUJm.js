import{j as r,M as s}from"./iframe-C-srjCzr.js";import{P as p}from"./pdf-viewer-CsUlBMyu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DC5DicLY.js";import"./preload-helper-CdgKYpfH.js";import"./PdfViewer-DHRPPwha.js";import"./index-Bzj5y-57.js";import"./BasePdfViewer-83lRLegD.js";import"./BasePdfViewer.module.css-DOTfBZW1.js";import"./PdfViewerAnnotationLayer-Spk38gMJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-AkgS8Ef_.js";import"./PdfViewerOutlineSidebar-Ck9_C7h1.js";import"./PdfViewerSidebarHeader-CefTlIni.js";import"./useBaseUiId-BU2Bdgfn.js";import"./useControlled-BtWeYBTy.js";import"./CompositeRoot-D6_jNRLS.js";import"./CompositeItem-DAR9wsSJ.js";import"./ToolbarRootContext-8-BoPq-4.js";import"./composite--DZGcVxK.js";import"./svgIconContainer-5LtXf4dR.js";import"./PdfViewerSearchBar-BBWvJMSL.js";import"./chevron-up-D2Sv500k.js";import"./chevron-down-BhL4Yc8G.js";import"./cross-CBTpZY1-.js";import"./PdfViewerSidebar-BZBE2tfk.js";import"./index-BiBF6oIE.js";import"./index-DoGeYTl3.js";import"./index-CvZ9Zy9b.js";import"./PdfViewerToolbar-BabIop0f.js";import"./Button-FlArcDop.js";import"./chevron-right-rSJvZKJL.js";import"./Input-T5Kj4Vfz.js";import"./search-CESWhMh6.js";import"./spin-Cj9fg5Gs.js";import"./error-D5X5TRqT.js";import"./withOsdkMetrics-ReG1NqWw.js";import"./makeExternalStore-I1nvn_9Q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
