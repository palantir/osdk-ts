import{j as r,M as s}from"./iframe-C-vShDHk.js";import{P as p}from"./pdf-viewer-CJMcdhv-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D5N24pPm.js";import"./preload-helper-B2rWRkvC.js";import"./PdfViewer-CMK54DTA.js";import"./index-Cx2OgQ-2.js";import"./BasePdfViewer-3byJIIpm.js";import"./BasePdfViewer.module.css-HUa4zU9s.js";import"./PdfViewerAnnotationLayer-CVMHfQpG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAbKtnvN.js";import"./PdfViewerOutlineSidebar-CFr2H5qs.js";import"./PdfViewerSidebarHeader-C5tCduSq.js";import"./useBaseUiId-CVgLKRhh.js";import"./useControlled-TStxGFbD.js";import"./CompositeRoot-Do48ivJ8.js";import"./CompositeItem-DCzVtAix.js";import"./ToolbarRootContext-JfRNTAAS.js";import"./composite-BHa_u3nf.js";import"./svgIconContainer-BXOzj86j.js";import"./PdfViewerSearchBar-D-25CVDZ.js";import"./chevron-up-jfJEWVzR.js";import"./chevron-down-BslLGd1l.js";import"./cross-CPOUhrWH.js";import"./PdfViewerSidebar-BlKNGtwh.js";import"./index-B5-Rp7Tt.js";import"./index-D6DLWMjA.js";import"./index-MAhWZ1KQ.js";import"./PdfViewerToolbar-DsOr9Fnr.js";import"./Button-LZsipjsn.js";import"./chevron-right-CkqRgaHD.js";import"./Input-ChQ78XH9.js";import"./search-D9klcMPO.js";import"./spin-Bjjw0nAc.js";import"./error-Dym_fJRU.js";import"./withOsdkMetrics-195aR8r9.js";import"./makeExternalStore-ChsmDhDe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
