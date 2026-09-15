import{j as r,M as s}from"./iframe-UsJOy75R.js";import{P as p}from"./pdf-viewer-BtwA_v6F.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dy2gf3kF.js";import"./preload-helper-BMFhjcbd.js";import"./PdfViewer-BvugGkzp.js";import"./index-LJeXjTdh.js";import"./BasePdfViewer-BKsVYlus.js";import"./BasePdfViewer.module.css-CQsAznOe.js";import"./PdfViewerAnnotationLayer-BvZafRR9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9q7YyVgs.js";import"./PdfViewerOutlineSidebar-BLKqvZb8.js";import"./PdfViewerSidebarHeader-DAWQ71S7.js";import"./useBaseUiId-BrB63-GA.js";import"./useControlled-CUgFibpX.js";import"./CompositeRoot-BuEGG0g8.js";import"./CompositeItem-CtPMwd_g.js";import"./ToolbarRootContext-Ch0u-hZt.js";import"./composite-C9sM39C4.js";import"./svgIconContainer-fImKWsr3.js";import"./PdfViewerSearchBar-Z2cbP9UQ.js";import"./chevron-up-KLppXXAa.js";import"./chevron-down-B8hI3iSa.js";import"./cross-BFteWzwf.js";import"./PdfViewerSidebar-lkWLFy3-.js";import"./index-RoLHKfsw.js";import"./index-B6uoE1g4.js";import"./index-_ScyNYUM.js";import"./PdfViewerToolbar-CouN4GVe.js";import"./Button-D7E7FwX5.js";import"./chevron-right-B8poC0Nj.js";import"./Input-CtUjoKBa.js";import"./search-Ch0geOF0.js";import"./spin-CVp8mdC-.js";import"./error-DSrMae8G.js";import"./withOsdkMetrics-Dxoj52t7.js";import"./makeExternalStore-CrvnmPw1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
