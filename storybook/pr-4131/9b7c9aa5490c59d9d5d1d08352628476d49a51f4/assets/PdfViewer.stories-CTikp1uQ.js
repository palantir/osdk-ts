import{j as r,M as s}from"./iframe-D555MuJ0.js";import{P as p}from"./pdf-viewer-D-EvLxWf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1-E0SVN8.js";import"./preload-helper-DI0YqJp4.js";import"./PdfViewer-B9oPZrut.js";import"./index-Cg9uHUun.js";import"./BasePdfViewer-BBwNSAGh.js";import"./BasePdfViewer.module.css-C6MJgwT4.js";import"./PdfViewerAnnotationLayer-CPnvp4bh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CA_W789o.js";import"./PdfViewerOutlineSidebar-CdzkS31T.js";import"./PdfViewerSidebarHeader-CIlPqyob.js";import"./useBaseUiId-B4R9GsGS.js";import"./useControlled-BXEwoD5-.js";import"./CompositeRoot-CACfkODK.js";import"./CompositeItem-B5t7ZVS0.js";import"./ToolbarRootContext-B_tLpux3.js";import"./composite-C3jNveZb.js";import"./svgIconContainer-bAOTCoFN.js";import"./PdfViewerSearchBar-Xz0NI8iW.js";import"./chevron-up-C2UWqwyM.js";import"./chevron-down-CJd6fkFq.js";import"./cross-IYmx4x0m.js";import"./PdfViewerSidebar-DOBwefMV.js";import"./index-C8_vB7gu.js";import"./index-CkTsdOkp.js";import"./index-BVyJBQqR.js";import"./PdfViewerToolbar-B41hmaEI.js";import"./Button-B8XR24zN.js";import"./chevron-right--D4nGY8o.js";import"./Input-CueXhQ4V.js";import"./search-B-aW4zGh.js";import"./spin-DYFYuFIa.js";import"./error-DVePqkqY.js";import"./withOsdkMetrics-Bbt3lTlO.js";import"./makeExternalStore-BcjkXJ5O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
