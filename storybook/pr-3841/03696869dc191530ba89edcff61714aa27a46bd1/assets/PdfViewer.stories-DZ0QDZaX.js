import{j as r,M as s}from"./iframe-ca23OhYy.js";import{P as p}from"./pdf-viewer-CIU_4Ghh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KSVmsY6t.js";import"./preload-helper-CpBe6w6L.js";import"./PdfViewer-Czl8CkDX.js";import"./index-CSQGa-uf.js";import"./BasePdfViewer-Cq1_oxR9.js";import"./BasePdfViewer.module.css-k-i0o_LT.js";import"./PdfViewerAnnotationLayer-IXcwPm1C.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeAA5hQj.js";import"./PdfViewerOutlineSidebar-C9wCzyrT.js";import"./PdfViewerSidebarHeader-nvijuXA8.js";import"./useBaseUiId-BFRON7cN.js";import"./useControlled-C1AlQciX.js";import"./CompositeRoot-a4fbqUFJ.js";import"./CompositeItem-B-dNGI5-.js";import"./ToolbarRootContext-sGl4TGZ5.js";import"./composite-D8ER8GvA.js";import"./svgIconContainer-DY2iVrle.js";import"./PdfViewerSearchBar-BnFSHnkk.js";import"./chevron-up-D0d5GPTw.js";import"./chevron-down-CIVY1k1-.js";import"./cross-CETsQjwW.js";import"./PdfViewerSidebar-DtEwxc4x.js";import"./index-DwmipJz1.js";import"./index-rx-oKm__.js";import"./index-4C3ZxLWs.js";import"./PdfViewerToolbar-gQZjT_0Y.js";import"./Button-DRovoLAj.js";import"./chevron-right-D7RBh7iL.js";import"./Input-CDnjWJWA.js";import"./search-RTWZj0KA.js";import"./spin-BglQAzF4.js";import"./error-BW4SFkbJ.js";import"./withOsdkMetrics-DVtZ9wxA.js";import"./makeExternalStore-BRJsYdtc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
