import{j as r,M as s}from"./iframe-BXNko62s.js";import{P as p}from"./pdf-viewer-CIyhCcRY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7M5UGKn.js";import"./preload-helper-Bj6UNjqi.js";import"./PdfViewer-Dm3f7dvF.js";import"./index-BraeF99A.js";import"./BasePdfViewer-BfgG6Iax.js";import"./BasePdfViewer.module.css-LoMVtG8-.js";import"./PdfViewerAnnotationLayer-DLOHink5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtZYnbHE.js";import"./PdfViewerOutlineSidebar-DE6vH6ou.js";import"./PdfViewerSidebarHeader-DVmBC5nq.js";import"./useBaseUiId-Ca98QWO9.js";import"./useControlled-B2FQFptp.js";import"./CompositeRoot-LFz6s7of.js";import"./CompositeItem-BnI6v8nN.js";import"./ToolbarRootContext-BpFYZMLv.js";import"./composite-C9CWzIa9.js";import"./svgIconContainer-DY8ASQOr.js";import"./PdfViewerSearchBar-COj0IKoz.js";import"./chevron-up-CXqsWlQ8.js";import"./chevron-down-Za9QV_62.js";import"./cross-CxMC5EUY.js";import"./PdfViewerSidebar-BfZM3aJE.js";import"./index-hSkBF6vZ.js";import"./index-BFgBDgmk.js";import"./index-CCQ5u4Ue.js";import"./PdfViewerToolbar-CRcRxyd7.js";import"./Button-Cb25ceXV.js";import"./chevron-right-B1kP6VLM.js";import"./Input-DXEo1WM0.js";import"./search-0j6eRv30.js";import"./spin-CE50n_cx.js";import"./error-CgTFtvP9.js";import"./withOsdkMetrics-BmO3Nivv.js";import"./makeExternalStore-BdN3LE2k.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
