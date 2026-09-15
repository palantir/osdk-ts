import{j as r,M as s}from"./iframe-CvtjOOTU.js";import{P as p}from"./pdf-viewer-CwcgqcRI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-kXP1kymg.js";import"./preload-helper-YYdL2GVs.js";import"./PdfViewer-CMWDAqAA.js";import"./index-CO5W4Pg7.js";import"./BasePdfViewer-d5y01zbn.js";import"./BasePdfViewer.module.css-D4iMlIcO.js";import"./PdfViewerAnnotationLayer-Cnftccot.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CmFV9AXf.js";import"./PdfViewerOutlineSidebar-C6D1PAg8.js";import"./PdfViewerSidebarHeader-DZ1uZ5a3.js";import"./useBaseUiId-3JVt3VnJ.js";import"./useControlled-TIKyE_eU.js";import"./CompositeRoot-q06cPn3G.js";import"./CompositeItem-B90xhnGL.js";import"./ToolbarRootContext-XjPDKw4l.js";import"./composite-po6w4N65.js";import"./svgIconContainer-lpqUMm2E.js";import"./PdfViewerSearchBar-IvuIlnpq.js";import"./chevron-up-DgoHPTYl.js";import"./chevron-down-DEPGbWzo.js";import"./cross-BpzF3zqH.js";import"./PdfViewerSidebar-eGbJzOmg.js";import"./index-CebCVI2l.js";import"./index-DzATK-9N.js";import"./index-B4MsJewH.js";import"./PdfViewerToolbar-CR8M7fTi.js";import"./Button-CirHg6K_.js";import"./chevron-right-BoO_KQ1E.js";import"./Input-LvpeWry1.js";import"./search-B0EmnwB3.js";import"./spin-Dww7hUhP.js";import"./error-CdHEMgDN.js";import"./withOsdkMetrics-DL5qkExK.js";import"./makeExternalStore-BmjUzr6O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
