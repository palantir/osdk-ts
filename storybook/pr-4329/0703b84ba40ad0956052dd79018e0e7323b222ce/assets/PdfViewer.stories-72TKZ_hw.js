import{j as r,M as s}from"./iframe-C0wU5abY.js";import{P as p}from"./pdf-viewer-_7Q5ZMIS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rK7LP06v.js";import"./preload-helper-DBF01-cG.js";import"./PdfViewer-GSQhkr_9.js";import"./index-BLQzpxSF.js";import"./BasePdfViewer-C-xmjtJK.js";import"./BasePdfViewer.module.css-DLxb5J3x.js";import"./PdfViewerAnnotationLayer-BkiAyXuv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DTFUZOsq.js";import"./PdfViewerOutlineSidebar-Y0dqTEd6.js";import"./PdfViewerSidebarHeader-CWm9gvcK.js";import"./useBaseUiId-D1MC7GbA.js";import"./useControlled-jkUj0hrw.js";import"./CompositeRoot-BqNQVx2b.js";import"./CompositeItem-Bqkqz40D.js";import"./ToolbarRootContext-CLHzdGXk.js";import"./composite-BoBrXPGo.js";import"./svgIconContainer-CMAKke71.js";import"./PdfViewerSearchBar-DHG51YiI.js";import"./chevron-up-Y4azxcQ2.js";import"./chevron-down-BwqCCX_Z.js";import"./cross-DjbVostP.js";import"./PdfViewerSidebar-Dsp5kRIV.js";import"./index-BPOkQniY.js";import"./index-Ca4Lp3-b.js";import"./index-VDAEj1qs.js";import"./PdfViewerToolbar-BMyUelGp.js";import"./Button-w-E8GgnT.js";import"./chevron-right-CAawPzh4.js";import"./Input-CuYpucpk.js";import"./search-Kac11RBU.js";import"./spin-Cb1EhGUT.js";import"./error-B8Sv0Q4K.js";import"./withOsdkMetrics-CY3k4xQQ.js";import"./makeExternalStore-DkrbDLqh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
