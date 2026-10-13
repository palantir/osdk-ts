import{j as r,M as s}from"./iframe-DWBCJ7r1.js";import{P as p}from"./pdf-viewer-DDWIdK9G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-I4X0gkmp.js";import"./preload-helper-BmktTq8T.js";import"./PdfViewer-ByzBBScE.js";import"./index-Bhg8EF8N.js";import"./BasePdfViewer-9Ejr5YQs.js";import"./BasePdfViewer.module.css-Bmp-j0xm.js";import"./PdfViewerAnnotationLayer-DKht6ckX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-eBDLX_.js";import"./PdfViewerOutlineSidebar-BXMnVgj1.js";import"./PdfViewerSidebarHeader-B6vZPKjH.js";import"./useBaseUiId-CJSadFy5.js";import"./useControlled-CgT0Br7i.js";import"./CompositeRoot-kn4mChAV.js";import"./CompositeItem-BxdZFWZc.js";import"./ToolbarRootContext-Bk6-lFFc.js";import"./composite-DVYVQNYP.js";import"./svgIconContainer-BKXE3QcR.js";import"./PdfViewerSearchBar-DbRIzjaO.js";import"./chevron-up-CDZpmDro.js";import"./chevron-down-CIAO6ol2.js";import"./cross-D7B_UIT5.js";import"./PdfViewerSidebar-C--V-zs3.js";import"./index-YbLBVrX6.js";import"./index-1w6N5pNx.js";import"./index-DxYGP2pA.js";import"./PdfViewerToolbar-PeUhN3kM.js";import"./Button-Dgs8-VaM.js";import"./chevron-right-C9ClpRfD.js";import"./Input-CZ8A1Blk.js";import"./search-DqkstfId.js";import"./spin-D2TYR-GH.js";import"./error-BEytdPL1.js";import"./withOsdkMetrics-BPF8go43.js";import"./makeExternalStore-UKXCXYtC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
