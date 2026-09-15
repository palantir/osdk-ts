import{j as r,M as s}from"./iframe-CpWBydph.js";import{P as p}from"./pdf-viewer-BFtYQyur.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJmMUfSA.js";import"./preload-helper-D2EqYees.js";import"./PdfViewer-CfeSyXYi.js";import"./index-DvfucFad.js";import"./BasePdfViewer-Cqdi6kI2.js";import"./BasePdfViewer.module.css-BfvzlM9d.js";import"./PdfViewerAnnotationLayer-J-PjgImW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9K5JpRv.js";import"./PdfViewerOutlineSidebar-BSicft0I.js";import"./PdfViewerSidebarHeader-DKtKoFDu.js";import"./useBaseUiId-COtj2_rS.js";import"./useControlled-BmS1IvVS.js";import"./CompositeRoot-CWACIhri.js";import"./CompositeItem-nG423aGN.js";import"./ToolbarRootContext-DMifvP-V.js";import"./composite-B-otFn75.js";import"./svgIconContainer-DbE5PrYx.js";import"./PdfViewerSearchBar-CRo-Qv8g.js";import"./chevron-up-CPsynwKT.js";import"./chevron-down-D78fMNFz.js";import"./cross-NuddkLO5.js";import"./PdfViewerSidebar-hFdx6tJG.js";import"./index-D9R22dHy.js";import"./index-DrBBVf0s.js";import"./index-BmfQPoOF.js";import"./PdfViewerToolbar-DOb0PDMx.js";import"./Button-CVph9TxQ.js";import"./chevron-right-BWSCpFY8.js";import"./Input-CBPVcjqK.js";import"./search-CA9yp1JF.js";import"./spin-BhXoHZFJ.js";import"./error-Due8my_O.js";import"./withOsdkMetrics-CmC654Yj.js";import"./makeExternalStore-C7U98bYJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
