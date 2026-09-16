import{j as r,M as s}from"./iframe-BOatYE2J.js";import{P as p}from"./pdf-viewer-B90RUMVb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-XWsldJ.js";import"./preload-helper-Chit4ifE.js";import"./PdfViewer-cnw3JEIR.js";import"./index-BTbb2drj.js";import"./BasePdfViewer-DAGxnHGt.js";import"./BasePdfViewer.module.css-_uf7_nx0.js";import"./PdfViewerAnnotationLayer-DHIDZGKP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nHLoUiot.js";import"./PdfViewerOutlineSidebar-vv00DkVA.js";import"./PdfViewerSidebarHeader-19Uxxla5.js";import"./useBaseUiId-C3kAyh59.js";import"./useControlled-Gz1ZIwEo.js";import"./CompositeRoot-CU2tWu12.js";import"./CompositeItem-Cc_WknAx.js";import"./ToolbarRootContext-DP6Z5eRQ.js";import"./composite-Cutn8tDa.js";import"./svgIconContainer-BIZPnmJE.js";import"./PdfViewerSearchBar-CHgLycA9.js";import"./chevron-up-OAGc0BuM.js";import"./chevron-down-qv6CxIZl.js";import"./cross-DZBv_JyD.js";import"./PdfViewerSidebar-C9N412-j.js";import"./index-C7IRvIDp.js";import"./index-CYDTlvor.js";import"./index-B1tLDNpR.js";import"./PdfViewerToolbar-Cn3-GzYe.js";import"./Button-BPHruMxe.js";import"./chevron-right-CKpuhk6K.js";import"./Input-CNyJfF3s.js";import"./search-DeiNtXAA.js";import"./spin-V_sRQodI.js";import"./error-SJA0nUb8.js";import"./withOsdkMetrics-C8K4o6bx.js";import"./makeExternalStore-uURBDsal.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
