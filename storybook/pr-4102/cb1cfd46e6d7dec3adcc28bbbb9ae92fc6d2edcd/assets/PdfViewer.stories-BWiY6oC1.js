import{j as r,M as s}from"./iframe-DwrFhh8X.js";import{P as p}from"./pdf-viewer-CKB22J7n.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BVDWTib7.js";import"./preload-helper-CtRLQ8d2.js";import"./PdfViewer-DmE7hach.js";import"./index-2C7ws8qd.js";import"./BasePdfViewer-Ci5jAURJ.js";import"./BasePdfViewer.module.css-C9XfLbls.js";import"./PdfViewerAnnotationLayer-7xMXV2ra.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9wkSrLT.js";import"./PdfViewerOutlineSidebar-ByhmjLJE.js";import"./PdfViewerSidebarHeader-CKYzcCUv.js";import"./useBaseUiId-hjF8-Tkz.js";import"./useControlled-BWpptLO1.js";import"./CompositeRoot-mI7XZoke.js";import"./CompositeItem-Cjr-y7lk.js";import"./ToolbarRootContext-BgJLWr5w.js";import"./composite-CQaDz_1E.js";import"./svgIconContainer-Dfv48f4w.js";import"./PdfViewerSearchBar-EnTENySz.js";import"./chevron-up-DvEyCsoq.js";import"./chevron-down-BBihCk-h.js";import"./cross-CPVTirRP.js";import"./PdfViewerSidebar-CYojo684.js";import"./index-DvIHEHIa.js";import"./index-BkjyrkST.js";import"./index-8KaHvHT1.js";import"./PdfViewerToolbar-BIyp3LrH.js";import"./Button-DEic01Xh.js";import"./chevron-right-rPGgppyE.js";import"./Input-CETxnph3.js";import"./search-B4eh0B39.js";import"./spin-D9kCjEXK.js";import"./error-Cw2yDStD.js";import"./withOsdkMetrics-BhQ--KKZ.js";import"./makeExternalStore-BDmfTWiu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
