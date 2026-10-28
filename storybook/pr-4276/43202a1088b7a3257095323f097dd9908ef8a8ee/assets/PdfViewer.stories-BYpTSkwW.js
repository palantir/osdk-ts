import{j as r,M as s}from"./iframe-BeH6Kgtk.js";import{P as p}from"./pdf-viewer-ohaW3aGp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CF8qoWBE.js";import"./preload-helper-DIEhRyUP.js";import"./PdfViewer-DoAnniu5.js";import"./index-DFSFBHkF.js";import"./BasePdfViewer-oTCHO3p_.js";import"./BasePdfViewer.module.css-ChUslZbq.js";import"./PdfViewerAnnotationLayer-DkUI_uMp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D6EHTD6Z.js";import"./PdfViewerOutlineSidebar-DaFPsxqA.js";import"./PdfViewerSidebarHeader-77fjVf9i.js";import"./useBaseUiId-CtZE3HDc.js";import"./useControlled-Bdo1gXa6.js";import"./CompositeRoot-D-s14YLf.js";import"./CompositeItem-BFteZ_HC.js";import"./ToolbarRootContext-Dd5p2hpI.js";import"./composite-oEq7yTUS.js";import"./svgIconContainer-Bb-RAJkY.js";import"./PdfViewerSearchBar-CmUbaxGa.js";import"./chevron-up-Ctu-RjXk.js";import"./chevron-down-BQRyOpPG.js";import"./cross-CX4SHNo3.js";import"./PdfViewerSidebar-uvzmD0Sr.js";import"./index-BxZQFTTq.js";import"./index-Bi2hqiVi.js";import"./index-DgDaT3k8.js";import"./PdfViewerToolbar-DlSNM3ay.js";import"./Button-Cy9t27DN.js";import"./chevron-right-Y0e9kbdw.js";import"./Input-RgiEvmaC.js";import"./search-CAOX7A7K.js";import"./spin-CsXXpM1o.js";import"./error-Dyg0hO9Y.js";import"./withOsdkMetrics-Dy2obrep.js";import"./makeExternalStore-CtDF7lCi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
