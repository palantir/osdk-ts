import{j as r,M as s}from"./iframe-CRRi8SgO.js";import{P as p}from"./pdf-viewer-u6epclr5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJwnuqn2.js";import"./preload-helper-BwQis52u.js";import"./PdfViewer-Bpa5gD8w.js";import"./index-2tg5-UQV.js";import"./BasePdfViewer-BJb8lt0S.js";import"./BasePdfViewer.module.css-BDCghqyD.js";import"./PdfViewerAnnotationLayer-C-kZZRkg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUgIlibi.js";import"./PdfViewerOutlineSidebar-D4_YewB8.js";import"./PdfViewerSidebarHeader-r0JNVpsp.js";import"./useBaseUiId-iEjqlsrm.js";import"./useControlled-CowgUxzg.js";import"./CompositeRoot-B7XVMLpE.js";import"./CompositeItem-Bioh8Trj.js";import"./ToolbarRootContext-D3Qkj0-s.js";import"./composite-AZXA_87F.js";import"./svgIconContainer-DTz_qMc2.js";import"./PdfViewerSearchBar-DfkCtFQy.js";import"./chevron-up-C0JBGwEf.js";import"./chevron-down-D4f-osYR.js";import"./cross-C1gwy4VO.js";import"./PdfViewerSidebar-CXofUxbv.js";import"./index-B8kfer_a.js";import"./index-uVzecxAq.js";import"./index-BcwD145P.js";import"./PdfViewerToolbar-BP4DazqQ.js";import"./Button-nDYaCN2P.js";import"./chevron-right-B8CL2bV4.js";import"./Input-DG2OkDHs.js";import"./search-BNshWxL3.js";import"./spin-DRivlu-x.js";import"./error-DJ0QJQKA.js";import"./withOsdkMetrics-gAZiEnbR.js";import"./makeExternalStore-7XhwS57f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
