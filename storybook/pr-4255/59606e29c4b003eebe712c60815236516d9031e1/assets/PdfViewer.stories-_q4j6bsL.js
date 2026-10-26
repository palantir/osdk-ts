import{j as r,M as s}from"./iframe-B_i7Ph77.js";import{P as p}from"./pdf-viewer-bVPO1UY6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-vBSlfIwA.js";import"./preload-helper-DvjJ0SzX.js";import"./PdfViewer-CPIEVnSs.js";import"./index-COajzjZ8.js";import"./BasePdfViewer-DIytK1FU.js";import"./BasePdfViewer.module.css-DI5fbMhS.js";import"./PdfViewerAnnotationLayer-CbeGO9Pe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzVGTAwX.js";import"./PdfViewerOutlineSidebar-DCBE6n0D.js";import"./PdfViewerSidebarHeader-D1fva1sp.js";import"./useBaseUiId-CW69tl4R.js";import"./useControlled-CPBNOwGg.js";import"./CompositeRoot-WVP3R4rv.js";import"./CompositeItem-EZxEWVoS.js";import"./ToolbarRootContext-0-u9G15j.js";import"./composite-uqQjgKuY.js";import"./svgIconContainer-F3PywaHC.js";import"./PdfViewerSearchBar-lFzgtwNX.js";import"./chevron-up-DOh347jk.js";import"./chevron-down-BOncWiCm.js";import"./cross-r8gHAdxN.js";import"./PdfViewerSidebar-BidYiUbX.js";import"./index-DvLIeE9l.js";import"./index-BfVetZX7.js";import"./index-CKxO46Y-.js";import"./PdfViewerToolbar-BY3i6BdI.js";import"./Button-D37UVdN3.js";import"./chevron-right-C3JZHejg.js";import"./Input-Dl5sH1Q7.js";import"./search-Ci82BY-M.js";import"./spin-wUd6jMRT.js";import"./error-DMPOuvoW.js";import"./withOsdkMetrics-DGIAIiU_.js";import"./makeExternalStore-Bzou7Lqu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
