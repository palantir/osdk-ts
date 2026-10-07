import{j as r,M as s}from"./iframe-CaNMSJKR.js";import{P as p}from"./pdf-viewer-Bw9q-GhX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2hgtr4Y.js";import"./preload-helper-CgAWU684.js";import"./PdfViewer-BFuuCUf_.js";import"./index-BPdtXYwS.js";import"./BasePdfViewer-DIENCGyI.js";import"./BasePdfViewer.module.css-C5cAETnc.js";import"./PdfViewerAnnotationLayer-3FGRt68-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dghiwjfu.js";import"./PdfViewerOutlineSidebar-nq39xohS.js";import"./PdfViewerSidebarHeader-CuXvn3ou.js";import"./useBaseUiId-PY7Joizm.js";import"./useControlled-HJg4bzpt.js";import"./CompositeRoot-C1WErhmg.js";import"./CompositeItem-BvVHH8oi.js";import"./ToolbarRootContext-D5kbM0o_.js";import"./composite-Dq7ZaU-F.js";import"./svgIconContainer-BGKrE44l.js";import"./PdfViewerSearchBar-BnJZ4Qx_.js";import"./chevron-up-CWfWQbrd.js";import"./chevron-down-QgUF0MKI.js";import"./cross-B28N2oZp.js";import"./PdfViewerSidebar-BhGhBrwO.js";import"./index-A0dvdsuB.js";import"./index-DwHiGc_W.js";import"./index-D7ympiaR.js";import"./PdfViewerToolbar-DORrz68q.js";import"./Button-BAJ6GAJV.js";import"./chevron-right-B4c2sVpA.js";import"./Input-D6a6LuGx.js";import"./search-DK5elQsW.js";import"./spin-BeFn8cLq.js";import"./error-B3rv2TKE.js";import"./withOsdkMetrics-OgxjXoMv.js";import"./makeExternalStore-CFwmhsDu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
