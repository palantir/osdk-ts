import{j as r,M as s}from"./iframe-B_oy6e6M.js";import{P as p}from"./pdf-viewer-Dt4y-ZeZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CguDR2cy.js";import"./preload-helper-CWVJ8YRK.js";import"./PdfViewer-B5ZEXAHQ.js";import"./index-DZJD6sDp.js";import"./BasePdfViewer-B85Y4esi.js";import"./BasePdfViewer.module.css-BYqHA1fV.js";import"./PdfViewerAnnotationLayer-DzotMZcd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dr0fZAl_.js";import"./PdfViewerOutlineSidebar-BEuzomwX.js";import"./PdfViewerSidebarHeader-BYBFN5ML.js";import"./useBaseUiId-POvatS82.js";import"./useControlled-zA33IEOZ.js";import"./CompositeRoot-CZtVj5nO.js";import"./CompositeItem-C4ZzMkp4.js";import"./ToolbarRootContext-DJgLJnil.js";import"./composite-ZAoedBeg.js";import"./svgIconContainer-C6P8MOfd.js";import"./PdfViewerSearchBar-QoKPEFkb.js";import"./chevron-up-B_wJHEMW.js";import"./chevron-down-rpYvjBzs.js";import"./cross-DSgNe7Mr.js";import"./PdfViewerSidebar-hD5ec8Qp.js";import"./index-BXsPCItr.js";import"./index-T8MVz2I4.js";import"./index-CS3PWFhc.js";import"./PdfViewerToolbar-CIuoMxtB.js";import"./Button-CrOvgvfA.js";import"./chevron-right-sIMpwAWA.js";import"./Input-DTC7T4Cz.js";import"./search-DCED0BUt.js";import"./spin-XFDzUxCO.js";import"./error-BNXYH_2v.js";import"./withOsdkMetrics-C137OdQw.js";import"./makeExternalStore-A3uWrp0V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
