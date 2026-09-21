import{j as r,M as s}from"./iframe-ErFjiRdR.js";import{P as p}from"./pdf-viewer-CS6fQBUJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D8JYbX2v.js";import"./preload-helper-QXATeijz.js";import"./PdfViewer-Bw2lDTyW.js";import"./index-CprRWtZ0.js";import"./BasePdfViewer-CdzFj1hQ.js";import"./BasePdfViewer.module.css-D22i9n4G.js";import"./PdfViewerAnnotationLayer-BfjEz-u0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrneNV_K.js";import"./PdfViewerOutlineSidebar-D856ajOe.js";import"./PdfViewerSidebarHeader-D4574M3E.js";import"./useBaseUiId-q1R-2ocn.js";import"./useControlled-y5HTd1hS.js";import"./CompositeRoot-jtppVHZr.js";import"./CompositeItem-CXu476SC.js";import"./ToolbarRootContext-DKYtYCzN.js";import"./composite-BNsKQKoz.js";import"./svgIconContainer-DwCJmDQ6.js";import"./PdfViewerSearchBar-CB2UyZrc.js";import"./chevron-up-BOr_C0-0.js";import"./chevron-down-8N5DEpE8.js";import"./cross-DA1xIqSH.js";import"./PdfViewerSidebar-CT33_Z-6.js";import"./index-B68TyCJi.js";import"./index-DyME0HO3.js";import"./index-R776mpCr.js";import"./PdfViewerToolbar-DZ7f7deN.js";import"./Button-Bkuli5yv.js";import"./chevron-right-JuJAtBYj.js";import"./Input-5vpb7ex0.js";import"./search-D70lAymL.js";import"./spin-CXNG9fwC.js";import"./error-D-xAMd6a.js";import"./withOsdkMetrics-LLxyWREg.js";import"./makeExternalStore-BmDH-BLi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
