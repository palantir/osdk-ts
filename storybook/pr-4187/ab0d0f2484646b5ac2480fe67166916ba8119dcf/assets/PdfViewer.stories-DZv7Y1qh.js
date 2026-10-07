import{j as r,M as s}from"./iframe-B4KZUNWb.js";import{P as p}from"./pdf-viewer-Cjstm5Il.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CrpBKiPo.js";import"./preload-helper-ui8H5KaA.js";import"./PdfViewer-CqYTbkyT.js";import"./index-DESZZjJb.js";import"./BasePdfViewer-DBpbDGla.js";import"./BasePdfViewer.module.css-Bv4HWOFT.js";import"./PdfViewerAnnotationLayer-DUz40527.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVbQnWni.js";import"./PdfViewerOutlineSidebar-BPbJlQWX.js";import"./PdfViewerSidebarHeader-7pRJu47c.js";import"./useBaseUiId-DqBZmwDf.js";import"./useControlled-DUnmiOhJ.js";import"./CompositeRoot-Auxcedo_.js";import"./CompositeItem-BeLkJ8RK.js";import"./ToolbarRootContext-DvKJDRkf.js";import"./composite-kqMgXMmz.js";import"./svgIconContainer-CPLrBI81.js";import"./PdfViewerSearchBar-V77NIboS.js";import"./chevron-up-BDysN2WP.js";import"./chevron-down-BqCbkmmJ.js";import"./cross-D6lNZtEd.js";import"./PdfViewerSidebar-bTRSbh2H.js";import"./index-B8MTfnNm.js";import"./index-CRzCVguq.js";import"./index-BuRp3NOn.js";import"./PdfViewerToolbar-xCH8gZ_5.js";import"./Button-B0sQZAH6.js";import"./chevron-right-DKwh8WG3.js";import"./Input-d873acvu.js";import"./search-B4kRZAFp.js";import"./spin-9UwavnrD.js";import"./error-D-IekXva.js";import"./withOsdkMetrics-DZhR0TNz.js";import"./makeExternalStore-FuGpKWwp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
