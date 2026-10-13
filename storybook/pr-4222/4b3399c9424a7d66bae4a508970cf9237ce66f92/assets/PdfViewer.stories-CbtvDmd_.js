import{j as r,M as s}from"./iframe-tVbcsjZa.js";import{P as p}from"./pdf-viewer-BMF0EkPp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-kEYpkN5E.js";import"./preload-helper-y3mk_7AM.js";import"./PdfViewer-CyMspNA0.js";import"./index-BUwo4Wun.js";import"./BasePdfViewer-8QkcOOp9.js";import"./BasePdfViewer.module.css-Duu0LWHZ.js";import"./PdfViewerAnnotationLayer-BSmVKV-Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HgbcJl6y.js";import"./PdfViewerOutlineSidebar-WMzaS5N6.js";import"./PdfViewerSidebarHeader-BUMnEySD.js";import"./useBaseUiId-DvMZwhQw.js";import"./useControlled-SzLU43Qu.js";import"./CompositeRoot-BU8u8mGF.js";import"./CompositeItem-G9QZyuPm.js";import"./ToolbarRootContext-BeKKodE4.js";import"./composite-OrxFWVZn.js";import"./svgIconContainer-D6fQk_si.js";import"./PdfViewerSearchBar-DywjiVhp.js";import"./chevron-up-BliHafL7.js";import"./chevron-down-ADlv-Mhp.js";import"./cross-Cg8bwusU.js";import"./PdfViewerSidebar-DH9TWoqs.js";import"./index-CkH4TDjm.js";import"./index-sjIEPV-q.js";import"./index-DRL_czfg.js";import"./PdfViewerToolbar-DSE_w4eu.js";import"./Button-BsWA9Md6.js";import"./chevron-right-Lxcs4vIY.js";import"./Input-CKwugJU4.js";import"./search-BhYP5RmD.js";import"./spin-DBLUXYa3.js";import"./error-e6srGYm1.js";import"./withOsdkMetrics-LuX7zwcW.js";import"./makeExternalStore-Bo5qeas1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
