import{j as r,M as s}from"./iframe-4r61WmRz.js";import{P as p}from"./pdf-viewer-B9C6hTHm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BZtIpkMa.js";import"./preload-helper-DDuQcRVJ.js";import"./PdfViewer-kAWVQe6t.js";import"./index-kkt68f5x.js";import"./BasePdfViewer-BDZpyC5C.js";import"./BasePdfViewer.module.css-Bb9lc6BN.js";import"./PdfViewerAnnotationLayer-BPlFur1s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpjnGa0V.js";import"./PdfViewerOutlineSidebar-BPvwowyt.js";import"./PdfViewerSidebarHeader-C2yr6e6N.js";import"./useBaseUiId-B6Vv4jgV.js";import"./useControlled-586q8Cy3.js";import"./CompositeRoot-B7XVPv1E.js";import"./CompositeItem-D0ha4eYX.js";import"./ToolbarRootContext-B5z6j76t.js";import"./composite-DlrParFv.js";import"./svgIconContainer-EEsRKnTp.js";import"./PdfViewerSearchBar-9V0wshct.js";import"./chevron-up-e1gp8suS.js";import"./chevron-down-fJwSRjPJ.js";import"./cross-CNjOzwil.js";import"./PdfViewerSidebar-DTHxueyd.js";import"./index-C1bohVU8.js";import"./index-3UzI-GML.js";import"./index-Nju1pOqo.js";import"./PdfViewerToolbar-BfsShuBH.js";import"./Button-gqFcTzpQ.js";import"./chevron-right-E3bGQB3T.js";import"./Input-gOgOsLX3.js";import"./search-D6jPfv1v.js";import"./spin-BlvZqont.js";import"./error-DeL9Ip3k.js";import"./withOsdkMetrics-B9hUZ7DO.js";import"./makeExternalStore-DOF5HV2v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
