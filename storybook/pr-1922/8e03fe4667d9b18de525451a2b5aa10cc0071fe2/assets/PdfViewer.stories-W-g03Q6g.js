import{j as r,M as s}from"./iframe-CX9YXgSA.js";import{P as p}from"./pdf-viewer-DBJRruyA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Co0l2eXE.js";import"./preload-helper-DtqkPlr3.js";import"./PdfViewer-WsfAGKtl.js";import"./index-CHu8oj4z.js";import"./BasePdfViewer-C7pI1ooC.js";import"./BasePdfViewer.module.css-BaYy5cgk.js";import"./PdfViewerAnnotationLayer-CtdiDUN5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pqtUlbPd.js";import"./PdfViewerOutlineSidebar-DuOTwZT2.js";import"./PdfViewerSidebarHeader-CmopLLS9.js";import"./useBaseUiId-CCOn5SM4.js";import"./useControlled-DmxCQxaW.js";import"./CompositeRoot-BB1Obmjv.js";import"./CompositeItem-4eZutR_U.js";import"./ToolbarRootContext-oh9KPlPl.js";import"./composite-Buss17U8.js";import"./svgIconContainer-B6cy_VMV.js";import"./PdfViewerSearchBar-Ki94RveJ.js";import"./chevron-up-IQzmRrJF.js";import"./chevron-down-Dc86wWzz.js";import"./cross-RF9BS1x-.js";import"./PdfViewerSidebar-8XcGj0KC.js";import"./index-DLNO2YQ4.js";import"./index-I5XF2J3w.js";import"./index-CU1lbmk7.js";import"./PdfViewerToolbar-CpAVfzdI.js";import"./Button-CXKnl_XI.js";import"./chevron-right-jyvFOfEX.js";import"./Input-Cz4ERfsw.js";import"./search-N9rV3LuD.js";import"./spin-DbedOtAX.js";import"./error-D_HPKerG.js";import"./withOsdkMetrics-DLY6T-R6.js";import"./makeExternalStore-BTzOXgaO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
