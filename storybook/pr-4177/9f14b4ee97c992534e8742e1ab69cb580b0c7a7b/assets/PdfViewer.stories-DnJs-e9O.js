import{j as r,M as s}from"./iframe-DXrbmFQU.js";import{P as p}from"./pdf-viewer-L8JWg5J9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DG3quKBG.js";import"./preload-helper-BpeD6mmz.js";import"./PdfViewer-VZTLi8e6.js";import"./index-CC0lkARs.js";import"./BasePdfViewer-Dvvnmc88.js";import"./BasePdfViewer.module.css-DEayOuOW.js";import"./PdfViewerAnnotationLayer-M49vTXNd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-G7AYbEAv.js";import"./PdfViewerOutlineSidebar-B6XbiplY.js";import"./PdfViewerSidebarHeader-Cbcgtr4V.js";import"./useBaseUiId-Bmo8e_yl.js";import"./useControlled-B7qMp3Jr.js";import"./CompositeRoot-BMwn0jDR.js";import"./CompositeItem-BFe5eqlW.js";import"./ToolbarRootContext-D7OAZc3v.js";import"./composite-CtPqGv2Q.js";import"./svgIconContainer-D3MknpC0.js";import"./PdfViewerSearchBar-BO3HaKPH.js";import"./chevron-up-BZwni23l.js";import"./chevron-down-Dt-I4rTn.js";import"./cross-CS_4qYPy.js";import"./PdfViewerSidebar-BXdWe35K.js";import"./index-Cmhl-M1L.js";import"./index-C1FzfM-T.js";import"./index-F1aEIIjQ.js";import"./PdfViewerToolbar-DvZHIyh4.js";import"./Button-CaEsIWhF.js";import"./chevron-right-kN0Kdz9z.js";import"./Input-sDtqAHjV.js";import"./search-B06mFuBu.js";import"./spin-CjB3f3vR.js";import"./error-DTlfxxBy.js";import"./withOsdkMetrics-CrZM7ObA.js";import"./makeExternalStore-CmG1_iz5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
