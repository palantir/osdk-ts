import{j as r,M as s}from"./iframe-BLH-rzjX.js";import{P as p}from"./pdf-viewer-DeT2nyXp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CtEGDKVn.js";import"./preload-helper-Boseizqx.js";import"./PdfViewer-Dq8iq7KV.js";import"./index-BshiJ0vb.js";import"./BasePdfViewer-Bo7rWmOU.js";import"./BasePdfViewer.module.css-DTQxah4m.js";import"./PdfViewerAnnotationLayer-D4lhrbmT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_5MznKy7.js";import"./PdfViewerOutlineSidebar-CZCct772.js";import"./PdfViewerSidebarHeader-hJHcOFSp.js";import"./useBaseUiId-_L7E6isP.js";import"./useControlled-DoMCNvxt.js";import"./CompositeRoot-h8Sldw2w.js";import"./CompositeItem-tv6DhAGC.js";import"./ToolbarRootContext-N5PisKcU.js";import"./composite-CJF2SW-C.js";import"./svgIconContainer-ClFD8O3h.js";import"./PdfViewerSearchBar-CRPIU6eW.js";import"./chevron-up-CHdoJCyJ.js";import"./chevron-down-gdTU0sCy.js";import"./cross-CjxN7NXy.js";import"./PdfViewerSidebar-DAayhDiI.js";import"./index-D07nHwth.js";import"./index-CjzgRjXg.js";import"./index-1GWYtBv5.js";import"./PdfViewerToolbar-B2NCH-gb.js";import"./Button-Cb7__wFY.js";import"./chevron-right-C3H8dwVY.js";import"./Input-ChiRpiSd.js";import"./search-Dcpgl82t.js";import"./spin-CJVFbEAy.js";import"./error-CxjKCqiV.js";import"./withOsdkMetrics-CNvw97j4.js";import"./makeExternalStore-VNm4xFie.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
