import{j as r,M as s}from"./iframe-VN1YMwbH.js";import{P as p}from"./pdf-viewer-BNhtqXUc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtAexW6S.js";import"./preload-helper-DgM3fVqV.js";import"./PdfViewer-Bbb4lyt-.js";import"./index-BQ-hfR18.js";import"./BasePdfViewer-DJvsOusK.js";import"./BasePdfViewer.module.css-DhyafcOk.js";import"./PdfViewerAnnotationLayer-dCM6-okX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_AnwadG.js";import"./PdfViewerOutlineSidebar-lB9XUTkw.js";import"./PdfViewerSidebarHeader-boh2tSl7.js";import"./useBaseUiId-DJ36Kcth.js";import"./useControlled-BilpsNEK.js";import"./CompositeRoot-BJF5tvmL.js";import"./CompositeItem-BMVV3PhA.js";import"./ToolbarRootContext--QULbV7a.js";import"./composite-DEJ-tsuW.js";import"./svgIconContainer-BXOSkGjh.js";import"./PdfViewerSearchBar-B-qxQAjd.js";import"./chevron-up-D6msriXE.js";import"./chevron-down-DrICZ5Jz.js";import"./cross-CRpIa4b8.js";import"./PdfViewerSidebar-De5VrXzm.js";import"./index-Bu8THvZS.js";import"./index-C-8kYW2Y.js";import"./index-CJqO1XSq.js";import"./PdfViewerToolbar-A7iRoju-.js";import"./Button-Cj2Rzj_x.js";import"./chevron-right-CtoCdlu6.js";import"./Input-CGbGPxHL.js";import"./search-BLvYvb41.js";import"./spin-C8goMnnT.js";import"./error-BSNYyaSK.js";import"./withOsdkMetrics-BlQ92REe.js";import"./makeExternalStore-Dy4LBBRG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
