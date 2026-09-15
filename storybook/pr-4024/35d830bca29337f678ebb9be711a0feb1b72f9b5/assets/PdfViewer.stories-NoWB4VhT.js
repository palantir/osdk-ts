import{j as r,M as s}from"./iframe-DSG-Gahl.js";import{P as p}from"./pdf-viewer-ByHcBa8t.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DMgX9-ui.js";import"./preload-helper-DD3-CUB8.js";import"./PdfViewer-BS00Gjlc.js";import"./index-4o4hAzg4.js";import"./BasePdfViewer-BUODFIKz.js";import"./BasePdfViewer.module.css-CGVOyQ24.js";import"./PdfViewerAnnotationLayer-BFZLsdHu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMTZgWGk.js";import"./PdfViewerOutlineSidebar-Dq9gEF4d.js";import"./PdfViewerSidebarHeader-CKAxZ4tS.js";import"./useBaseUiId-Br7wSVRu.js";import"./useControlled-BS70aI_K.js";import"./CompositeRoot-CgYyjO2Y.js";import"./CompositeItem-spSeCvAe.js";import"./ToolbarRootContext-B8oHTFsm.js";import"./composite-WUh_Mv2U.js";import"./svgIconContainer-CkL2iDb7.js";import"./PdfViewerSearchBar-Bogp-SsP.js";import"./chevron-up-X8KdYBdz.js";import"./chevron-down-CBanfjsL.js";import"./cross-DzIvG2rT.js";import"./PdfViewerSidebar-BVYp-ZAy.js";import"./index-DaTFX0DM.js";import"./index-BRRswYIi.js";import"./index-CphGNIJN.js";import"./PdfViewerToolbar-Br_DOhy9.js";import"./Button-DCXgUJWi.js";import"./chevron-right-79cxlVoK.js";import"./Input-DBWCKen9.js";import"./search-Cif2ZQOV.js";import"./spin-RSaZfQpk.js";import"./error-DgA6RGKH.js";import"./withOsdkMetrics-CBCC75vt.js";import"./makeExternalStore-eZw-8kVK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
