import{j as r,M as s}from"./iframe-D826lLui.js";import{P as p}from"./pdf-viewer-ByGj10It.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-De328zAu.js";import"./preload-helper-CGkAb-Wu.js";import"./PdfViewer-CKPQaEJ8.js";import"./index-DxNlvLAd.js";import"./BasePdfViewer-V5OHKKBr.js";import"./BasePdfViewer.module.css-JooZ_B3V.js";import"./PdfViewerAnnotationLayer-stCd30FI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-xlRGYCP5.js";import"./PdfViewerOutlineSidebar-XE0haoE1.js";import"./PdfViewerSidebarHeader-tzXuZ5eI.js";import"./useBaseUiId-CcA6f0Di.js";import"./useControlled-D2sq1Iv_.js";import"./CompositeRoot-GXPFqGSE.js";import"./CompositeItem-DW0wn-NB.js";import"./ToolbarRootContext-DY8S7jf3.js";import"./composite-D5SkMTiw.js";import"./svgIconContainer-BjuGxCIz.js";import"./PdfViewerSearchBar-D7kXEgJT.js";import"./chevron-up-ByurXI35.js";import"./chevron-down-C1HuiRtn.js";import"./cross-9ZGBzaem.js";import"./PdfViewerSidebar-C8xO6s0L.js";import"./index-T95LEHG2.js";import"./index-e93ICMyG.js";import"./index-Dt4QZQ1m.js";import"./PdfViewerToolbar-iEYevh5k.js";import"./Button-DOLHRrn6.js";import"./chevron-right-DzpaNagI.js";import"./Input-D8Q7l-gb.js";import"./search-BEeF_4Rd.js";import"./spin-FMLEuHDB.js";import"./error-DNLlyci1.js";import"./withOsdkMetrics--xMNvw5Y.js";import"./makeExternalStore-B82ZGGVu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
