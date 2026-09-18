import{j as r,M as s}from"./iframe-CNtj4pm0.js";import{P as p}from"./pdf-viewer-CrBADvQs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BLUakW4i.js";import"./preload-helper-BS75hAbV.js";import"./PdfViewer-1ngNSaPL.js";import"./index-sjmYZucR.js";import"./BasePdfViewer-DrB8NCDe.js";import"./BasePdfViewer.module.css-Ap5XiODz.js";import"./PdfViewerAnnotationLayer-OlhUxDZD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-AjYWLw5n.js";import"./PdfViewerOutlineSidebar-Dg7z78OJ.js";import"./PdfViewerSidebarHeader-JToYI5FC.js";import"./useBaseUiId-lN80hZHi.js";import"./useControlled-B0rx1snt.js";import"./CompositeRoot-D-XIOelf.js";import"./CompositeItem-BO5p0iBu.js";import"./ToolbarRootContext-DeNcRZ79.js";import"./composite-GfxKj1uF.js";import"./svgIconContainer-KAKJdeY6.js";import"./PdfViewerSearchBar-C_9TI5gi.js";import"./chevron-up-D5PugYmY.js";import"./chevron-down-DuRgHJud.js";import"./cross-BI_rXiCk.js";import"./PdfViewerSidebar-BbBEhC0-.js";import"./index-vLqmlx6U.js";import"./index-Cgs0l_sb.js";import"./index-CUZALXVA.js";import"./PdfViewerToolbar-bPN_7XFk.js";import"./Button-eHM7dp0m.js";import"./chevron-right-BTL2sNCy.js";import"./Input-C4ZhagKB.js";import"./search-D7W-cB43.js";import"./spin-BBTStWCO.js";import"./error-BoQP4cSo.js";import"./withOsdkMetrics-D3scg1-Z.js";import"./makeExternalStore-CJ8yXjVF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
