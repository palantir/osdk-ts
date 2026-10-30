import{j as r,M as s}from"./iframe-X83lPBeu.js";import{P as p}from"./pdf-viewer-DDoudb65.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-AeTvoAlV.js";import"./preload-helper-B2sKPI8B.js";import"./PdfViewer-BfajAaRU.js";import"./index-BQDctdoe.js";import"./BasePdfViewer-BTP_iVIk.js";import"./BasePdfViewer.module.css-BYKvB7R6.js";import"./PdfViewerAnnotationLayer-BsS8RunE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0HUkeWYi.js";import"./PdfViewerOutlineSidebar-DtvqJFnI.js";import"./PdfViewerSidebarHeader-BghUEAKU.js";import"./useBaseUiId-CXpBK7Xe.js";import"./useControlled-CRW8vka0.js";import"./CompositeRoot-Bsa-yt3y.js";import"./CompositeItem-DmkSf1ho.js";import"./ToolbarRootContext-DNKVBjDF.js";import"./composite-C3KQbPWK.js";import"./svgIconContainer-CrLLWaC0.js";import"./PdfViewerSearchBar-NkBW_GNw.js";import"./chevron-up-B0W0A1fi.js";import"./chevron-down-C6VkVqqF.js";import"./cross-DESSfx8f.js";import"./PdfViewerSidebar-DmRuhZHL.js";import"./index-ArSP-sSJ.js";import"./index-CC_w3gYY.js";import"./index-DeDXgDsX.js";import"./PdfViewerToolbar-BWLGi_x1.js";import"./Button-C6LVoI3t.js";import"./chevron-right-B8o-F-0w.js";import"./Input-C5377Qeu.js";import"./search-CGhIjKAK.js";import"./spin-D3_oGM7m.js";import"./error-gzJnjayk.js";import"./withOsdkMetrics-DWVSjT_8.js";import"./makeExternalStore-D0mNPEg-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
