import{j as r,M as s}from"./iframe-DkbM6O-Q.js";import{P as p}from"./pdf-viewer-DH6OebYi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_gQ4DfJh.js";import"./preload-helper-DC9LUrcb.js";import"./PdfViewer-B0ggxMNW.js";import"./index-5Xb7iy_v.js";import"./BasePdfViewer-DY0Ejb8j.js";import"./BasePdfViewer.module.css-C1m-UNR_.js";import"./PdfViewerAnnotationLayer-B0dxK3o5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVuiqhJL.js";import"./PdfViewerOutlineSidebar-B73KUutS.js";import"./PdfViewerSidebarHeader-CT5DUiDa.js";import"./useBaseUiId-CbWoUVda.js";import"./useControlled-TBJYjn-n.js";import"./CompositeRoot-XW1VV55v.js";import"./CompositeItem-CIMhmz-B.js";import"./ToolbarRootContext-B5sg7AjV.js";import"./composite-CSTh2sUL.js";import"./svgIconContainer-aUCWMueJ.js";import"./PdfViewerSearchBar-Cwl-uTOR.js";import"./chevron-up-Tuqv7cnq.js";import"./chevron-down-DwM4wuWt.js";import"./cross-Bgds_EJl.js";import"./PdfViewerSidebar-BrFmG7VB.js";import"./index-Cp7hW4d_.js";import"./index-DjV9sMAb.js";import"./index-CS7XaPdo.js";import"./PdfViewerToolbar-CdOBhO2g.js";import"./Button-DDqxd8Ee.js";import"./chevron-right-BKJdsRVB.js";import"./Input-BHgKvDQ1.js";import"./search-eJ_oBGNG.js";import"./spin-CfrApU-M.js";import"./error-Dg6O-1zt.js";import"./withOsdkMetrics-BmIxPjSX.js";import"./makeExternalStore-B4N8C8OH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
