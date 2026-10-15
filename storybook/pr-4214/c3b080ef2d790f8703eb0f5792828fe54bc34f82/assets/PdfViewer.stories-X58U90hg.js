import{j as r,M as s}from"./iframe-5HuVSaDQ.js";import{P as p}from"./pdf-viewer-DTjpYv_q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CzdbkELr.js";import"./preload-helper-CfrIZ5Cf.js";import"./PdfViewer-Cjn3ytwP.js";import"./index-DjoqjxLj.js";import"./BasePdfViewer-DNku340Q.js";import"./BasePdfViewer.module.css-D6EIBcXR.js";import"./PdfViewerAnnotationLayer-D7k39pb4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zZ8WG6_c.js";import"./PdfViewerOutlineSidebar-CHvAdjfF.js";import"./PdfViewerSidebarHeader-DFb6FefX.js";import"./useBaseUiId-DUhNtAkB.js";import"./useControlled-DSyajAtW.js";import"./CompositeRoot-BQPnNEt3.js";import"./CompositeItem-zoxZc06w.js";import"./ToolbarRootContext-BJk-KcZN.js";import"./composite-BgONfLPA.js";import"./svgIconContainer-CilU-cRt.js";import"./PdfViewerSearchBar-t9Cch7Ic.js";import"./chevron-up-CGkQGkWf.js";import"./chevron-down-DpQjt-J8.js";import"./cross-Fbd8rPWM.js";import"./PdfViewerSidebar-BfYCliCi.js";import"./index-vB4c4Qg2.js";import"./index-HPsAfhDB.js";import"./index--ZjbYOmd.js";import"./PdfViewerToolbar-4KVEWJu6.js";import"./Button-DOSN-M_K.js";import"./chevron-right-DMudzecD.js";import"./Input-LKVNjJW6.js";import"./search-Cj2_GDbi.js";import"./spin-B6ZucWG9.js";import"./error-CMmWSsIq.js";import"./withOsdkMetrics-CADXJLOh.js";import"./makeExternalStore-CgO7rqjT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
