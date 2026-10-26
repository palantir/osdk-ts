import{j as r,M as s}from"./iframe-BnIVPADF.js";import{P as p}from"./pdf-viewer-XlbiF7ff.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dsfpx54Z.js";import"./preload-helper-D6GdL41X.js";import"./PdfViewer-sJwpriHQ.js";import"./index-DBHi4RbH.js";import"./BasePdfViewer-BM-4E71t.js";import"./BasePdfViewer.module.css-Dn7wNhxC.js";import"./PdfViewerAnnotationLayer-BrOALjQ8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiSn_oVQ.js";import"./PdfViewerOutlineSidebar-CK8hypyw.js";import"./PdfViewerSidebarHeader-B9lCKHXE.js";import"./useBaseUiId-BMj8ARX-.js";import"./useControlled-DeFsLTJI.js";import"./CompositeRoot-CFcs0vJI.js";import"./CompositeItem-B5UfOKT8.js";import"./ToolbarRootContext-Cc6jVzYJ.js";import"./composite-Ji9umu3K.js";import"./svgIconContainer-gtMhd5mD.js";import"./PdfViewerSearchBar-DhFma-Ko.js";import"./chevron-up-DOZvnOT5.js";import"./chevron-down-B7znWhjE.js";import"./cross-DLlUDs4D.js";import"./PdfViewerSidebar-CgCRHfGk.js";import"./index-zynnMEX1.js";import"./index-BKtQYF4d.js";import"./index-DwvcPf66.js";import"./PdfViewerToolbar-BlV_Ttul.js";import"./Button-iaybQtEF.js";import"./chevron-right-BuPvdZfO.js";import"./Input-CKDCD_hI.js";import"./search-BssqF2mG.js";import"./spin-CjB6e4a9.js";import"./error-BWHJsjpo.js";import"./withOsdkMetrics-B_v2aQKf.js";import"./makeExternalStore-DEMjFRTS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
