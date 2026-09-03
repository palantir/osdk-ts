import{j as r,M as s}from"./iframe-Cfa7VV9b.js";import{P as p}from"./pdf-viewer-DVnYYS6B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BFCv4g-U.js";import"./preload-helper-CNnDmdGh.js";import"./PdfViewer-BYrcgbdb.js";import"./index-CH9AmopW.js";import"./BasePdfViewer-NR6-OuXb.js";import"./BasePdfViewer.module.css-CgLU-pa-.js";import"./PdfViewerAnnotationLayer-DQph7Uis.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu2Ufo8b.js";import"./PdfViewerOutlineSidebar-UMqI4d7N.js";import"./PdfViewerSidebarHeader-B6684-1W.js";import"./useBaseUiId-D_k54qol.js";import"./useControlled-CjWedb3G.js";import"./CompositeRoot-C_HDpiI_.js";import"./CompositeItem-Hyqz3S2c.js";import"./ToolbarRootContext-b1GByVNw.js";import"./composite-CrY-lNuw.js";import"./svgIconContainer-DvY8yHqi.js";import"./PdfViewerSearchBar-D69QY-zx.js";import"./chevron-up-CUjg0Z2m.js";import"./chevron-down-GlFAnb1p.js";import"./cross-BEJbLhxw.js";import"./PdfViewerSidebar-CKZoPJG_.js";import"./index-DIAXbPaT.js";import"./index-Bv1S_5M0.js";import"./index-TmLVBI9S.js";import"./PdfViewerToolbar-5BwV1AyY.js";import"./Button-DTyGlfF4.js";import"./chevron-right-Z5MQe8K0.js";import"./Input-DN8AJK08.js";import"./search-BwdTmPFq.js";import"./spin-C4eQPiMh.js";import"./error-DARJoisr.js";import"./withOsdkMetrics-D6ZfJzuW.js";import"./makeExternalStore-CgLbI1f8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
