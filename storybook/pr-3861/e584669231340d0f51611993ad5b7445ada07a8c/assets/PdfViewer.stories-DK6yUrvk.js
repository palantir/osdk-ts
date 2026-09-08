import{j as r,M as s}from"./iframe-CtGIC4wf.js";import{P as p}from"./pdf-viewer-C7cwIh25.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BtPX3Mf5.js";import"./preload-helper-Ch20KRc2.js";import"./PdfViewer-DdHudRfo.js";import"./index-D-8enqIL.js";import"./BasePdfViewer-CgnPqdEn.js";import"./BasePdfViewer.module.css-DJ_esRYH.js";import"./PdfViewerAnnotationLayer-BvkQq_t6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuC57QWx.js";import"./PdfViewerOutlineSidebar-BhQDqhWq.js";import"./PdfViewerSidebarHeader-B7i5b0Y5.js";import"./useBaseUiId-DmITm_fg.js";import"./useControlled-Dn14MKUN.js";import"./CompositeRoot-om5jhTSf.js";import"./CompositeItem-Blb9OYTf.js";import"./ToolbarRootContext-u5ji7rvZ.js";import"./composite-BpxrOvE9.js";import"./svgIconContainer-CIwPC-KF.js";import"./PdfViewerSearchBar-B6HvsJLh.js";import"./chevron-up-Bd3-i9IO.js";import"./chevron-down-kLepJLrY.js";import"./cross-7ld4MA3o.js";import"./PdfViewerSidebar-RKCHn4VB.js";import"./index-CJuiV3p2.js";import"./index-DaOQzUZN.js";import"./index-BSpR3dVY.js";import"./PdfViewerToolbar-CAcOa_Un.js";import"./Button-Bzw6-RIC.js";import"./chevron-right-B9e5fgH9.js";import"./Input-CpszBXLO.js";import"./search-w1jm1zVn.js";import"./spin-CeGF-HQs.js";import"./error-C6MzmjpC.js";import"./withOsdkMetrics-ozl4Wy9n.js";import"./makeExternalStore-WvYcSVhg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
