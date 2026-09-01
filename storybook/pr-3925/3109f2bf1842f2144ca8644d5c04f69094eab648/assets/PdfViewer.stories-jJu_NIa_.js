import{j as r,M as s}from"./iframe-CXrz77U6.js";import{P as p}from"./pdf-viewer-C8IUVix0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_OMNP0d.js";import"./preload-helper-CKbgkQtS.js";import"./PdfViewer-xpM6jaWu.js";import"./index-X106RkLU.js";import"./BasePdfViewer-BzNokurD.js";import"./BasePdfViewer.module.css-lsFasZrY.js";import"./PdfViewerAnnotationLayer-BDaKcDcs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgqTutja.js";import"./PdfViewerOutlineSidebar-BeLhYBTB.js";import"./PdfViewerSidebarHeader-DPRMv6gP.js";import"./useBaseUiId-DEWnkFns.js";import"./useControlled-TnVqlNU3.js";import"./CompositeRoot-YeJPlhey.js";import"./CompositeItem-CriE69S9.js";import"./ToolbarRootContext-ly2czwm4.js";import"./composite-ggnTBoJz.js";import"./svgIconContainer-C1hoWfOl.js";import"./PdfViewerSearchBar-BxXNUWnp.js";import"./chevron-up-ByoBxqju.js";import"./chevron-down-CJJaofKQ.js";import"./cross-C0HgBeNT.js";import"./PdfViewerSidebar-YrlD66Gz.js";import"./index-CIyfLN4v.js";import"./index-CR04-v9m.js";import"./index-OCshk7-x.js";import"./PdfViewerToolbar-B9Fm5zwY.js";import"./Button-p_Ia-Jx9.js";import"./chevron-right-BG4tNyvz.js";import"./Input-BytGuL1G.js";import"./search-x_EEQ8qK.js";import"./spin-CnybUjHn.js";import"./error-CjxcPcQH.js";import"./withOsdkMetrics-gTbfWxlK.js";import"./makeExternalStore-odtlqelb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
