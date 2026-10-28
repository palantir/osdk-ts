import{j as r,M as s}from"./iframe-Dd3-Yl6N.js";import{P as p}from"./pdf-viewer-CAiet5G4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8IfHSEG.js";import"./preload-helper-C9sTmRJF.js";import"./PdfViewer-Bgstrgpr.js";import"./index-BiUH_hpy.js";import"./BasePdfViewer-DrzXrk3B.js";import"./BasePdfViewer.module.css-Ehta4KzJ.js";import"./PdfViewerAnnotationLayer-R1zqJ7st.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8BsfczS.js";import"./PdfViewerOutlineSidebar-C5shv0E7.js";import"./PdfViewerSidebarHeader-QhjYFllf.js";import"./useBaseUiId-CtlPAw8O.js";import"./useControlled-tZuoOrAX.js";import"./CompositeRoot-CYHaL44h.js";import"./CompositeItem-BLXgiCJ0.js";import"./ToolbarRootContext-YQCd6tra.js";import"./composite-B7_CRtOh.js";import"./svgIconContainer-B7D9nEeV.js";import"./PdfViewerSearchBar-QA9aT6pz.js";import"./chevron-up-D7jv6yNF.js";import"./chevron-down-COpzwsCU.js";import"./cross-Eqzrh4V_.js";import"./PdfViewerSidebar-8msTLgFB.js";import"./index-D_tBmJ25.js";import"./index-Dk7mnZge.js";import"./index-CbNEs7cg.js";import"./PdfViewerToolbar-BxkXnK1_.js";import"./Button-DgI_B-BT.js";import"./chevron-right-DA4NJB2v.js";import"./Input-BFjIxR6L.js";import"./search-uFxQauC9.js";import"./spin-X6cuFIIZ.js";import"./error-OA8M66y2.js";import"./withOsdkMetrics-CIN8qa0j.js";import"./makeExternalStore-C5CgSHDu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
