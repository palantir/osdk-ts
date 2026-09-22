import{j as r,M as s}from"./iframe-B4Qf2x47.js";import{P as p}from"./pdf-viewer-DrmzIKb6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLUi2raN.js";import"./preload-helper-DmaZizbX.js";import"./PdfViewer-BkQ4uXGh.js";import"./index-B97ocqDB.js";import"./BasePdfViewer-D5vDN9Jj.js";import"./BasePdfViewer.module.css-RWkpJT44.js";import"./PdfViewerAnnotationLayer-CS9KVtob.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-w0bydBvY.js";import"./PdfViewerOutlineSidebar-BjT3rqt5.js";import"./PdfViewerSidebarHeader-nXkXU7l-.js";import"./useBaseUiId-CuoaS_IK.js";import"./useControlled-CjTdF22S.js";import"./CompositeRoot-D4QEyeBh.js";import"./CompositeItem-Dm0AUseO.js";import"./ToolbarRootContext-gq31GD3n.js";import"./composite-BxeFJGWF.js";import"./svgIconContainer-Bx39OoUr.js";import"./PdfViewerSearchBar-DOts3Nag.js";import"./chevron-up-ak9y96z8.js";import"./chevron-down-DNdE9fs0.js";import"./cross-w9xefAeS.js";import"./PdfViewerSidebar-CVTSkMed.js";import"./index-COOPd0_C.js";import"./index-DHeuY6qT.js";import"./index-B6nqCMvX.js";import"./PdfViewerToolbar-BD5UcmeW.js";import"./Button-xKEqEHmE.js";import"./chevron-right-CRJLrJhs.js";import"./Input-CT1b0uTH.js";import"./search-D96kAX6P.js";import"./spin-DGAd4HtK.js";import"./error-0thEM3V8.js";import"./withOsdkMetrics-CQFCnZa4.js";import"./makeExternalStore-DYKlPK4M.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
