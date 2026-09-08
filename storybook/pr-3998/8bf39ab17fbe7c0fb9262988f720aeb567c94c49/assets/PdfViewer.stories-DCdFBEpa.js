import{j as r,M as s}from"./iframe-CCEjzOPC.js";import{P as p}from"./pdf-viewer-BaX8dJDR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEkdmTuU.js";import"./preload-helper-DImdHWFo.js";import"./PdfViewer-Bh0CV3Eb.js";import"./index-DgoUsAmK.js";import"./BasePdfViewer-B8eWf9tU.js";import"./BasePdfViewer.module.css-BqbMzIq1.js";import"./PdfViewerAnnotationLayer-DqmvB-ur.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-f-FpfjI0.js";import"./PdfViewerOutlineSidebar-D8qT7ejo.js";import"./PdfViewerSidebarHeader-CEe8sam6.js";import"./useBaseUiId-j3ufExoT.js";import"./useControlled-D5RejEGV.js";import"./CompositeRoot-DWLdPvud.js";import"./CompositeItem-vBJlJ_jv.js";import"./ToolbarRootContext-CugNg6qm.js";import"./composite-C0q05pny.js";import"./svgIconContainer-Coaz20-Z.js";import"./PdfViewerSearchBar-D81saovZ.js";import"./chevron-up-CXsJ3DIB.js";import"./chevron-down-D9MyH17B.js";import"./cross-BGMsRd6B.js";import"./PdfViewerSidebar-bzR4CgTA.js";import"./index-D3oslL3x.js";import"./index-BilPMlQA.js";import"./index-D9nMHWCp.js";import"./PdfViewerToolbar-8hXsZE8j.js";import"./Button-2G_ar31r.js";import"./chevron-right-BiuyLltR.js";import"./Input-CGqEOpN_.js";import"./search-BPL1vhq_.js";import"./spin-CRv9J6Ua.js";import"./error-8gbxpDNd.js";import"./withOsdkMetrics-D3mK_z9G.js";import"./makeExternalStore-CccFVbAZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
