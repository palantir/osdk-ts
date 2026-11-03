import{j as r,M as s}from"./iframe-_lLrSj1r.js";import{P as p}from"./pdf-viewer-CZWCr40d.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEWi4YdH.js";import"./preload-helper--K06I6bX.js";import"./PdfViewer-CfG5G3Hl.js";import"./index-u4LjU3wy.js";import"./BasePdfViewer-BJWxC4s9.js";import"./BasePdfViewer.module.css-BYy1xE0b.js";import"./PdfViewerAnnotationLayer-DTC0sCLj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1Yo3sNC.js";import"./PdfViewerOutlineSidebar-CZMCnyrD.js";import"./PdfViewerSidebarHeader-BJ6HVL7E.js";import"./useBaseUiId-Bc8GG6V8.js";import"./useControlled-ef7rEDgw.js";import"./CompositeRoot-BLbkv49G.js";import"./CompositeItem-DQchaMiL.js";import"./ToolbarRootContext-DHD80eI9.js";import"./composite-BZPxrUSk.js";import"./svgIconContainer-mBZD1oTc.js";import"./PdfViewerSearchBar-BCJQJwo7.js";import"./chevron-up-BuVKIe-6.js";import"./chevron-down-DeOYs4U6.js";import"./cross-Cf8HUSkr.js";import"./PdfViewerSidebar-DRdM2CXW.js";import"./index-Cp32Ucpe.js";import"./index-DMVKgr18.js";import"./index-_W33FQQz.js";import"./PdfViewerToolbar-B8kpppCS.js";import"./Button-DtR0BNuF.js";import"./chevron-right-DxDLdBkC.js";import"./Input-ByElj6b4.js";import"./search-BsFDT1OC.js";import"./spin-Banl6WMr.js";import"./error-po7axJSl.js";import"./withOsdkMetrics-cH-rirPE.js";import"./makeExternalStore-CBJvRSBt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
