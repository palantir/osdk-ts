import{j as r,M as s}from"./iframe-BM7Q-dMJ.js";import{P as p}from"./pdf-viewer-8TaXLU4q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3XrbicC.js";import"./preload-helper-BWjcCog8.js";import"./PdfViewer-Cq3SGdxI.js";import"./index-BybuAuux.js";import"./BasePdfViewer-CegCZ-_P.js";import"./BasePdfViewer.module.css-nSyCxvl4.js";import"./PdfViewerAnnotationLayer-OgzAtuN2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-l7MApX9z.js";import"./PdfViewerOutlineSidebar-DZpPYfdr.js";import"./PdfViewerSidebarHeader-BZKRkk-F.js";import"./useBaseUiId-CwUHdvwv.js";import"./useControlled-BQdmVz8X.js";import"./CompositeRoot-z0py_T76.js";import"./CompositeItem-DlNVx4-v.js";import"./ToolbarRootContext-DKuunDH_.js";import"./composite-Lv4sNU4L.js";import"./svgIconContainer-Bht8VzUd.js";import"./PdfViewerSearchBar-BGkAjdNY.js";import"./chevron-up-bqyYW2L1.js";import"./chevron-down-DxXNwnvG.js";import"./cross-1-TnP1TT.js";import"./PdfViewerSidebar-BVGtWoik.js";import"./index-D84UhGg8.js";import"./index-SuuHTDz0.js";import"./index-B_WLJNqi.js";import"./PdfViewerToolbar-Ck6gV8Cm.js";import"./Button-DPCu3lFK.js";import"./chevron-right-BkL7OeXE.js";import"./Input-DfRNBHCu.js";import"./search-Ddrt0Hct.js";import"./spin-Cv2geSOs.js";import"./error-o6sSvsT-.js";import"./withOsdkMetrics-DNVP_GMx.js";import"./makeExternalStore-6NEmzi49.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
