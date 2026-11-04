import{j as r,M as s}from"./iframe-BlJB-hqv.js";import{P as p}from"./pdf-viewer-HlsdTAo1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BzPUQuo8.js";import"./preload-helper-AMj6u5EH.js";import"./PdfViewer-DqTmvEDc.js";import"./index-B5X20bPi.js";import"./BasePdfViewer-DetEtpdq.js";import"./BasePdfViewer.module.css-cMgGOCe5.js";import"./PdfViewerAnnotationLayer-Cnx-4vma.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-skf9jnIE.js";import"./PdfViewerOutlineSidebar-yQtQoVRV.js";import"./PdfViewerSidebarHeader-CbI-MPsw.js";import"./useBaseUiId-D_Y5M0eI.js";import"./useControlled-CETXoNMf.js";import"./CompositeRoot-D9UGBj9Q.js";import"./CompositeItem-BMH16CTX.js";import"./ToolbarRootContext-Br80IfNP.js";import"./composite-DR-h0Lzn.js";import"./svgIconContainer-LeVtNk5w.js";import"./PdfViewerSearchBar-CgL3HSyg.js";import"./chevron-up-DnaSmLZD.js";import"./chevron-down-CGFUoA8B.js";import"./cross-DteZeQw8.js";import"./PdfViewerSidebar-YZxPcret.js";import"./index-CEuYTBSI.js";import"./index-8mNQJ1FG.js";import"./index-BqrWcgCk.js";import"./PdfViewerToolbar-YwEi2bu4.js";import"./Button-bd2H5948.js";import"./chevron-right-Br-RzKlw.js";import"./Input-DoCeanz4.js";import"./search-VsI7BQQc.js";import"./spin-CII-3vR6.js";import"./error-DWdskqLp.js";import"./withOsdkMetrics-BbC1R7NS.js";import"./makeExternalStore-CrrUaLlQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
