import{j as r,M as s}from"./iframe-CgKUzItX.js";import{P as p}from"./pdf-viewer-DjsALJ1y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRMDXy2X.js";import"./preload-helper-C8NMj1_t.js";import"./PdfViewer-Db1wrngM.js";import"./index-BGyRLoto.js";import"./BasePdfViewer-TyHhRtXR.js";import"./BasePdfViewer.module.css-OKq-GzJI.js";import"./PdfViewerAnnotationLayer-C1yB8Qbd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--9QXAMjh.js";import"./PdfViewerOutlineSidebar-D1YfWi6R.js";import"./PdfViewerSidebarHeader-BtlZy61c.js";import"./useBaseUiId-9QwtdzIz.js";import"./useControlled-ywgC3TRl.js";import"./CompositeRoot-BPGGeBPS.js";import"./CompositeItem-BImsaWuE.js";import"./ToolbarRootContext-Cn9ARR1m.js";import"./composite-C8pbzlSR.js";import"./svgIconContainer-3Z9BBN_f.js";import"./PdfViewerSearchBar-BG-NcMx3.js";import"./chevron-up-DjfOjFz1.js";import"./chevron-down-CUAqfL81.js";import"./cross-BCuSuLMn.js";import"./PdfViewerSidebar-CCJBrU9B.js";import"./index-8XKQJxIW.js";import"./index-DH7xuiv5.js";import"./index-DPbjuSTY.js";import"./PdfViewerToolbar-BygxYowF.js";import"./Button-vrPbejrg.js";import"./chevron-right-B17nERDh.js";import"./Input-YdwMEp0H.js";import"./search-d4lpn-YX.js";import"./spin-BEDJJtMO.js";import"./error-CPGG1yPH.js";import"./withOsdkMetrics-BCBab3ni.js";import"./makeExternalStore-CkIkERDP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
