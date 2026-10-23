import{j as r,M as s}from"./iframe-DKFdWtvL.js";import{P as p}from"./pdf-viewer-CdNoXnhO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZN8_JQh.js";import"./preload-helper-CE0EJEax.js";import"./PdfViewer-85vyaL7W.js";import"./index-Zr7MzFSe.js";import"./BasePdfViewer-DEO3w-bF.js";import"./BasePdfViewer.module.css-Ba5sA0A3.js";import"./PdfViewerAnnotationLayer-Bz7UUApU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKrPnQ0D.js";import"./PdfViewerOutlineSidebar-DQp-I0c1.js";import"./PdfViewerSidebarHeader-3h8sVQ0L.js";import"./useBaseUiId-wiNmPbxB.js";import"./useControlled-xNoP3k9v.js";import"./CompositeRoot-Dk2X-VSV.js";import"./CompositeItem-BafBUoyW.js";import"./ToolbarRootContext-CrA7gaTE.js";import"./composite-Cu9id-g4.js";import"./svgIconContainer-mDDpTeTZ.js";import"./PdfViewerSearchBar-CCy5HAez.js";import"./chevron-up-BtJVnOvE.js";import"./chevron-down-BKXttnNC.js";import"./cross-DwMbeucq.js";import"./PdfViewerSidebar-L7hMeYWQ.js";import"./index-Esiyv4F3.js";import"./index-CKHkcl8C.js";import"./index-BEWpIeZQ.js";import"./PdfViewerToolbar-CgMc824X.js";import"./Button-DqI2Ud1s.js";import"./chevron-right-kDTYGnxO.js";import"./Input-veW-XqjJ.js";import"./search-DRLDRoqN.js";import"./spin-Dn-X5IP5.js";import"./error-D3OaIHY1.js";import"./withOsdkMetrics-DUGrXPH7.js";import"./makeExternalStore-De86ji-X.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
