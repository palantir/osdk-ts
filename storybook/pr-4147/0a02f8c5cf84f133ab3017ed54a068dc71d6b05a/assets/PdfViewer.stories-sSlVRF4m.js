import{j as r,M as s}from"./iframe-BmTfPnlj.js";import{P as p}from"./pdf-viewer-lPvl-ahN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dej1Jn_5.js";import"./preload-helper-Bt_1BQmW.js";import"./PdfViewer-UApgDoaz.js";import"./index-Bm1AuuXK.js";import"./BasePdfViewer-qZuxXR_j.js";import"./BasePdfViewer.module.css-BsQqQ9d0.js";import"./PdfViewerAnnotationLayer-CBHQhgJr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkDAez9e.js";import"./PdfViewerOutlineSidebar-_ibUAaz3.js";import"./PdfViewerSidebarHeader-DYEoPkOV.js";import"./useBaseUiId-CCBNiAGi.js";import"./useControlled-DnL-NKvx.js";import"./CompositeRoot-CTluaeFS.js";import"./CompositeItem-BMTpDb-Q.js";import"./ToolbarRootContext-BGVsEm7y.js";import"./composite-EJeYuU8b.js";import"./svgIconContainer-B7k9FdbM.js";import"./PdfViewerSearchBar-BtONTT2S.js";import"./chevron-up-CFQIPoji.js";import"./chevron-down-BcbzO8DN.js";import"./cross-1FUbPxXE.js";import"./PdfViewerSidebar-Brk2kK5S.js";import"./index-CIA5CVhr.js";import"./index-CXPEIkSW.js";import"./index-SU5jaKKw.js";import"./PdfViewerToolbar-DrjykEpO.js";import"./Button-B5eSVAk7.js";import"./chevron-right-Ajrrdhia.js";import"./Input-DCbUCzbU.js";import"./search-CB8fQpSi.js";import"./spin-Isg-ALxV.js";import"./error-DAivNTLD.js";import"./withOsdkMetrics-NcWgtcUH.js";import"./makeExternalStore-D35ZSxQs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
