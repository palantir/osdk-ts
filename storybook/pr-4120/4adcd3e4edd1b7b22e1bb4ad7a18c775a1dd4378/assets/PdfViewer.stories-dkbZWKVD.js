import{j as r,M as s}from"./iframe-BiMzIlPJ.js";import{P as p}from"./pdf-viewer-DAX0Lmo7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJJa3uYQ.js";import"./preload-helper-dV0TeC0E.js";import"./PdfViewer-zDoV8zYI.js";import"./index-Dl3SZpx3.js";import"./BasePdfViewer-0kUU5Itq.js";import"./BasePdfViewer.module.css-DXGGtdc9.js";import"./PdfViewerAnnotationLayer-BN5hMt_d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLpxUwZ9.js";import"./PdfViewerOutlineSidebar-BjOXpcrr.js";import"./PdfViewerSidebarHeader-WC9hTOmG.js";import"./useBaseUiId-W_-oecTL.js";import"./useControlled-545e9KB7.js";import"./CompositeRoot-BRD39g9O.js";import"./CompositeItem-DZTQE9oi.js";import"./ToolbarRootContext-DLbFMlLJ.js";import"./composite-NMWOeRk3.js";import"./svgIconContainer-CxWabZX-.js";import"./PdfViewerSearchBar-C7zL_RzS.js";import"./chevron-up-L8wD56y1.js";import"./chevron-down-Dj5P_Z4N.js";import"./cross-BJNvpKNm.js";import"./PdfViewerSidebar-BkbbY9LG.js";import"./index-Du_9BUOk.js";import"./index-BipBLK98.js";import"./index-e-n3pUpE.js";import"./PdfViewerToolbar-BN8JiSUa.js";import"./Button-CQ2rKaZE.js";import"./chevron-right-DKEsg96k.js";import"./Input-Cn6g7mcN.js";import"./search-BuVLYo6z.js";import"./spin-D40rSuEd.js";import"./error-BvyeXfc5.js";import"./withOsdkMetrics-D6MPIy_f.js";import"./makeExternalStore-C_oT62wU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
