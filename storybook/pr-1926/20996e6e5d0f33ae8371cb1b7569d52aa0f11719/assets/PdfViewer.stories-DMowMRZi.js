import{j as r,M as s}from"./iframe-BatTRwfa.js";import{P as p}from"./pdf-viewer-DLOFQyAl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CzhGkzzA.js";import"./preload-helper-1dO9BeYB.js";import"./PdfViewer-BTCr8zWh.js";import"./index-DOW0CwQC.js";import"./BasePdfViewer-C88bX-OC.js";import"./BasePdfViewer.module.css-DsJlWK0_.js";import"./PdfViewerAnnotationLayer-BfdPlywD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrlL28F-.js";import"./PdfViewerOutlineSidebar-CSMBqjSr.js";import"./PdfViewerSidebarHeader-B3Cbl0jO.js";import"./useBaseUiId-DvfpcKJo.js";import"./useControlled-STn9JHtw.js";import"./CompositeRoot-DYz2YvtC.js";import"./CompositeItem-5Yv0-9Y-.js";import"./ToolbarRootContext-DNGFWytt.js";import"./composite-BBv4613M.js";import"./svgIconContainer-BEJ8Uc8u.js";import"./PdfViewerSearchBar-BhiwtH0E.js";import"./chevron-up-CQaqaItd.js";import"./chevron-down-DrwZYKMn.js";import"./cross-BDeJmnrY.js";import"./PdfViewerSidebar-DYqotsxK.js";import"./index-DAlaDr9m.js";import"./index-CjHrbaV9.js";import"./index-zVbC2njb.js";import"./PdfViewerToolbar-BY7CKcLZ.js";import"./Button-Du5jWjff.js";import"./chevron-right-DqCP77j9.js";import"./Input-C5LDgX9X.js";import"./search-CZvhHXAJ.js";import"./spin-DD2yJORt.js";import"./error-D_Nf9rBh.js";import"./withOsdkMetrics-C5QyIn2v.js";import"./makeExternalStore-CnkPGtRT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
