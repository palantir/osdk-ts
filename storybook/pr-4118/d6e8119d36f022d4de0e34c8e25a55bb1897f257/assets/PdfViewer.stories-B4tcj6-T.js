import{j as r,M as s}from"./iframe-B_S0EqMa.js";import{P as p}from"./pdf-viewer-BLh4qGLW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_S20HQd.js";import"./preload-helper-VT4tRblm.js";import"./PdfViewer-B1vG1nqE.js";import"./index-omwonnY8.js";import"./BasePdfViewer-BvKzLRyW.js";import"./BasePdfViewer.module.css-BMp8-8Ni.js";import"./PdfViewerAnnotationLayer-DSuGzrjY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7Mpp98q.js";import"./PdfViewerOutlineSidebar-Ciz0Z9--.js";import"./PdfViewerSidebarHeader-CNuRtO9g.js";import"./useBaseUiId-BlWO7UtN.js";import"./useControlled-HSy2N_AY.js";import"./CompositeRoot-C1wGXlQY.js";import"./CompositeItem-C2Mv02sz.js";import"./ToolbarRootContext-zpUnsunT.js";import"./composite-PIV4lDcc.js";import"./svgIconContainer-D37wr4aE.js";import"./PdfViewerSearchBar-D9KR-1r3.js";import"./chevron-up-GXPV9SW8.js";import"./chevron-down-kik4znnV.js";import"./cross-CQGje-Eb.js";import"./PdfViewerSidebar-B6BEUMtC.js";import"./index-Eadm7kDD.js";import"./index-DIzgx3sP.js";import"./index-b4QG9WWh.js";import"./PdfViewerToolbar-DSuwqjP2.js";import"./Button-Bt2kiQIM.js";import"./chevron-right-CDVlKyce.js";import"./Input-Dc-QK3C6.js";import"./search-B1fKCW94.js";import"./spin-lKvDQ_9x.js";import"./error-BnUCzbEn.js";import"./withOsdkMetrics-CXFFSRl8.js";import"./makeExternalStore-CvSwbGtd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
